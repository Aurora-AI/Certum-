from __future__ import annotations

from pathlib import Path
from typing import Any, Iterable

from pydantic import BaseModel, Field

from crewai.tools import BaseTool


def _repo_root() -> Path:
    # cortex/tools/repo_files.py -> cortex/tools -> cortex -> repo root
    return Path(__file__).resolve().parents[2]


def _allowed_roots() -> list[Path]:
    root = _repo_root()
    return [
        (root / "docs").resolve(),
        (root / "src").resolve(),
        (root / "public").resolve(),
        root.resolve(),
    ]


def _is_allowed_path(path: Path) -> bool:
    allowed = _allowed_roots()

    # Never allow secrets by default
    lowered = str(path).lower()
    if lowered.endswith("\\.env") or lowered.endswith("/.env") or path.name.lower() == ".env":
        return False

    try:
        resolved = path.resolve()
    except Exception:
        return False

    for root in allowed:
        try:
            if resolved.is_relative_to(root):
                return True
        except Exception:
            continue
    return False


class _ReadArgs(BaseModel):
    path: str = Field(..., description="File path relative to repo root (preferred) or absolute path.")
    max_chars: int = Field(16000, description="Max characters to return.")


class RepoReadFileTool(BaseTool):
    name: str = "read_file"
    description: str = "Reads a local repo file (docs/src/public) and returns truncated text."
    args_schema: type[BaseModel] = _ReadArgs

    def _run(self, path: str, max_chars: int = 16000, **_: Any) -> str:
        root = _repo_root()
        p = Path(path)
        if not p.is_absolute():
            p = (root / p).resolve()

        if not _is_allowed_path(p):
            raise ValueError("Access denied for path.")

        text = p.read_text(encoding="utf-8", errors="ignore")
        return text[: max(0, int(max_chars))]


class _ListArgs(BaseModel):
    root: str = Field("docs", description="Directory to scan, relative to repo root.")
    glob: str = Field("**/*", description="Glob pattern within the root.")
    max_results: int = Field(200, description="Max number of paths to return.")


class RepoListFilesTool(BaseTool):
    name: str = "list_files"
    description: str = "Lists repo files under a directory (docs/src/public)."
    args_schema: type[BaseModel] = _ListArgs

    def _run(self, root: str = "docs", glob: str = "**/*", max_results: int = 200, **_: Any) -> str:
        repo = _repo_root()
        base = Path(root)
        if not base.is_absolute():
            base = (repo / base).resolve()

        if not _is_allowed_path(base):
            raise ValueError("Access denied for root.")

        paths: Iterable[Path] = base.glob(glob)
        out: list[str] = []
        for p in paths:
            if len(out) >= int(max_results):
                break
            try:
                if p.is_dir():
                    continue
                if not _is_allowed_path(p):
                    continue
                out.append(str(p.relative_to(repo)).replace("\\", "/"))
            except Exception:
                continue
        return "\n".join(out)

