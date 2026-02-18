import os
import re
import json
from pathlib import Path

# --- CONFIGURATION ---
BASE_DIR = Path("C:/Aurora/Projetos Mad Lab Aurora/Prime/src")
OUTPUT_FILE = Path("C:/Aurora/Projetos Mad Lab Aurora/Prime/scripts/rlm/context_registry.json")

# Regex Patterns
RE_COMPONENT_NAME = re.compile(r'const\s+([A-Z][a-zA-Z0-9]+)\s*=')
RE_CSS_VAR = re.compile(r'--color-[a-z0-9-]+')
RE_GSAP_TRIGGER = re.compile(r'scrollTrigger\s*:\s*{[^}]+}')
RE_IMPORTS = re.compile(r"import\s+.*?\s+from\s+['\"](.*?)['\"]")

def scan_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # Extract Meta
            components = RE_COMPONENT_NAME.findall(content)
            css_vars = list(set(RE_CSS_VAR.findall(content)))
            has_gsap = "gsap" in content.lower()
            gsap_triggers = RE_GSAP_TRIGGER.findall(content)
            imports = RE_IMPORTS.findall(content)
            
            return {
                "name": file_path.name,
                "path": str(file_path.relative_to(BASE_DIR)),
                "components": components,
                "dependencies": imports,
                "visual_tokens": {
                    "css_vars": css_vars,
                    "has_gsap": has_gsap,
                    "scroll_triggers_count": len(gsap_triggers)
                },
                "summary": f"File with {len(components)} component(s) and {len(css_vars)} CSS tokens."
            }
    except Exception as e:
        return {"error": str(e), "path": str(file_path)}

def main():
    print(f"Starting RLM Recursive Scan on {BASE_DIR}...")
    registry = {
        "project": "Prime - Mad Lab Aurora",
        "last_scan": "",
        "files": []
    }
    
    for root, dirs, files in os.walk(BASE_DIR):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.css')):
                file_path = Path(root) / file
                file_data = scan_file(file_path)
                registry["files"].append(file_data)
                
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(registry, f, indent=4)
    
    print(f"RLM Registry Saved to {OUTPUT_FILE}")
    print(f"Total files mapped: {len(registry['files'])}")

if __name__ == "__main__":
    main()
