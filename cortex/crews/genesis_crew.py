from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from cortex.core.elysian import logger

@CrewBase
class GenesisCrew():
    """Genesis Crew: The First Responder"""
    agents_config = '../config/agents.yaml'
    tasks_config = '../config/tasks.yaml'

    @agent
    def director(self) -> Agent:
        return Agent(
            config=self.agents_config['director'],
            verbose=True,
            allow_delegation=True
        )

    @agent
    def engineer(self) -> Agent:
        return Agent(
            config=self.agents_config['engineer'],
            verbose=True
        )

    @task
    def strategic_analysis(self) -> Task:
        return Task(
            config=self.tasks_config['strategic_analysis'],
        )

    @task
    def technical_execution(self) -> Task:
        return Task(
            config=self.tasks_config['technical_execution'],
        )

    @crew
    def crew(self) -> Crew:
        """Creates the Genesis Crew"""
        logger.info("🚀 Assembling Genesis Crew...")
        return Crew(
            agents=self.agents, # Automatically collected by @agent
            tasks=self.tasks,   # Automatically collected by @task
            process=Process.sequential,
            verbose=True,
        )
