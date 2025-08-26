# Job Portal Feature

This module aggregates and presents relevant job opportunities from multiple sources.

## Key Features

- **Job Aggregation**: Scrape and consolidate listings from LinkedIn, Indeed, and other platforms
- **Smart Filtering**: Filter jobs by location, skills, experience level, and more
- **Personalized Recommendations**: Match jobs with user's skills and resume profile
- **Application Tracking**: Monitor application status and follow-ups
- **Market Insights**: Provide salary ranges and demand statistics for different roles

## Technical Implementation

- Frontend components in `nextjs-frontend/app/(main)/job-search/`
- Job scraping utilities in `nextjs-frontend/lib/scrapers/`
- API endpoints for job search in `nextjs-frontend/app/api/job-scraper/`

## Integration Points

- Uses Resume Analysis data to improve job matching
- Provides statistics for the Dashboard analytics
- Links to Cover Letter generator for specific job applications
