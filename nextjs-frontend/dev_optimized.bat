@echo off
echo ===================================
echo CareerPilot Optimized Dev Script
echo ===================================

cd "%~dp0"
echo Starting with optimized settings...

:: Set Node.js memory limits
set NODE_OPTIONS=--max-old-space-size=2048

:: Run Next.js in turbo mode
call npm run dev -- --turbo

echo ===================================
