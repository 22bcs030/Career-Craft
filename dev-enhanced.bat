@echo off
echo ===================================================
echo     CareerPilot - Enhanced Dev Mode
echo ===================================================
echo.

cd nextjs-frontend

REM Create a local .env.development file with dev settings
echo Creating development environment settings...
echo NODE_ENV=development > .env.development.local
echo # Bypass authentication in development > .env.development.local
echo NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_dummy_key_for_development >> .env.development.local
echo CLERK_SECRET_KEY=sk_test_dummy_key_for_development >> .env.development.local

REM Set memory limits
set NODE_OPTIONS=--max-old-space-size=1024 --no-warnings

echo Starting development server with enhanced error handling...
echo.

REM Run Next.js with the development flag explicitly
npx next dev --turbo

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ===================================================
    echo     Error detected! Trying alternative approach...
    echo ===================================================
    echo.
    
    REM Try again with compatibility mode
    echo Retrying with compatibility mode...
    set NODE_OPTIONS=--max-old-space-size=1024 --no-warnings
    npx next dev
)

echo.
echo Development server has stopped.
pause
