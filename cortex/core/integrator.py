import os
from .elysian import ElysianEntity, elysian_safe, logger

class ElysianIntegrator(ElysianEntity):
    """
    The Bridge between the AI Agents and the Real World (Databases, APIs).
    """
    def __init__(self):
        super().__init__("Prime_Integrator")
        self.env_checks = {}

    @elysian_safe
    def check_environment(self) -> bool:
        """Verifies that all required keys are present."""
        logger.info("🕵️ Scanning Environment...")
        
        required_keys = ["OPENAI_API_KEY"]
        all_good = True
        
        for key in required_keys:
            value = os.getenv(key)
            if value:
                self.env_checks[key] = "OK"
                logger.info(f"✅ {key}: FOUND")
            else:
                self.env_checks[key] = "MISSING"
                logger.error(f"❌ {key}: MISSING")
                all_good = False
        
        return all_good
