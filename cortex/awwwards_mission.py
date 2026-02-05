import os
import sys
from textwrap import dedent
from crewai import Agent, Task, Crew, Process
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Determine which API Key to use (DeepSeek or OpenAI)
api_key = os.getenv("DEEPSEEK_API_KEY") or os.getenv("OPENAI_API_KEY")
base_url = os.getenv("DEEPSEEK_BASE_URL") if os.getenv("DEEPSEEK_API_KEY") else None
model = os.getenv("DEEPSEEK_MODEL") or "gpt-4o"

if not api_key:
    print("❌ API Key missing.")
    sys.exit(1)

# FORCE SET ENV VARS for CrewAI/LiteLLM compatibility
os.environ["OPENAI_API_KEY"] = api_key
if base_url:
    os.environ["OPENAI_API_BASE"] = base_url
    os.environ["OPENAI_BASE_URL"] = base_url

print(f"🔧 Configured LLM: {model}")
print(f"🔗 Base URL: {base_url}")
print(f"🔑 Key: {api_key[:6]}...{api_key[-4:]}")

llm = ChatOpenAI(
    model=model,
    api_key=api_key,
    base_url=base_url,
    temperature=0.7
)

# 1. Define Agent
judge = Agent(
    role="Awwwards Jury Member",
    goal="Critically analyze web designs and award scores based on strict criteria.",
    backstory=dedent("""
        You are a seasoned judge for the Awwwards. You value minimalism, kinetic typography, 
        and 'Sovereign' aesthetics (High-end, Dark mode, Gold/Monochrome).
        You hate generic layouts and Lorem Ipsum.
    """),
    verbose=True,
    allow_delegation=False,
    llm=llm
)

# 2. Load Context
context_path = os.path.join("cortex", "data", "analysis_context.txt")
try:
    with open(context_path, "r", encoding="utf-8") as f:
        code_context = f.read()
except Exception as e:
    print(f"❌ Failed to load context: {e}")
    sys.exit(1)

# 3. Define Task
analysis_task = Task(
    description=dedent(f"""
        Analyze the following Source Code for two pages: Main Page vs Consortium Page.
        
        CODE CONTEXT:
        {code_context}

        CRITERIA:
        1. Design (40%): Aesthetics, Typography (Sovereign/Premium feel), Use of Whitespace/Dark space.
        2. Creativity (30%): Originality of layout (Z-H pattern), Animation logic (GSAP), Masks.
        3. Content (20%): Copywriting quality (Portuguese), tone of voice.
        4. Tech Stack (10%): Code cleanliness, Component modularity.

        MISSION:
        Compare the Main Page (Hero/Vault/Consortium Modules) against the Consortium Page (Deep Dive).
        Calculate a score (0-10) for each criteria for BOTH pages.
        
        OUTPUT FORMAT:
        Return a Markdown Table comparing the two.
        Then, write a "Jury Verdict" paragraph summarizing which page feels more 'Sovereign' and why.
    """),
    expected_output="A markdown table and a final verdict paragraph.",
    agent=judge
)

# 4. Crew
crew = Crew(
    agents=[judge],
    tasks=[analysis_task],
    verbose=True,
    process=Process.sequential
)

# 5. Kickoff
print("🔮 Awwwards Jury is deliberating...")
result = crew.kickoff()
print("\n\n########################\n##   JURY VERDICT     ##\n########################\n")
print(result)
