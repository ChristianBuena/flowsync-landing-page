@echo off
echo 🚀 Setting up FlowSync React Application...

cd react-app

echo 📦 Installing dependencies...
call npm install

echo 🎨 Setting up Tailwind CSS...
call npx tailwindcss init -p

echo ✅ Setup complete!
echo.
echo 🎯 To start the development server:
echo    cd react-app
echo    npm start
echo.
echo 📁 Project structure:
echo    react-app/
echo    ├── src/
echo    │   ├── components/
echo    │   │   ├── Navigation.tsx
echo    │   │   ├── Hero.tsx
echo    │   │   ├── Features.tsx
echo    │   │   ├── Pricing.tsx
echo    │   │   ├── Testimonials.tsx
echo    │   │   ├── CTA.tsx
echo    │   │   └── Footer.tsx
echo    │   ├── hooks/
echo    │   ├── utils/
echo    │   ├── App.tsx
echo    │   ├── index.tsx
echo    │   └── index.css
echo    ├── public/
echo    ├── package.json
echo    ├── tailwind.config.js
echo    └── tsconfig.json

pause
