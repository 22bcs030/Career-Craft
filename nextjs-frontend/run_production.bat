@echo off
echo ===================================
echo CareerPilot Production Build Script
echo ===================================

cd "%~dp0"
echo Building for production...
call npm run build

if %errorlevel% neq 0 (
  echo Build failed!
  exit /b %errorlevel%
)

echo Starting production server...
call npm run start

echo ===================================
