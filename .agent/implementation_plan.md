# Implementation Plan - Workflow Consolidation & Agent Recalibration

We will streamline the operations into two master workflows and empower the Project Manager agent with a Python-based CrewAI implementation ("Cortex") for autonomous orchestration.

## User Review Required

> [!IMPORTANT]
> The existing `project_manager` agent will be upgraded from a passive documentation file to an active Python Crew (`cortex/crews/project_manager_crew.py`) capable of running via the terminal.
>
> We will archive redundant workflows to avoiding confusion.

## Proposed Changes

### 1. Workflow Consolidation (Documentation)

We will create two "Master Workflows" in `.agent/workflows/` that serve as the single source of truth.

#### [NEW] [zero-to-awwwards.md](file:///c:/Aurora/Projetos%20Mad%20Lab%20Aurora/Prime/.agent/workflows/zero-to-awwwards.md)
*   Integrates `autonomous-site-construction.md` (Philosophy/Art Direction), `aurora-gold-pipeline.md` (Process), and `antigravity-cinematography.md` (Technique).
*   **Phases**:
    1.  **The Vision** (Director's Brief & OS Generation).
    2.  **The Body** (Stitch MCP - HTML/Tailwind).
    3.  **The Soul** (Cinematography - GSAP/React).
    4.  **The Seal** (Awwwards Audit).

#### [NEW] [aurora-backend-integration.md](file:///c:/Aurora/Projetos%20Mad%20Lab%20Aurora/Prime/.agent/workflows/aurora-backend-integration.md)
*   Defines the protocol for connecting the frontend to the Aurora Backend.
*   **Phases**:
    1.  **Contract Definition** (Types/Interfaces).
    2.  **Fixture Creation** (Mock Data).
    3.  **Integration** (SWR/React Query hooks).

#### [DELETE] Redundant Workflows
*   `antigravity-cinematography.md`
*   `aurora-gold-pipeline.md`
*   `autonomous-site-construction.md`
*   `manual-visual-generation.md` (Merged into Zero-to-Awwwards)

### 2. Cortex Recalibration (Python Agents)

We will implement the "Hive Mind" logic for the Project Manager.

#### [MODIFY] [agents.yaml](file:///c:/Aurora/Projetos%20Mad%20Lab%20Aurora/Prime/cortex/config/agents.yaml)
*   Add `project_manager`: The high-level orchestrator.
*   Add `backend_specialist`: Specialist for the backend workflow.

#### [MODIFY] [tasks.yaml](file:///c:/Aurora/Projetos%20Mad%20Lab%20Aurora/Prime/cortex/config/tasks.yaml)
*   Add `orchestrate_mission`: Task to analyze a user request and trigger the correct sub-crew or workflow.

#### [NEW] [project_manager_crew.py](file:///c:/Aurora/Projetos%20Mad%20Lab%20Aurora/Prime/cortex/crews/project_manager_crew.py)
*   A new Crew that takes a high-level user request (e.g., "Build a landing page") and breaks it down into steps, potentially calling other crews (like `GenesisCrew` or `HiveMindCrew`).

### 3. Agent Definition Update

#### [MODIFY] [project_manager.md](file:///c:/Aurora/Projetos%20Mad%20Lab%20Aurora/Prime/.agent/agents/project_manager.md)
*   Update instructions to explicitly use the `run_command` tool to invoke the Python Cortex system (e.g., `python -m cortex.main "manage project..."`).

## Verification Plan

### Automated Tests
*   Run the new `ProjectManagerCrew` via CLI to verify it loads configs correctly:
    ```powershell
    python -m cortex.main --test "plan the new landing page"
    ```

### Manual Verification
1.  **Workflow Check**: Read the new `zero-to-awwwards.md` to ensure it covers all steps from the archived files.
2.  **Agent Check**: Verify `project_manager.md` instructions allow me to comfortably invoke the python script.
