import sys
import os
import argparse
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def main():
    parser = argparse.ArgumentParser(description="Cortex: The Elysian Agentic Brain")
    parser.add_argument("command", nargs="?", help="Command or prompt to execute", default="status")
    parser.add_argument("--test", action="store_true", help="Run in test mode")
    
    args = parser.parse_args()

    print(f"🔮 Cortex Online. Mode: {'TEST' if args.test else 'PRODUCTION'}")
    print(f"⚡ Input Command: {args.command}")

    if args.command == "status":
        print("✅ Environment: Active")
        print(f"📂 Root: {os.getcwd()}")
        # Check for OpenAI Key
        if os.getenv("OPENAI_API_KEY"):
            print("🔑 OpenAI API Key: Detected")
        else:
            print("❌ OpenAI API Key: MISSING")
        return

    # Execute Genesis Crew
    print(f"🚀 Kickoff Genesis Crew for: {args.command}")
    try:
        from cortex.crews.genesis_crew import GenesisCrew
        result = GenesisCrew().crew().kickoff(inputs={'topic': args.command})
        print("\n\n########################\n##   MISSION REPORT   ##\n########################\n")
        print(result)
    except ImportError as e:
        print(f"❌ Error loading Crew: {e}")
        print("Did you install dependencies? (pip install -r cortex/requirements.txt)")
    except Exception as e:
        print(f"💥 Runtime Failure: {e}")

if __name__ == "__main__":
    main()
