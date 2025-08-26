# Resume Analysis Feature

This module provides advanced resume analysis capabilities through machine learning and AI integration.

## Key Features

- **Resume Parsing**: Extract structured information from PDF and DOCX formats
- **Job Role Prediction**: ML model to predict suitable job roles based on resume content
- **Skills Analysis**: Identify key skills and suggest improvements
- **Resume Scoring**: Calculate comprehensive resume scores based on industry standards
- **Visual Analytics**: Display results through interactive charts and visualizations

## Technical Implementation

- Frontend components in `nextjs-frontend/app/(main)/resume-analysis/`
- Backend API endpoints in `backend/app.py`
- ML models:
  - `resume_model.pkl`: Trained classifier for job role prediction
  - `vectorizer.pkl`: Text vectorizer for feature extraction
  - `label_encoder.pkl`: Encodes job category labels

## Integration Points

- Connects with Job Portal feature to recommend relevant job listings
- Provides data for the Dashboard analytics
- Feeds into Interview Preparation module to suggest interview focus areas
