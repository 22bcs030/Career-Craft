@echo off
echo ===================================================
echo     CareerPilot - No Auth Dev Mode
echo ===================================================
echo.

cd nextjs-frontend

REM Set environment to development explicitly
set NODE_ENV=development

REM Set memory limit to 1GB to prevent crashes
set NODE_OPTIONS=--max-old-space-size=1024 --no-warnings

REM Add dummy Clerk keys to prevent errors
set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_dummy_development
set CLERK_SECRET_KEY=sk_test_dummy_development

echo Starting development server...
echo.

npm run dev

echo.
echo Development server has stopped.
pause
