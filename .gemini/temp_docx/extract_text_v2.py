import xml.etree.ElementTree as ET
import sys

ns = {
    'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
    'mc': 'http://schemas.openxmlformats.org/markup-compatibility/2006'
}

def extract_text(xml_path):
    try:
        tree = ET.parse(xml_path)
        root = tree.getroot()
        
        body = root.find('.//w:body', ns)
        if body is None:
            print("No body found")
            return

        text_content = []
        
        # Iterate over all elements in document order to capture ps and tbls
        for elem in body.iter():
            if elem.tag == f"{{{ns['w']}}}p":
                para_text = ""
                for r in elem.findall('.//w:r', ns):
                    for child in r:
                        if child.tag == f"{{{ns['w']}}}t":
                             if child.text: para_text += child.text
                        elif child.tag == f"{{{ns['w']}}}br":
                             para_text += "\n"
                        elif child.tag == f"{{{ns['w']}}}tab":
                             para_text += "\t"
                if para_text.strip():
                    text_content.append(para_text)
                    text_content.append("\n") # Blank line between paragraphs

        print("".join(text_content))

    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_docx_text.py <path_to_document.xml>")
        sys.exit(1)
    
    extract_text(sys.argv[1])
