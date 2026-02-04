from __future__ import annotations

from typing import Any

import httpx
from pydantic import BaseModel, Field

from crewai.tools import BaseTool


class _Args(BaseModel):
    url: str = Field(..., description="Absolute URL to fetch (http/https).")
    max_chars: int = Field(12000, description="Max characters to return.")


class SimpleWebFetchTool(BaseTool):
    name: str = "web_fetch"
    description: str = (
        "Fetches raw HTML from a URL (http/https) and returns a truncated text payload. "
        "Use this to gather facts before writing your report."
    )
    args_schema: type[BaseModel] = _Args

    def _run(self, url: str, max_chars: int = 12000, **_: Any) -> str:
        timeout = httpx.Timeout(10.0, connect=5.0)
        headers = {"User-Agent": "Aurora-Cortex/1.0 (+https://localhost)"}

        with httpx.Client(follow_redirects=True, timeout=timeout, headers=headers) as client:
            r = client.get(url)
            r.raise_for_status()
            text = r.text or ""
            return text[: max(0, int(max_chars))]
