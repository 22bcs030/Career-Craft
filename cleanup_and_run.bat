@echo off
echo ===================================================
echo     CareerPilot - Memory Cleanup Utility
echo ===================================================
echo.
echo This script will clean up memory and prepare your system
echo to run the CareerPilot application more efficiently.
echo.

echo Step 1: Stopping any running Node.js processes...
taskkill /F /IM node.exe /T 2>NUL
if %ERRORLEVEL% EQU 0 (
    echo Node.js processes successfully terminated.
) else (
    echo No Node.js processes found running.
)

echo.
echo Step 2: Clearing temporary files...
rmdir /S /Q "%TEMP%\next-*" 2>NUL
rmdir /S /Q "nextjs-frontend\.next\cache" 2>NUL
echo Temporary files cleared.

echo.
echo Step 3: Running memory optimization...
echo Releasing system cache...
powershell -command "& { [System.GC]::Collect(); }"

echo.
echo Memory cleanup completed!
echo You can now run the application with better performance.
echo ===================================================
echo.
echo Press any key to run the optimized development server...
pause > nul
call run_optimized_dev.bat
