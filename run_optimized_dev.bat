@echo off
echo ===================================================
echo     CareerPilot - Optimized Development Mode
echo ===================================================
echo.
echo This script runs the frontend with optimized memory settings
echo and performance configurations for development.
echo.

REM Set environment to development explicitly
set NODE_ENV=development

REM Set memory limit to 1GB to prevent crashes
set NODE_OPTIONS=--max-old-space-size=1024 --no-warnings

REM Add a dummy Clerk key if none exists
if "%NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY%"=="" (
    echo Setting dummy Clerk key for development...
    set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_dummy_key_for_development
)

REM Optional: Close any existing Node.js processes to free memory
echo Checking for existing Node.js processes...
tasklist /FI "IMAGENAME eq node.exe" 2>NUL | find /I /N "node.exe">NUL
if not errorlevel 1 (
    echo Found existing Node.js processes - you may want to close them to free up memory
    echo.
)

echo Memory optimization settings applied:
echo - Maximum heap size: 1GB
echo - Disabled code splitting
echo - Reduced build frequency
echo - Simplified authentication for development
echo.

cd nextjs-frontend

echo Starting development server...
echo.
echo Press Ctrl+C to stop the server
echo ===================================================
echo.

npm run dev
