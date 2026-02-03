import os
import fitz  # PyMuPDF

def convert_pdf_to_md(pdf_path):
    doc = fitz.open(pdf_path)
    md_content = f"# {os.path.basename(pdf_path)}\n\n"
    
    for page_num, page in enumerate(doc):
        text = page.get_text()
        md_content += f"## Page {page_num + 1}\n\n"
        md_content += text + "\n\n"
        
    return md_content

def main():
    docs_dir = os.path.join(os.path.dirname(__file__), '..', 'docs')
    docs_dir = os.path.abspath(docs_dir)
    
    if not os.path.exists(docs_dir):
        print(f"Directory not found: {docs_dir}")
        return

    for filename in os.listdir(docs_dir):
        if filename.lower().endswith('.pdf'):
            pdf_path = os.path.join(docs_dir, filename)
            md_filename = os.path.splitext(filename)[0] + '.md'
            md_path = os.path.join(docs_dir, md_filename)
            
            print(f"Converting {filename}...")
            try:
                md_content = convert_pdf_to_md(pdf_path)
                with open(md_path, 'w', encoding='utf-8') as f:
                    f.write(md_content)
                print(f"Saved {md_filename}")
            except Exception as e:
                print(f"Error converting {filename}: {e}")

if __name__ == "__main__":
    main()
