import asyncio
import datetime
import json
from typing import Optional
from fastapi import APIRouter, HTTPException, Query, Body, Depends, WebSocket, WebSocketDisconnect, status
import redis.asyncio as aioredis
from redis.asyncio.cluster import RedisCluster
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
from app.db import get_connection
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
    Supports both standalone Redis and Redis Cluster instances.
    Returns the channel name and the count of receivers that received the payload.
    """
    channel = payload.channel.strip()
    if not channel:
        raise HTTPException(status_code=400, detail="Channel name cannot be empty.")

    try:
        client = await redis_manager.get_client(conn_id)
        if isinstance(client, RedisCluster):
            receivers = await client.execute_command("PUBLISH", channel, payload.message, target_nodes="default")
            if isinstance(receivers, dict):
                receivers = sum(int(v) for v in receivers.values() if isinstance(v, (int, str)) and str(v).isdigit())
        else:
            receivers = await client.publish(channel, payload.message)
        logger.info(f"Published message to channel '{channel}' via conn '{conn_id}': received by {receivers} clients")
        return PublishResponse(channel=channel, receivers=int(receivers or 0))
    except Exception as e:
        raise_mapped_exception(e, f"Failed to publish message to channel '{payload.channel}'")


@router.websocket("/ws/pubsub")
async def websocket_pubsub(websocket: WebSocket, conn_id: Optional[str] = Query(None)):
    """
    Real-time WebSocket endpoint for Redis Pub/Sub live message streaming.
    Supports dynamic SUBSCRIBE / PSUBSCRIBE and UNSUBSCRIBE / PUNSUBSCRIBE commands.
    Supports both standalone Redis and Redis Cluster topologies via dedicated connection.
    Ensures safe resource cleanup upon disconnect with zero connection leaks.
    """
    target_id = (conn_id or "").strip() or redis_manager.selected_id
    try:
        client = await redis_manager.get_client(target_id)
    except Exception as e:
        logger.error(f"Failed to get Redis client for WebSocket pubsub: {e}")
        await websocket.close(code=1008)
        return

    # Dedicated subscription client handling for Redis Cluster or Standalone
    is_dedicated = False
    sub_client = client
    if isinstance(client, RedisCluster):
        conn_dict = redis_manager.get_conn_info(target_id) or get_connection(target_id, include_password=True) or {}
        try:
            default_node = client.get_default_node()
        except Exception:
            default_node = None

        node_host = default_node.host if default_node else conn_dict.get("host", "localhost")
        node_port = int(default_node.port if default_node else conn_dict.get("port", 6379))
        sub_client = aioredis.Redis(
            host=node_host,
            port=node_port,
            username=conn_dict.get("username") or None,
            password=conn_dict.get("password") or None,
            ssl=bool(conn_dict.get("use_tls", False)),
            client_name="redisinsight-py",
            decode_responses=True,
            encoding="utf-8",
            encoding_errors="replace",
            socket_connect_timeout=3.0,
            socket_timeout=5.0,
        )
        is_dedicated = True

    await websocket.accept()
    pubsub = sub_client.pubsub()
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
                    raw_type = msg.get("type")
                    msg_type = raw_type.decode("utf-8", errors="replace") if isinstance(raw_type, bytes) else str(raw_type or "")

                    raw_channel = msg.get("channel")
                    channel_str = raw_channel.decode("utf-8", errors="replace") if isinstance(raw_channel, bytes) else (str(raw_channel) if raw_channel is not None else None)

                    raw_pattern = msg.get("pattern")
                    pattern_str = raw_pattern.decode("utf-8", errors="replace") if isinstance(raw_pattern, bytes) else (str(raw_pattern) if raw_pattern is not None else None)

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
                        "type": msg_type,
                        "channel": channel_str,
                        "pattern": pattern_str,
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

                if not isinstance(payload, dict):
                    await websocket.send_json({"type": "error", "message": "Expected JSON object payload"})
                    continue

                action = str(payload.get("action") or "").strip().lower()

                if action == "ping":
                    await websocket.send_json({
                        "type": "pong",
                        "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat()
                    })
                elif action in ("subscribe", "psubscribe"):
                    is_pat = action == "psubscribe" or bool(payload.get("is_pattern", False))
                    channels = payload.get("channels") or ([payload["channel"]] if "channel" in payload else [])
                    patterns = payload.get("patterns") or ([payload["pattern"]] if "pattern" in payload else [])

                    targets = (patterns or channels) if is_pat else (channels or patterns)
                    valid_targets = [str(t).strip() for t in targets if str(t).strip()]
                    if valid_targets:
                        if is_pat:
                            await pubsub.psubscribe(*valid_targets)
                        else:
                            await pubsub.subscribe(*valid_targets)
                    else:
                        await websocket.send_json({"type": "error", "message": "No valid channel or pattern specified for subscription."})
                elif action in ("unsubscribe", "punsubscribe"):
                    is_pat = action == "punsubscribe" or bool(payload.get("is_pattern", False))
                    channels = payload.get("channels") or ([payload["channel"]] if "channel" in payload else [])
                    patterns = payload.get("patterns") or ([payload["pattern"]] if "pattern" in payload else [])

                    targets = (patterns or channels) if is_pat else (channels or patterns)
                    valid_targets = [str(t).strip() for t in targets if str(t).strip()]

                    if is_pat:
                        if valid_targets:
                            await pubsub.punsubscribe(*valid_targets)
                        else:
                            await pubsub.punsubscribe()
                    else:
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

            if is_dedicated:
                try:
                    await sub_client.aclose()
                except Exception:
                    pass

            logger.info("Closed dedicated Pub/Sub subscription connection cleanly.")
