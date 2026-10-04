import logging
import pytest
from fastapi.testclient import TestClient
from app.logger import setup_logging, logger, LOG_FORMAT
from app.main import app


def test_logging_setup():
    """Verify setup_logging configures root and module logger correctly."""
    setup_logging(level_name="DEBUG")
    root = logging.getLogger()
    assert root.level == logging.DEBUG
    assert len(root.handlers) > 0
    formatter = root.handlers[0].formatter
    assert "%(levelname)s" in formatter._fmt
    assert "%(asctime)s" in formatter._fmt


def test_logging_middleware_records_requests(caplog):
    """Verify HTTP requests are captured and logged through middleware."""
    client = TestClient(app)
    with caplog.at_level(logging.INFO):
        # Successful endpoint
        resp = client.get("/api/connections/limit")
        assert resp.status_code == 200

        # Non-existent endpoint triggering 404 warning
        resp404 = client.get("/api/non-existent-endpoint-xyz")
        assert resp404.status_code == 404
        assert any("HTTP 404" in record.message for record in caplog.records)
