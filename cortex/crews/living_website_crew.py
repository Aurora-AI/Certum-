from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from cortex.core.elysian import logger

@CrewBase
class LivingWebsiteCrew():
    """Living Website Crew: The Digital Nervous System"""
    agents_config = '../config/agents.yaml'
    tasks_config = '../config/tasks.yaml'

    @agent
    def empath(self) -> Agent:
        return Agent(
            config=self.agents_config['empath'],
            verbose=True
        )

    @agent
    def atmosphere(self) -> Agent:
        return Agent(
            config=self.agents_config['atmosphere'],
            verbose=True
        )

    @task
    def analyze_telemetry(self) -> Task:
        return Task(
            config=self.tasks_config['analyze_telemetry'],
        )

    @task
    def adjust_atmosphere(self) -> Task:
        return Task(
            config=self.tasks_config['adjust_atmosphere'],
            context=[self.analyze_telemetry()] # Depends on analysis
        )

    @crew
    def crew(self) -> Crew:
        logger.info("🧠 Activating Living Website Nervous System...")
        return Crew(
            agents=self.agents,
            tasks=self.tasks,
            process=Process.sequential,
            verbose=True,
        )
