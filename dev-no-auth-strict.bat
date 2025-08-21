@echo off
echo ===================================================
echo     CareerPilot - Development Mode (No Auth)
echo ===================================================
echo.

cd nextjs-frontend

REM Force development mode and disable authentication
set NODE_ENV=development
set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_dummy
set CLERK_SECRET_KEY=sk_test_dummy
set DEVELOPMENT_MODE=true

REM Set memory limits
set NODE_OPTIONS=--max-old-space-size=1024

echo Starting Next.js in development mode...
echo Authentication has been disabled for development
echo.

REM Optional: Delete .next folder to clean cache
if exist .next (
    echo Cleaning Next.js cache...
    rmdir /s /q .next
)

echo Starting development server...
echo.
echo Press Ctrl+C to stop the server
echo ===================================================
echo.

REM Run Next.js without using Clerk
npx next dev
