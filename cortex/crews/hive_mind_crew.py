from typing import List
from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task

from cortex.core.elysian import logger
from cortex.core.llm_provider import get_default_llm
from cortex.tools.repo_files import RepoListFilesTool, RepoReadFileTool
from cortex.tools.simple_web_fetch import SimpleWebFetchTool

try:
    from crewai_tools import WebsiteSearchTool  # type: ignore
except ImportError:  # pragma: no cover
    WebsiteSearchTool = None


def _make_tools_for_target(target: str):
    tools = [RepoListFilesTool(), RepoReadFileTool(), SimpleWebFetchTool()]
    if WebsiteSearchTool is None:
        return tools
    # Only add WebsiteSearchTool if target looks like a URL
    if isinstance(target, str) and (target.startswith("http://") or target.startswith("https://")):
        tools.append(WebsiteSearchTool(website=target))
    return tools


@CrewBase
class HiveMindCrew():
    """Hive Mind Crew"""
    agents_config = '../config/hive_agents.yaml'
    tasks_config = '../config/hive_tasks.yaml'

    def __init__(self, targets: List[str] = None, prompt: str = None):
        # Allow default init for inspection, but runtime needs targets
        self.targets = targets or []
        self.base_prompt = prompt or "Analyze the target."
        self.llm = get_default_llm()

    def _create_scouts_and_tasks(self):
        agents: List[Agent] = []
        tasks: List[Task] = []

        for idx, target in enumerate(self.targets):
            tools = _make_tools_for_target(target)
            
            # Format the agent config with dynamic values
            # We copy the config to avoid mutating the shared dict if CrewAI caches it
            agent_config = self.agents_config['scout'].copy()
            agent_config['role'] = agent_config['role'].format(target_index=idx)
            agent_config['goal'] = agent_config['goal'].format(target=target)
            
            scout = Agent(
                **agent_config,
                tools=tools,
                verbose=True,
                memory=False,
                allow_delegation=False,
                llm=self.llm,
            )

            # Format the task config
            task_config = self.tasks_config['scout_task'].copy()
            task_config['description'] = task_config['description'].format(
                prompt=self.base_prompt,
                target=target
            )
            
            task = Task(
                **task_config,
                agent=scout,
            )

            agents.append(scout)
            tasks.append(task)
            
        return agents, tasks

    @agent
    def aggregator(self) -> Agent:
        return Agent(
            config=self.agents_config['aggregator'],
            verbose=True,
            memory=False,
            allow_delegation=False,
            llm=self.llm,
        )

    @crew
    def crew(self) -> Crew:
        """Creates the Hive Mind Swarm"""
        logger.info(f"🐝 Assembling Hive Mind Swarm for {len(self.targets)} targets...")
        
        scouts, scout_tasks = self._create_scouts_and_tasks()
        aggregator_agent = self.aggregator()
        
        aggregator_task = Task(
            config=self.tasks_config['aggregator_task'],
            agent=aggregator_agent,
            context=scout_tasks, # The aggregator needs the outputs of the scouts
        )

        return Crew(
            agents=scouts + [aggregator_agent],
            tasks=scout_tasks + [aggregator_task],
            process=Process.sequential,
            verbose=True,
        )
