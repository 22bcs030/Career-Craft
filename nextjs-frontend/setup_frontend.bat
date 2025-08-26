@echo off
echo ===================================
echo CareerCraft Frontend Setup Script
echo ===================================

echo Checking dependencies...
cd "%~dp0"

REM Check if npm is installed
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm is not installed. Please install Node.js and npm first.
    exit /b 1
)

echo Installing dependencies...
call npm install

echo Setting up Next.js application...
echo.
echo IMPORTANT: Before running the frontend, please make sure:
echo 1. PostgreSQL is installed and running on your machine
echo 2. A database named "CareerCraft" is created
echo 3. Update the .env.local file with your PostgreSQL credentials
echo.

echo To run the frontend:
echo 1. Run the backend server: cd ..\backend ^& .\venv\Scripts\python.exe -m uvicorn app:app --reload
echo 2. In a new terminal, run the frontend: npm run dev
echo.
echo Frontend will be available at: http://localhost:3000

echo ===================================
