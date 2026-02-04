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
        
        openai_key = os.getenv("OPENAI_API_KEY")
        deepseek_key = os.getenv("DEEPSEEK_API_KEY")

        # At least one provider key must exist
        all_good = bool(deepseek_key or openai_key)

        # Record checks for reporting
        self.env_checks["DEEPSEEK_API_KEY"] = "OK" if deepseek_key else "MISSING"
        self.env_checks["OPENAI_API_KEY"] = "OK" if openai_key else "MISSING"

        if deepseek_key:
            logger.info("✅ DEEPSEEK_API_KEY: FOUND")
        else:
            logger.error("❌ DEEPSEEK_API_KEY: MISSING")

        if openai_key:
            logger.info("✅ OPENAI_API_KEY: FOUND")
        else:
            logger.error("❌ OPENAI_API_KEY: MISSING")
        
        return all_good
