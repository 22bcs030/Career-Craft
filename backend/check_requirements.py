import sys
import importlib.util
import subprocess

# Define required packages
required_packages = [
    'fastapi', 
    'uvicorn', 
    'python-dotenv', 
    'google-generativeai',
    'pydantic',
    'nltk',
    'requests',
    'xgboost',
    'PyPDF2',
    'python-docx'
]

def check_package(package_name):
    spec = importlib.util.find_spec(package_name)
    if spec is None:
        print(f"❌ {package_name}: Not installed")
        return False
    print(f"✓ {package_name}: Installed")
    return True

def install_package(package_name):
    print(f"Installing {package_name}...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", package_name])

print("Checking required packages...")
missing_packages = []

for package in required_packages:
    package_name = package.split('==')[0]  # Handle version specifications
    if not check_package(package_name):
        missing_packages.append(package)

if missing_packages:
    print("\nMissing packages found. Installing them now...\n")
    for package in missing_packages:
        install_package(package)
    print("\nAll missing packages have been installed.")
else:
    print("\nAll required packages are installed.")
    
# Special handling for NLTK data
try:
    import nltk
    print("\nChecking NLTK data...")
    try:
        nltk.data.find('corpora/stopwords')
        print("✓ NLTK stopwords: Installed")
    except LookupError:
        print("Installing NLTK stopwords...")
        nltk.download('stopwords')
        print("✓ NLTK stopwords: Installed")
except ImportError:
    print("NLTK not installed. Please install it first.")

print("\nSetup complete! Your environment should now have all required packages.")
