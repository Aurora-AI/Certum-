
import re
import sys
import os

def extract_css_variables(file_path):
    print(f"--- Extracting variables from {os.path.basename(file_path)} ---")
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading file {file_path}: {e}")
        return

    # Find all CSS variable definitions: --variable-name: value;
    # We look for patterns typically found in :root or anywhere in style blocks
    # Pattern: --[name]: [value];
    # We'll use a regex that catches the name and the value up to the semicolon
    
    # This simple regex assumes the declaration is properly closed with a semicolon
    # and doesn't handle nested braces or complex values perfectly, but good for design tokens
    pattern = re.compile(r'(--[a-zA-Z0-9-_]+)\s*:\s*([^;\}]+)')
    
    matches = pattern.findall(content)
    
    variables = {}
    for name, value in matches:
        value = value.strip()
        # Filter for interesting tokens
        if any(k in name for k in ['color', 'font', 'spacing', 'bg', 'text', 'gap', 'margin', 'padding']):
            variables[name] = value
            
    # Print categorized variables
    categories = {
        'Color': ['color', 'bg', 'rgb', 'hsl'],
        'Typography': ['font', 'text', 'line-height', 'weight'],
        'Layout': ['spacing', 'gap', 'margin', 'padding', 'width', 'height', 'size'],
        'Other': []
    }
    
    sorted_vars = sorted(variables.items())
    
    print(f"Found {len(sorted_vars)} relevant variables.")
    
    for cat, keywords in categories.items():
        print(f"\n[{cat}]")
        count = 0
        for name, value in sorted_vars:
            if cat == 'Other':
                # simplified logic for 'Other', practically everything else
                is_other = True
                for c, kw in categories.items():
                    if c != 'Other' and any(k in name for k in kw):
                        is_other = False
                        break
                if is_other:
                    print(f"  {name}: {value}")
                    count += 1
            else:
                if any(k in name for k in keywords):
                    print(f"  {name}: {value}")
                    count += 1
        if count == 0:
            print("  (None)")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_tokens.py <file1> <file2> ...")
        sys.exit(1)
        
    for file_path in sys.argv[1:]:
        extract_css_variables(file_path)
        print("\n" + "="*40 + "\n")
