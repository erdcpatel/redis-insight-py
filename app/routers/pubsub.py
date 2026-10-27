import asyncio
import datetime
import json
from typing import Optional
from fastapi import APIRouter, HTTPException, Query, Body, Depends, WebSocket, WebSocketDisconnect, status
from redis.exceptions import (
    RedisError,
    AuthenticationError,
    ConnectionError as RedisConnectionError,
    TimeoutError as RedisTimeoutError,
    ReadOnlyError,
    ClusterDownError,
    ResponseError,
)
from app.logger import logger
from app.dependencies import require_write_permission, get_target_conn_id
from app.models import PublishRequest, PublishResponse
from app.redis_manager import redis_manager

router = APIRouter(prefix="/api", tags=["PubSub"])


def raise_mapped_exception(e: Exception, context_msg: str):
    """Map Redis and system exceptions to meaningful HTTP status codes with diagnostic logging."""
    if isinstance(e, HTTPException):
        raise e

    logger.error(f"{context_msg}: {e}", exc_info=True)

    if isinstance(e, AuthenticationError):
        raise HTTPException(status_code=401, detail=f"Redis authentication failed: {str(e)}")
    elif isinstance(e, ReadOnlyError):
        raise HTTPException(status_code=403, detail="Write rejected: connected Redis node is a read-only replica.")
    elif isinstance(e, ClusterDownError):
        raise HTTPException(status_code=503, detail=f"Redis cluster is down or partitioned: {str(e)}")
    elif isinstance(e, (ConnectionError, RedisConnectionError)):
        raise HTTPException(status_code=503, detail=f"Redis connection unavailable: {str(e)}")
    elif isinstance(e, (TimeoutError, RedisTimeoutError)):
        raise HTTPException(status_code=504, detail=f"Redis command timed out: {str(e)}")
    elif isinstance(e, ResponseError):
        raise HTTPException(status_code=400, detail=f"Redis command error: {str(e)}")
    else:
        raise HTTPException(status_code=500, detail=f"{context_msg}: {str(e)}")


@router.post("/pubsub/publish", response_model=PublishResponse)
async def publish_message(
    payload: PublishRequest,
    conn_id: Optional[str] = Depends(get_target_conn_id),
    _perm: bool = Depends(require_write_permission),
):
    """
    Publish a message to a Redis Pub/Sub channel.
    Requires write permissions (protected in read-only / PROD mode).
    Returns the channel name and the count of receivers that received the payload.
    """
    channel = payload.channel.strip()
    if not channel:
        raise HTTPException(status_code=400, detail="Channel name cannot be empty.")

    try:
        client = await redis_manager.get_client(conn_id)
        receivers = await client.publish(channel, payload.message)
        logger.info(f"Published message to channel '{channel}' via conn '{conn_id}': received by {receivers} clients")
        return PublishResponse(channel=channel, receivers=int(receivers))
    except Exception as e:
        raise_mapped_exception(e, f"Failed to publish message to channel '{payload.channel}'")


@router.websocket("/ws/pubsub")
async def websocket_pubsub(websocket: WebSocket, conn_id: Optional[str] = Query(None)):
    """
    Real-time WebSocket endpoint for Redis Pub/Sub live message streaming.
    Supports dynamic SUBSCRIBE / PSUBSCRIBE and UNSUBSCRIBE / PUNSUBSCRIBE commands.
    Ensures safe resource cleanup upon disconnect with zero connection leaks.
    """
    target_id = (conn_id or "").strip() or redis_manager.selected_id
    try:
        client = await redis_manager.get_client(target_id)
    except Exception as e:
        logger.error(f"Failed to get Redis client for WebSocket pubsub: {e}")
        await websocket.close(code=1008)
        return

    await websocket.accept()
    pubsub = client.pubsub()
    stop_event = asyncio.Event()

    # Send initial connected greeting
    try:
        await websocket.send_json({
            "type": "connected",
            "conn_id": target_id,
            "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat()
        })
    except Exception:
        stop_event.set()

    async def redis_listener():
        try:
            while not stop_event.is_set():
                try:
                    msg = await pubsub.get_message(ignore_subscribe_messages=False, timeout=0.5)
                except Exception as e:
                    if stop_event.is_set():
                        break
                    logger.warning(f"PubSub get_message error: {e}")
                    await asyncio.sleep(0.5)
                    continue

                if msg is not None:
                    raw_data = msg.get("data")
                    if isinstance(raw_data, bytes):
                        try:
                            data_str = raw_data.decode("utf-8", errors="replace")
                        except Exception:
                            data_str = str(raw_data)
                    else:
                        data_str = raw_data

                    data_size = 0
                    if isinstance(data_str, str):
                        data_size = len(data_str.encode("utf-8", errors="replace"))
                    elif data_str is not None:
                        data_size = len(str(data_str).encode("utf-8", errors="replace"))

                    out_payload = {
                        "type": msg.get("type"),
                        "channel": msg.get("channel"),
                        "pattern": msg.get("pattern"),
                        "data": data_str,
                        "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
                        "size": data_size,
                    }
                    await websocket.send_json(out_payload)
                else:
                    await asyncio.sleep(0.01)
        except asyncio.CancelledError:
            pass
        except Exception as e:
            logger.debug(f"Redis PubSub listener ended: {e}")
        finally:
            stop_event.set()

    async def ws_receiver():
        try:
            while not stop_event.is_set():
                raw = await websocket.receive_text()
                try:
                    payload = json.loads(raw)
                except Exception:
                    await websocket.send_json({"type": "error", "message": "Invalid JSON format"})
                    continue

                action = (payload.get("action") or "").lower()

                if action == "ping":
                    await websocket.send_json({
                        "type": "pong",
                        "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat()
                    })
                elif action in ("subscribe", "psubscribe"):
                    is_pat = action == "psubscribe" or bool(payload.get("is_pattern", False))
                    channels = payload.get("channels") or ([payload["channel"]] if "channel" in payload else [])
                    patterns = payload.get("patterns") or ([payload["pattern"]] if "pattern" in payload else [])

                    if is_pat:
                        targets = patterns or channels
                        valid_targets = [str(t).strip() for t in targets if str(t).strip()]
                        if valid_targets:
                            await pubsub.psubscribe(*valid_targets)
                    else:
                        targets = channels
                        valid_targets = [str(t).strip() for t in targets if str(t).strip()]
                        if valid_targets:
                            await pubsub.subscribe(*valid_targets)
                elif action in ("unsubscribe", "punsubscribe"):
                    is_pat = action == "punsubscribe" or bool(payload.get("is_pattern", False))
                    channels = payload.get("channels") or ([payload["channel"]] if "channel" in payload else [])
                    patterns = payload.get("patterns") or ([payload["pattern"]] if "pattern" in payload else [])

                    if is_pat:
                        targets = patterns or channels
                        valid_targets = [str(t).strip() for t in targets if str(t).strip()]
                        if valid_targets:
                            await pubsub.punsubscribe(*valid_targets)
                        else:
                            await pubsub.punsubscribe()
                    else:
                        targets = channels
                        valid_targets = [str(t).strip() for t in targets if str(t).strip()]
                        if valid_targets:
                            await pubsub.unsubscribe(*valid_targets)
                        else:
                            await pubsub.unsubscribe()
                else:
                    await websocket.send_json({"type": "error", "message": f"Unsupported Pub/Sub action: '{action}'"})
        except WebSocketDisconnect:
            pass
        except asyncio.CancelledError:
            pass
        except Exception as e:
            logger.debug(f"WebSocket receiver disconnected/ended: {e}")
        finally:
            stop_event.set()

    receiver_task = asyncio.create_task(ws_receiver())
    listener_task = asyncio.create_task(redis_listener())

    try:
        done, pending = await asyncio.wait(
            [receiver_task, listener_task],
            return_when=asyncio.FIRST_COMPLETED
        )
    finally:
        stop_event.set()
        for t in [receiver_task, listener_task]:
            if not t.done():
                t.cancel()
                try:
                    await t
                except asyncio.CancelledError:
                    pass

        # Cleanup dedicated pubsub subscription cleanly
        try:
            await pubsub.unsubscribe()
            await pubsub.punsubscribe()
        except Exception:
            pass
        finally:
            try:
                if hasattr(pubsub, "aclose"):
                    await pubsub.aclose()
                else:
                    await pubsub.close()
            except Exception:
                pass
            logger.info("Closed dedicated Pub/Sub subscription connection cleanly.")
