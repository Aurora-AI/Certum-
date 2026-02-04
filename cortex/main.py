import sys
import os
import argparse
import json
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# NOTE: We do not alias provider keys here.
# The project selects the provider explicitly via `cortex/core/llm_provider.py`.

def _safe_json_loads(raw: str):
    try:
        return json.loads(raw)
    except Exception:
        try:
            cleaned = raw.strip()
            if (cleaned.startswith('"') and cleaned.endswith('"')) or (
                cleaned.startswith("'") and cleaned.endswith("'")
            ):
                cleaned = cleaned[1:-1]
            cleaned = cleaned.replace('\\"', '"')
            return json.loads(cleaned)
        except Exception:
            return None

def _telemetry_fast_path(telemetry: dict):
    """
    Lightweight, no-LLM decision layer for high-frequency telemetry.
    Returns a small JSON command for the frontend.
    """
    jitter = float(telemetry.get("jitter", 0) or 0)
    dwell_time = float(telemetry.get("dwellTime", 0) or 0)
    hover_target = telemetry.get("hoverTarget")

    # Default
    cmd = {"action": "NO_OP", "reason": "Telemetry WNL (Within Normal Limits)"}

    # Anxiety: high jitter
    if jitter > 0.8:
        return {"action": "CALM_DOWN", "reason": "High Anxiety Detected (jitter)"}

    # Hesitation: long dwell on primary CTA
    if hover_target == "cta-primary" and dwell_time > 2000:
        return {"action": "NUDGE_CTA", "reason": "Hesitation Detected (dwell on CTA)"}

    return cmd

def main():
    parser = argparse.ArgumentParser(description="Cortex: The Elysian Agentic Brain")
    parser.add_argument("command", nargs="?", help="Command or prompt to execute", default="status")
    parser.add_argument("--test", action="store_true", help="Run in test mode")
    parser.add_argument("--json", action="store_true", help="Output machine-readable JSON only")
    parser.add_argument("--telemetry", help="Telemetry JSON for living_website_telemetry command")
    parser.add_argument("--telemetry-file", help="Path to a JSON file with telemetry payload")
    parser.add_argument("--targets", help="JSON array of targets for hive_swarm command")
    parser.add_argument("--targets-file", help="Path to a JSON file containing an array of targets")
    parser.add_argument("--prompt", help="Prompt to apply for hive_swarm command")
    
    args = parser.parse_args()

    if not args.json:
        print(f"🔮 Cortex Online. Mode: {'TEST' if args.test else 'PRODUCTION'}")
        print(f"⚡ Input Command: {args.command}")

    if args.command == "status":
        payload = {
            "environment": "ACTIVE",
            "root": os.getcwd(),
            "deepseek_api_key": "DETECTED" if os.getenv("DEEPSEEK_API_KEY") else "MISSING",
            "openai_api_key": "DETECTED" if os.getenv("OPENAI_API_KEY") else "MISSING",
            "llm_model": os.getenv("DEEPSEEK_MODEL") or os.getenv("OPENAI_MODEL") or "UNSET",
        }

        if args.json:
            print(json.dumps(payload))
        else:
            print("✅ Environment: Active")
            print(f"📂 Root: {payload['root']}")
            print(f"🔑 OpenAI API Key: {payload['openai_api_key']}")
        return

    # High-frequency telemetry command (designed for API bridge usage)
    if args.command == "living_website_telemetry":
        raw = args.telemetry or "{}"
        if args.telemetry_file:
            try:
                with open(args.telemetry_file, "r", encoding="utf-8") as f:
                    raw = f.read()
            except Exception:
                raw = "{}"
        telemetry = _safe_json_loads(raw) or {}
        result = _telemetry_fast_path(telemetry)

        if args.json:
            print(json.dumps(result))
        else:
            print("🧠 Living Website Telemetry Received")
            print(json.dumps(result, indent=2))
        return

    # Hive Mind: multi-agent swarm with an aggregator
    if args.command == "hive_swarm":
        raw_targets = args.targets or "[]"
        if args.targets_file:
            try:
                with open(args.targets_file, "r", encoding="utf-8") as f:
                    raw_targets = f.read()
            except Exception:
                raw_targets = "[]"

        targets = _safe_json_loads(raw_targets) or []
        prompt = args.prompt or "Analyze the target and report key intelligence points."

        if not (os.getenv("DEEPSEEK_API_KEY") or os.getenv("OPENAI_API_KEY")):
            err = {"error": "Missing LLM key (set DEEPSEEK_API_KEY or OPENAI_API_KEY)."} 
            if args.json:
                print(json.dumps(err))
            else:
                print("❌ Missing LLM key (set DEEPSEEK_API_KEY or OPENAI_API_KEY).")
            return

        if not isinstance(targets, list) or not targets:
            err = {"error": "Missing or invalid --targets (expected JSON array)."} 
            if args.json:
                print(json.dumps(err))
            else:
                print("❌ Missing or invalid --targets (expected JSON array).")
            return

        try:
            from cortex.crews.hive_mind_crew import HiveMindCrew
            # Instantiate the Crew class with runtime arguments
            hive_crew_instance = HiveMindCrew(targets=targets, prompt=prompt)
            # Build and kickoff the crew
            result = hive_crew_instance.crew().kickoff()
            
            if args.json:
                print(json.dumps({"result": str(result)}))
            else:
                print(result)
        except ImportError as e:
            payload = {"error": f"ImportError: {e}"}
            if args.json:
                print(json.dumps(payload))
            else:
                print(f"❌ Error loading Hive crew: {e}")
        except Exception as e:
            payload = {"error": f"Runtime Failure: {e}"}
            if args.json:
                print(json.dumps(payload))
            else:
                print(f"💥 Hive Runtime Failure: {e}")
        return

    # Backward-compatible telemetry encoding
    if args.command.startswith("living_website_telemetry|"):
        raw = args.command.split("|", 1)[1]
        telemetry = _safe_json_loads(raw) or {}
        result = _telemetry_fast_path(telemetry)

        if args.json:
            print(json.dumps(result))
        else:
            print("🧠 Living Website Telemetry Received")
            print(json.dumps(result, indent=2))
        return

    # Execute Genesis Crew
    if not args.json:
        print(f"🚀 Kickoff Genesis Crew for: {args.command}")
    try:
        from cortex.crews.genesis_crew import GenesisCrew
        result = GenesisCrew().crew().kickoff(inputs={'topic': args.command})
        if args.json:
            print(json.dumps({"result": str(result)}))
        else:
            print("\n\n########################\n##   MISSION REPORT   ##\n########################\n")
            print(result)
    except ImportError as e:
        if args.json:
            print(json.dumps({"error": f"ImportError: {e}"}))
        else:
            print(f"❌ Error loading Crew: {e}")
            print("Did you install dependencies? (pip install -r cortex/requirements.txt)")
    except Exception as e:
        if args.json:
            print(json.dumps({"error": f"Runtime Failure: {e}"}))
        else:
            print(f"💥 Runtime Failure: {e}")

if __name__ == "__main__":
    main()
