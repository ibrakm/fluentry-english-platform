# Fluentry - Deployment Guide

## Project Summary

**Fluentry** is an English learning platform with:
- **Frontend**: React + TypeScript + Vite + TailwindCSS
- **Backend**: Express.js server with SQLite database
- **Features**: English proficiency tests, course information, booking system

## Issues Fixed

### 1. TypeScript Configuration
- **Issue**: Type definition errors for 'node' and 'vite/client'
- **Fix**: Updated `tsconfig.json` to remove 'node' from types array, keeping only 'vite/client'

### 2. Routing Issues
- **Issue**: Missing leading slashes in route paths in `App.tsx`
- **Fix**: Added leading slashes to `/book-lesson`, `/pricing`, and `/404` routes

### 3. Build Permissions
- **Issue**: Permission denied errors for esbuild and other binaries in node_modules
- **Fix**: Set executable permissions on all binary files in `node_modules/.pnpm/*/bin/*`

### 4. Database Setup
- **Issue**: better-sqlite3 build script not approved
- **Fix**: Approved and built better-sqlite3 native module

## Netlify Deployment Configuration

### Files Created

1. **netlify.toml** - Netlify configuration
   - Build command: `pnpm build`
   - Publish directory: `dist/public`
   - Functions directory: `netlify/functions`
   - Redirects for API and SPA routing

2. **netlify/functions/save-result.ts** - Serverless function
   - Handles POST requests to `/api/save-result`
   - Stores test results in SQLite database (in /tmp on Netlify)
   - Note: /tmp storage is ephemeral on Netlify

### Deployment Steps

#### Option 1: Manual Deployment via Netlify CLI

1. **Login to Netlify**:
   ```bash
   netlify login
   ```

2. **Initialize Netlify site** (from project directory):
   ```bash
   cd /home/ubuntu/fluentry
   netlify init
   ```
   - Choose "Create & configure a new site"
   - Select your team
   - Choose a site name (or let Netlify generate one)

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

#### Option 2: Deploy via Netlify Dashboard

1. **Push code to Git repository** (GitHub, GitLab, or Bitbucket)
   ```bash
   cd /home/ubuntu/fluentry
   git init
   git add .
   git commit -m "Initial commit - Fluentry English learning platform"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider
   - Select the fluentry repository
   - Build settings should be auto-detected from netlify.toml
   - Click "Deploy site"

#### Option 3: Drag & Drop Deployment

1. **Build the project locally**:
   ```bash
   cd /home/ubuntu/fluentry
   pnpm build
   ```

2. **Create a deployment package**:
   ```bash
   cd /home/ubuntu/fluentry
   zip -r fluentry-deploy.zip dist/public netlify.toml netlify/
   ```

3. **Upload to Netlify**:
   - Go to https://app.netlify.com/drop
   - Drag and drop the `dist/public` folder
   - Note: This method won't include serverless functions

## Important Notes

### Database Limitations on Netlify

⚠️ **Warning**: The current implementation uses SQLite with file storage in `/tmp`. On Netlify:
- `/tmp` is ephemeral and cleared between function invocations
- Data will NOT persist between deployments or cold starts

### Recommended Solutions for Production

1. **Use a cloud database**:
   - PostgreSQL (Supabase, Neon, Railway)
   - MongoDB (MongoDB Atlas)
   - MySQL (PlanetScale)

2. **Use Netlify Blobs** (for simple key-value storage):
   ```bash
   pnpm add @netlify/blobs
   ```

3. **Use a third-party service**:
   - Airtable
   - Google Sheets API
   - Firebase Realtime Database

### Environment Variables

If you need to add environment variables (API keys, database URLs, etc.):

1. **Via Netlify Dashboard**:
   - Go to Site settings → Environment variables
   - Add your variables

2. **Via Netlify CLI**:
   ```bash
   netlify env:set VARIABLE_NAME value
   ```

### Custom Domain

To add a custom domain:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Testing the Deployment

After deployment, test:
1. ✅ Home page loads correctly
2. ✅ Navigation works (About, Courses, Pricing, Free Test, Book Lesson)
3. ✅ English test functionality works
4. ⚠️ Test result saving (will work but data won't persist without database migration)

## Project Structure

```
fluentry/
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── App.tsx      # Main app component
│   └── index.html       # HTML template
├── server/              # Backend Express server (for local dev)
│   ├── index.ts         # Server entry point
│   └── db.ts            # Database operations
├── netlify/
│   └── functions/       # Netlify serverless functions
│       └── save-result.ts
├── dist/
│   ├── public/          # Built frontend (published to Netlify)
│   └── index.js         # Built backend (not used on Netlify)
├── netlify.toml         # Netlify configuration
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Build Output

The build process creates:
- `dist/public/` - Static frontend files (HTML, CSS, JS)
- `dist/index.js` - Backend server (used for local production testing only)

## Support

For issues or questions:
- Check Netlify deployment logs in the dashboard
- Review function logs for serverless function errors
- Ensure all dependencies are properly installed

