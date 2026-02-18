import json
import re
from pathlib import Path

# --- CONFIGURATION ---
REGISTRY_FILE = Path("C:/Aurora/Projetos Mad Lab Aurora/Prime/scripts/rlm/context_registry.json")
BASE_DIR = Path("C:/Aurora/Projetos Mad Lab Aurora/Prime/src")
OUTPUT_REPORT = Path("C:/Aurora/Projetos Mad Lab Aurora/Prime/scripts/rlm/audit_report.json")

def load_registry():
    with open(REGISTRY_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def run_audit(registry):
    files = registry["files"]
    findings = {
        "orphaned_components": [],
        "unused_css_vars": [],
        "physics_non_compliance": [],
        "syntax_debris": [],
        "broken_imports": []
    }
    
    # 1. ORPHAN HUNTING (Who is not imported?)
    all_path_names = [f["path"] for f in files]
    all_dependencies = []
    for f in files:
        all_dependencies.extend(f.get("dependencies", []))
        
    for f in files:
        # Check if the path (simplified) exists in any dependency list
        path_query = f["path"].replace("\\", "/")
        is_imported = False
        for dep in all_dependencies:
            # Check for partial matches like '@/components/...'
            if path_query in dep or dep in path_query:
                is_imported = True
                break
        
        # Exceptions for entry points
        if not is_imported and "app\\page.tsx" not in f["path"] and "app\\layout.tsx" not in f["path"]:
            findings["orphaned_components"].append(f["path"])

    # 2. TOKEN LEAKAGE (CSS variables)
    globals_css = next((f for f in files if "globals.css" in f["name"]), None)
    if globals_css:
        defined_vars = globals_css["visual_tokens"]["css_vars"]
        all_used_vars = []
        for f in files:
            if "globals.css" not in f["name"]:
                all_used_vars.extend(f["visual_tokens"]["css_vars"])
        
        for var in defined_vars:
            if var not in all_used_vars:
                findings["unused_css_vars"].append(var)

    # 3. PHYSICS COMPLIANCE (Sections using GSAP)
    for f in files:
        if "components\\sections\\" in f["path"]:
            if not f["visual_tokens"]["has_gsap"]:
                findings["physics_non_compliance"].append({
                    "path": f["path"],
                    "issue": "Static section detected in high-physics zone (no GSAP)."
                })

    # 4. SYNTAX DEBRIS (Deep file scan for TODO/console.log)
    for f in files:
        p = BASE_DIR / f["path"]
        if p.exists() and p.is_file():
            try:
                with open(p, 'r', encoding='utf-8') as file:
                    content = file.read()
                    if "console.log" in content:
                        findings["syntax_debris"].append({"path": f["path"], "issue": "console.log left behind."})
                    if "TODO" in content:
                        findings["syntax_debris"].append({"path": f["path"], "issue": "TODO label pending."})
            except:
                pass

    return findings

def main():
    print("Initializing S-Tier Recursive Audit...")
    registry = load_registry()
    results = run_audit(registry)
    
    with open(OUTPUT_REPORT, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=4)
    
    print(f"Audit Complete. Report generated at {OUTPUT_REPORT}")
    
    # Quick summary in terminal
    print(f"Orphans found: {len(results['orphaned_components'])}")
    print(f"Unused CSS Vars: {len(results['unused_css_vars'])}")
    print(f"Physics Issues: {len(results['physics_non_compliance'])}")

if __name__ == "__main__":
    main()
