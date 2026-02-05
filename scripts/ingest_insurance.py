import os
import pypdf
from pathlib import Path

# Configuration
SOURCE_DIR = r"C:\Users\rodri\OneDrive\Rodobens\Treinamentos"
DEST_DIR = r"c:\Aurora\Projetos Mad Lab Aurora\Prime\docs\rodobens\insurance"

def extract_text_from_pdf(pdf_path):
    print(f"Processing {pdf_path}...")
    try:
        reader = pypdf.PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n\n"
        return text
    except Exception as e:
        print(f"Error reading {pdf_path}: {e}")
        return None

def main():
    # Ensure destination exists
    Path(DEST_DIR).mkdir(parents=True, exist_ok=True)
    
    # List files
    files = [f for f in os.listdir(SOURCE_DIR) if f.endswith('.pdf')]
    print(f"Found {len(files)} PDF files.")

    for filename in files:
        file_path = os.path.join(SOURCE_DIR, filename)
        text = extract_text_from_pdf(file_path)
        
        if text:
            # Create MD filename
            md_filename = filename.replace('.pdf', '.md').replace(' ', '_')
            md_path = os.path.join(DEST_DIR, md_filename)
            
            # Save
            with open(md_path, 'w', encoding='utf-8') as f:
                f.write(f"# Source: {filename}\n\n")
                f.write(text)
            print(f"Saved: {md_filename}")

if __name__ == "__main__":
    main()
