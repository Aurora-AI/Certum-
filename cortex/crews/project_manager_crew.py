import os
from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from cortex.core.elysian import logger
from cortex.core.llm_provider import get_default_llm

@CrewBase
class ProjectManagerCrew():
    """Project Manager Crew: The Autonomic Orchestrator"""
    agents_config = '../config/agents.yaml'
    tasks_config = '../config/tasks.yaml'

    @agent
    def project_manager(self) -> Agent:
        llm = get_default_llm()
        return Agent(
            config=self.agents_config['project_manager'],
            verbose=True,
            allow_delegation=True,
            llm=llm,
        )
    
    @agent
    def backend_specialist(self) -> Agent:
        llm = get_default_llm()
        return Agent(
            config=self.agents_config['backend_specialist'],
            verbose=True,
            allow_delegation=False,
            llm=llm,
        )

    @task
    def orchestrate_mission(self) -> Task:
        return Task(
            config=self.tasks_config['orchestrate_mission'],
        )

    @crew
    def crew(self) -> Crew:
        """Creates the Project Manager Crew"""
        logger.info("🧠 Project Manager is taking the lead...")
        return Crew(
            agents=self.agents,
            tasks=self.tasks,
            process=Process.sequential,
            verbose=True,
        )
