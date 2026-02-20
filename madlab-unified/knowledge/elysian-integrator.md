# Elysian Integrator: Operational Blueprint

**Mission:** Arming the Agente Integrador and Automating the Identity Factory.
**Protocol:** [v2.1 - STITCH HYBRID]

## 1. Arming the Integrator (Supabase Connection)

To connect the Elysian Integrator to Supabase (Postgres), we utilize the `PostgresConnection` pattern efficiently.

### Requirements
- Env Variables: `SUPABASE_URI`, `SUPABASE_DB_NAME`

### Implementation Code
```python
import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()

class PostgresConnection:
    def __init__(self, database_uri=None):
        self.database_uri = database_uri or os.getenv("SUPABASE_URI")
        self.conn = None

    def connect(self):
        try:
            self.conn = psycopg2.connect(self.database_uri)
            print("Elysian Integrator: Connected to Supabase.")
        except Exception as e:
            print(f"Connection Failed: {e}")
            raise

    def cursor(self):
        if not self.conn:
            self.connect()
        return self.conn.cursor()

    def get_colunas(self):
        """Returns column names of the last executed query."""
        if self.conn and self.conn.cursor:
            return [desc[0] for desc in self.conn.cursor.description]
        return []
```

## 2. Custom Governance Tool

This tool enforces the "Elysian Law" by checking if an action is permissible before execution.

```python
from crewai.tools import BaseTool

class GovernanceTool(BaseTool):
    name: str = "Elysian Governance Protocol"
    description: str = (
        "Validates if a proposed action adheres to the sovereign laws of the ecosystem. "
        "Use this BEFORE executing high-stakes operations (Database WRITE/DELETE)."
    )

    def _run(self, action_type: str, resource: str) -> str:
        # Simplified Logic: Only 'SELECT' is allowed freely. 'INSERT/DELETE' requires override.
        allowed_actions = ["SELECT", "READ", "ANALYZE"]
        
        if action_type.upper() in allowed_actions:
            return "GOVERNANCE CHECK: PASSED. Proceed with operation."
        
        # In a real scenario, this would check a policy table in Supabase
        if resource == "restricted_table":
             return "GOVERNANCE CHECK: DENIED. Resource is protected."
             
        return "GOVERNANCE CHECK: WARNING. Proceed with caution."
```

## 3. Automating the Factory (Flows)

We implement a `ProductionFlow` that uses Structured State to manage the factory lifecycle.

```python
from crewai.flow.flow import Flow, start, listen
from pydantic import BaseModel

class FactoryState(BaseModel):
    production_stage: str = "IDLE"
    units_produced: int = 0
    quality_check_passed: bool = False

class IdentityFactoryFlow(Flow[FactoryState]):

    @start()
    def ignite_furnace(self):
        print("Factory: Igniting Furnace...")
        self.state.production_stage = "HEATING"
        # Simulate heating logic or Agent call
        self.state.production_stage = "READY"

    @listen(ignite_furnace)
    def forge_identity(self):
        if self.state.production_stage == "READY":
            print("Factory: Forging Identity...")
            # Call Generator Agent here
            self.state.units_produced += 1
            self.state.production_stage = "FORGED"

    @listen(forge_identity)
    def quality_assurance(self):
        print(f"Factory: Inspecting Unit #{self.state.units_produced}...")
        # Call Validator Agent (GovernanceTool) here
        self.state.quality_check_passed = True
        self.state.production_stage = "COMPLETE"

# Execution
# flow = IdentityFactoryFlow()
# flow.kickoff()
```

## 4. Next Steps
1.  **Deploy Env:** Set `SUPABASE_URI` in `.env`.
2.  **Schema Gen:** Run `schema_generator.py` (if available) to map the Supabase tables.
3.  **Activate:** Initialize the `IdentityFactoryFlow`.
