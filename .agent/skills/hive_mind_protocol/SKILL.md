---
name: Hive Mind Protocol
description: Standards for creating Agent Swarms, specialized sub-teams, and memory-driven collaboration using CrewAI.
---

# Hive Mind Protocol: Swarm Intelligence

This skill defines the architecture for "Enxame de Agentes" (Agent Swarms) where multiple specialized instances collaborate to solve distributed problems (e.g., scraping multiple sites simultaneously).

## 1. The Swarm Concept

Instead of one agent doing everything, we deploy a "swarm" of identical agents configured with different parameters (e.g., differents URLs or datasets).

### 1.1 Dynamic Agent Creation
Iterate through a list of targets to spawn agents dynamically.

```python
agents = []
tasks = []
targets = ["site1.com", "site2.com", "site3.com"]

for idx, target in enumerate(targets):
    # Specialized Agent
    agent = Agent(
        role=f"Scout Unit {idx}",
        goal=f"Extract intelligence from {target}",
        backstory="You are a specialized scout...",
        tools=[WebsiteSearchTool(website=target)],
        verbose=True
    )
    
    # Specialized Task
    task = Task(
        description=f"Analyze {target} and report findings.",
        expected_output="Key intelligence points.",
        agent=agent,
        output_file=f"intel_{idx}.md"
    )
    
    agents.append(agent)
    tasks.append(task)
```

## 2. The Aggregator
A Swarm must always resolve to a single point of truth. The Aggregator Agent collects the outputs of the swarm.

```python
aggregator = Agent(
    role="Mind Nexus",
    goal="Synthesize all scout reports into a master strategy.",
    backstory="You are the central processing unit..."
)

aggregator_task = Task(
    description="Read all field reports and create a summary.",
    expected_output="Master Strategy Document (Markdown).",
    agent=aggregator,
    context=tasks # Pass previous tasks as context
)

# Add to the end of the lists
agents.append(aggregator)
tasks.append(aggregator_task)
```

## 3. Execution Strategy
Run the swarm sequentially or asynchronously depending on resource limits.

```python
hive_crew = Crew(
    agents=agents,
    tasks=tasks,
    process=Process.sequential # or Process.hierarchical for complex management
)

result = hive_crew.kickoff()
```

## 4. Short-Term Memory
Enable `memory=True` in agents to allow them to recall previous steps and avoid loops during complex navigations.

## 5. Protocol Rules
1.  **Isolation:** Swarm agents should not depend on each other, only on their specific target.
2.  **Synthesis:** The final output must ALWAYS be aggregated. A defined "Swarm" without a "queen" (aggregator) is just noise.
3.  **Error Handling:** Use `try/except` when spawning agents for potentially unstable targets (e.g., broken URLs) to prevent the entire swarm from failing initialization.
