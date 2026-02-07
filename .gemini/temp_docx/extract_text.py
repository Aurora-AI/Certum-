import xml.etree.ElementTree as ET
import sys

ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

def extract_text(xml_path):
    try:
        tree = ET.parse(xml_path)
        root = tree.getroot()
        
        body = root.find('w:body', ns)
        if body is None:
            print("No body found")
            return

        text_content = []
        for p in body.findall('.//w:p', ns):
            para_text = ""
            for r in p.findall('.//w:r', ns):
                for t in r.findall('.//w:t', ns):
                    if t.text:
                        para_text += t.text
            if para_text.strip():
                text_content.append(para_text)
        
        print("\n".join(text_content))

    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_docx_text.py <path_to_document.xml>")
        sys.exit(1)
    
    extract_text(sys.argv[1])
