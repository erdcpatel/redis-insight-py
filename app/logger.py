import os
import sys
import logging
from typing import Optional

LOG_FORMAT = "%(asctime)s [%(levelname)s] [%(name)s] %(message)s"
DATE_FORMAT = "%Y-%m-%d %H:%M:%S"


def setup_logging(level_name: Optional[str] = None) -> None:
    """
    Configure global logging format and handler.
    Configurable via LOG_LEVEL environment variable (DEBUG, INFO, WARNING, ERROR).
    """
    lvl_str = (level_name or os.environ.get("LOG_LEVEL", "INFO")).upper()
    level = getattr(logging, lvl_str, logging.INFO)

    root_logger = logging.getLogger()
    if not root_logger.handlers:
        handler = logging.StreamHandler(sys.stdout)
        handler.setFormatter(logging.Formatter(LOG_FORMAT, datefmt=DATE_FORMAT))
        root_logger.addHandler(handler)
    else:
        for h in root_logger.handlers:
            h.setFormatter(logging.Formatter(LOG_FORMAT, datefmt=DATE_FORMAT))

    root_logger.setLevel(level)

    # Optional file logging if LOG_FILE is defined
    log_file = os.environ.get("LOG_FILE")
    if log_file:
        try:
            file_handler = logging.FileHandler(log_file, encoding="utf-8")
            file_handler.setFormatter(logging.Formatter(LOG_FORMAT, datefmt=DATE_FORMAT))
            root_logger.addHandler(file_handler)
        except Exception as e:
            root_logger.warning(f"Could not initialize file logging to {log_file}: {e}")


logger = logging.getLogger("redis_insight")
