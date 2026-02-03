---
name: Elysian Integrator
description: Advanced CrewAI patterns for Postgres integration, Custom Tools, and Flow Orchestration.
---

# Elysian Integrator: The Bridge

This skill provides the blueprints for connecting the AI Agents to the "Real World" (Databases) and orchestrating complex logic flows.

## 1. Custom Tools Pattern
Extend `BaseTool` to give agents new capabilities.

### 1.1 The Structure
```python
from crewai.tools import BaseTool

class ElysianTool(BaseTool):
    name: str = "Elysian Tool Name"
    description: str = "Clear description of when to use this tool."

    def _run(self, verified_argument: str) -> str:
        # Logic here
        return "Result string"
```

### 1.2 Visual Tools (e.g., Matplotlib)
When generating assets like images, save them to a file and return the *filepath* to the agent, so it knows where the artifact is.

## 2. Postgres/Supabase Integration
Direct agentic access to SQL databases.

### 2.1 The Schema Awareness
The agent needs to know the DB structure. Use a `FileReadTool` to pass a `schema.yaml` or similar string to the agent so it can write valid SQL.

### 2.2 The SQL Agent
A specialized agent role:
- **Role:** SQL Specialist
- **Goal:** Generate optimized SQL queries based on natural language requests.
- **Tools:** `schema_tool` (to read structure).

### 2.3 Streamlit Interface (Chat with DB)
Wrap the Crew in a Streamlit app to allow real-time interaction.
- User Input -> Crew Kickoff -> SQL Generation -> DB Execution -> Display Result.

## 3. Orchestration Flows
Use `@start`, `@listen`, and `or_` to manage stateful processes.

### 3.1 Unstructured State
Flexible key-value store for simple flows.
```python
@start()
def initialize(self):
    self.state['status'] = 'active'
```

### 3.2 Structured State (Pydantic)
Robust, typed state for production flows.
```python
class FlowState(BaseModel):
    step_count: int = 0
    data: List[str] = []

class ElysianFlow(Flow[FlowState]):
    @start()
    def begin(self):
        self.state.step_count += 1
```

### 3.3 Conditional Logic (The `or_` operator)
Execute a step if *any* of the previous steps complete.
```python
@listen(or_(step_a, step_b))
def logger(self):
    print("A or B finished.")
```

## 4. Integration Mission: "The Arming"
To "Arm" the integrator means to:
1.  Connect it to a live Postgres/Supabase instance.
2.  Provide it with the `schema.yaml` of that instance.
3.  Give it the authority (Tools) to execute `SELECT` (and cautiously `INSERT/UPDATE`) queries.
