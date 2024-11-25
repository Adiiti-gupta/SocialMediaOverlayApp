from pytesseract 
from cv2

def extract_text(image_path):
    image = cv2.imread(image_path)
    text = pytesseract.image_to_string(img)
    return text