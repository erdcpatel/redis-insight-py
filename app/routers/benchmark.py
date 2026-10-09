from fastapi import APIRouter, HTTPException, Depends
from app.benchmark_manager import benchmark_manager
from app.models import (
    BenchmarkProbeRequest,
    BenchmarkProbeResponse,
    CommandBenchmarkRequest,
    CommandBenchmarkResponse,
    LuaBenchmarkRequest,
    LuaBenchmarkResponse,
    ClusterMatrixResponse,
)
from app.logger import logger
from app.routers.keys import raise_mapped_exception

router = APIRouter(prefix="/api/benchmark", tags=["Benchmark & Latency Studio"])


@router.post("/probe", response_model=BenchmarkProbeResponse)
async def run_latency_probe_endpoint(req: BenchmarkProbeRequest = BenchmarkProbeRequest()):
    """Level 1: Run rapid PING latency probes and isolate network RTT vs server execution."""
    try:
        return await benchmark_manager.run_latency_probe(count=req.count)
    except Exception as e:
        raise_mapped_exception(e, "Latency probe benchmark failed")


@router.post("/commands", response_model=CommandBenchmarkResponse)
async def run_command_benchmark_endpoint(req: CommandBenchmarkRequest):
    """Level 2: Synthetic command suite benchmark with ephemeral keys and automatic cleanup."""
    try:
        return await benchmark_manager.run_command_benchmark(
            preset=req.preset,
            requests=req.requests,
            concurrency=req.concurrency,
            pipeline=req.pipeline,
        )
    except HTTPException:
        raise
    except Exception as e:
        raise_mapped_exception(e, "Command benchmark execution failed")


@router.post("/lua", response_model=LuaBenchmarkResponse)
async def run_lua_benchmark_endpoint(req: LuaBenchmarkRequest):
    """Level 3: Lua Script Sandbox & Profiler with exact server-side CPU microsecond measurement."""
    try:
        return await benchmark_manager.run_lua_benchmark(
            script=req.script,
            keys=req.keys,
            args=req.args,
            mode=req.mode,
            iterations=req.iterations,
            concurrency=req.concurrency,
        )
    except HTTPException:
        raise
    except Exception as e:
        raise_mapped_exception(e, "Lua script benchmark execution failed")


@router.get("/cluster-matrix", response_model=ClusterMatrixResponse)
async def get_cluster_matrix_endpoint():
    """Level 4: Cross-Node Latency Matrix evaluating all cluster primaries side-by-side."""
    try:
        return await benchmark_manager.run_cluster_matrix()
    except Exception as e:
        raise_mapped_exception(e, "Cluster latency matrix evaluation failed")
