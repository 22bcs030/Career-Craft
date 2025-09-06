# CareerCraft

![CareerCraft Logo](ml.png)

## 🚀 Project Overview
CareerCraft is an AI-powered career development platform designed to help job seekers navigate their professional journey with personalized tools and insights. The platform combines modern frontend technologies with advanced backend AI services to provide a comprehensive career development experience.

## ✨ Key Features

### 📄 Resume Builder & Analysis
- Create professional resumes with customizable templates
- AI-powered resume analysis providing feedback on structure and content
- Skills gap identification and improvement recommendations
- Job role prediction based on resume content
- ATS compatibility score to help optimize resume performance

### 🔍 Smart Job Search
- Aggregated job listings from multiple platforms (LinkedIn, Indeed)
- Personalized job recommendations based on user profile
- Real-time job market insights
- Advanced filtering by location, experience, and skills

### 📝 Cover Letter Generator
- AI-powered cover letter generation based on job descriptions
- Customizable templates for different industries
- Personalization options to match company culture
- Save multiple versions for different applications

### 🎯 Dashboard & Industry Insights
- Personalized career progression tracking
- Skills and performance analytics
- Goal setting and achievement monitoring
- Industry-specific salary trends and growth projections

### 🎙️ AI Interview Preparation
- Video interview practice with AI feedback
- Technical and behavioral interview question generation
- Performance analysis and improvement recommendations
- Daily practice quizzes to build knowledge incrementally
- DSA practice problems with company-specific focus
- Online assessment simulations

### 📊 ML-Powered Job Prediction
- AI algorithms to match your skills with relevant job roles
- Career path suggestions based on your profile
- Model accuracy comparison for optimal recommendations

### ✅ Task Management
- Job application tracking
- Interview preparation checklists
- Career development task management
- Deadline reminders and progress tracking

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15
- **UI Components**: Shadcn UI with Tailwind CSS
- **State Management**: React Hooks
- **Authentication**: Clerk
- **Animations**: Framer Motion
- **Charts**: Recharts for data visualization
- **PDF Generation**: React-PDF renderer
- **Markdown**: MDX for content rendering

### Backend
- **Language**: Python 3.10+
- **API Framework**: FastAPI
- **ML Framework**: scikit-learn for resume analysis and job prediction
- **AI Integration**: Google Gemini for intelligent responses
- **Database**: PostgreSQL with Prisma ORM
- **Web Scraping**: Cheerio.js and Puppeteer for job listings
- **PDF Processing**: PDFMiner and PDF parsing tools
- **Server**: Uvicorn ASGI server

## 🔧 Installation and Setup

### Prerequisites
- Node.js 18+ and npm
- Python 3.10+ and pip
- PostgreSQL database
- Google Gemini API key

### Frontend Setup
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment
python -m venv venv
.\venv\Scripts\activate  # Windows
source venv/bin/activate  # Linux/Mac

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
# Create a .env file with:
# GOOGLE_API_KEY=your_gemini_api_key

# Run the server
python -m uvicorn app:app --reload
# Or use the provided script
.\start_server.bat
```

### Database Setup
1. Create a PostgreSQL database named "careercraft"
2. Apply the Prisma schema:
```bash
cd nextjs-frontend
npx prisma db push
```

## 📄 Project Structure

```
careercraft/
├── backend/                   # Python FastAPI backend
│   ├── app.py                 # Main API entry point
│   ├── utils.py               # Helper functions
│   ├── requirements.txt       # Python dependencies
│   ├── resume_model.pkl       # ML model for resume analysis
│   └── vectorizer.pkl         # Text vectorization for ML model
│
└── nextjs-frontend/           # Next.js frontend
    ├── actions/               # Server actions
    ├── app/                   # App router components
    │   ├── (main)/            # Protected routes
    │   │   ├── dashboard/     # Dashboard pages
    │   │   ├── interview/     # Interview preparation
    │   │   ├── job-search/    # Job search functionality
    │   │   └── resume/        # Resume building and analysis
    │   ├── api/               # API routes
    │   └── page.js            # Landing page
    ├── components/            # Reusable UI components
    ├── lib/                   # Utility functions
    ├── prisma/                # Database schema and migrations
    └── public/                # Static assets
```

## 🚀 Optimized Development
For better performance during development, use the optimized scripts:
```bash
# From project root
.\un_optimized_dev.bat  # Runs with memory optimizations
```

## 👨‍💻 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License
This project is licensed under the MIT License.
```bash
# Navigate to frontend directory
cd nextjs-frontend

# Install dependencies
npm install

# Set up environment variables
# Create a .env.local file with the following:
# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
# CLERK_SECRET_KEY=your_clerk_secret
# DATABASE_URL=postgresql://username:password@localhost:5432/careercraft
# NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
# GEMINI_API_KEY=your_gemini_api_key

# Run development server
npm run dev
# Or use the optimized script
.\run_frontend.bat
