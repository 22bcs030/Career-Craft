# PostgreSQL Setup Guide for CareerCraft

This guide will help you set up PostgreSQL for the CareerCraft project.

## PostgreSQL Installation

1. **Download PostgreSQL**:
   - Go to [https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/)
   - Download and run the installer for the latest version
   - Keep note of the password you set for the postgres user during installation

2. **Verify Installation**:
   - After installation, open a new command prompt
   - Run: `psql -U postgres -c "SELECT version();"`
   - Enter the password you set during installation
   - You should see the PostgreSQL version information

## Database Setup

1. **Create the CareerCraft Database**:
   - Open a command prompt and run:
   ```
   psql -U postgres
   ```
   - At the PostgreSQL prompt, create a new database:
   ```
   CREATE DATABASE CareerCraft;
   ```
   - Exit PostgreSQL:
   ```
   \q
   ```

2. **Update .env.local File**:
   - Open `nextjs-frontend/.env.local`
   - Update the DATABASE_URL with your PostgreSQL credentials:
   ```
   DATABASE_URL="postgresql://postgres:your_password@localhost:5432/CareerCraft"
   ```
   - Replace `your_password` with the password you set during PostgreSQL installation

## Run Prisma Migrations

1. **Initialize the Database Schema**:
   - Open a command prompt in the nextjs-frontend directory
   - Run:
   ```
   npx prisma migrate dev --name init
   ```
   - This will create all the necessary tables in your database

2. **Generate Prisma Client**:
   - Run:
   ```
   npx prisma generate
   ```

## Start the Frontend

1. **Start the Next.js Development Server**:
   - In the nextjs-frontend directory, run:
   ```
   npm run dev
   ```
   - The frontend will be available at: http://localhost:3000

## Troubleshooting

- **Connection Issues**: If you encounter connection problems, verify that PostgreSQL is running as a service
- **Permission Issues**: Make sure the postgres user has the necessary permissions
- **Port Conflicts**: Ensure no other service is using port 5432

For additional help, refer to the [PostgreSQL Documentation](https://www.postgresql.org/docs/).
