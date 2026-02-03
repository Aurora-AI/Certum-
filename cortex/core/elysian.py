import logging
import functools
from typing import Any, Callable

# Configure Logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger("ElysianCore")

class ElysianException(Exception):
    """Base exception for all Elysian Protocol errors."""
    pass

def elysian_safe(func: Callable) -> Callable:
    """Decorator to ensure exception handling and logging for sensitive operations."""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except Exception as e:
            logger.error(f"💥 Elysian Protocol Failure in {func.__name__}: {str(e)}")
            # In production, we might want to re-raise or return a safe fallback
            raise ElysianException(f"Critical failure: {str(e)}") from e
    return wrapper

class ElysianEntity:
    """Base class for all objects in the Aurora ecosystem."""
    
    def __init__(self, name: str):
        self.name = name
        self._operational = True
    
    @property
    def is_operational(self) -> bool:
        return self._operational
    
    def shutdown(self):
        self._operational = False
        logger.info(f"Entity {self.name} shutting down.")

class ElysianAgent(ElysianEntity):
    """Base wrapper for CrewAI Agents to enforce common behaviors."""
    
    def __init__(self, name: str, role: str, goal: str):
        super().__init__(name)
        self.role = role
        self.goal = goal
        logger.info(f"🤖 Agent Initiated: {name} ({role})")
