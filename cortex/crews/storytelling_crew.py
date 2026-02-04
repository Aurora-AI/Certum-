from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from cortex.core.elysian import logger
from cortex.core.llm_provider import get_default_llm

@CrewBase
class StorytellingCrew():
    """Storytelling Crew: The Disney Strategy Logic Engine"""
    agents_config = '../config/storytelling_agents.yaml'
    tasks_config = '../config/storytelling_tasks.yaml'

    @agent
    def storyteller_dreamer(self) -> Agent:
        llm = get_default_llm()
        return Agent(
            config=self.agents_config['storyteller_dreamer'],
            verbose=True,
            allow_delegation=False,
            llm=llm,
        )

    @agent
    def storyteller_realist(self) -> Agent:
        llm = get_default_llm()
        return Agent(
            config=self.agents_config['storyteller_realist'],
            verbose=True,
            allow_delegation=False,
            llm=llm,
        )

    @agent
    def storyteller_critic(self) -> Agent:
        llm = get_default_llm()
        return Agent(
            config=self.agents_config['storyteller_critic'],
            verbose=True,
            allow_delegation=True,
            llm=llm,
        )

    @task
    def dream_phase(self) -> Task:
        return Task(
            config=self.tasks_config['dream_phase'],
        )

    @task
    def reality_phase(self) -> Task:
        return Task(
            config=self.tasks_config['reality_phase'],
        )

    @task
    def critic_phase(self) -> Task:
        return Task(
            config=self.tasks_config['critic_phase'],
        )

    @crew
    def crew(self) -> Crew:
        """Creates the Disney Strategy Crew"""
        logger.info("🎬 Lights, Camera, Strategy! Initializing Storytelling Crew...")
        return Crew(
            agents=self.agents, 
            tasks=self.tasks,
            process=Process.sequential,
            verbose=True,
        )
