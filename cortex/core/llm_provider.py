import os

from crewai import LLM

from cortex.core.elysian import logger


def get_default_llm() -> LLM | None:
    """
    Returns the default LLM for the Cortex runtime.

    Priority:
    1) DeepSeek (OpenAI-compatible) via DEEPSEEK_API_KEY
    2) OpenAI via OPENAI_API_KEY
    """
    deepseek_key = os.getenv("DEEPSEEK_API_KEY")
    if deepseek_key:
        model = os.getenv("DEEPSEEK_MODEL", "deepseek-chat")
        base_url = os.getenv("DEEPSEEK_BASE_URL", "https://api.deepseek.com/v1")
        logger.info("🧠 LLM Provider: DeepSeek")
        return LLM(model=model, base_url=base_url, api_key=deepseek_key)

    openai_key = os.getenv("OPENAI_API_KEY")
    if openai_key:
        model = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
        base_url = os.getenv("OPENAI_BASE_URL") or os.getenv("OPENAI_API_BASE")
        logger.info("🧠 LLM Provider: OpenAI")
        return LLM(model=model, base_url=base_url, api_key=openai_key)

    logger.error("❌ No LLM key found (set DEEPSEEK_API_KEY or OPENAI_API_KEY).")
    return None

