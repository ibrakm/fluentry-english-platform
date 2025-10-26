# Fluentry - English Learning Platform

A professional English learning platform offering personalized one-on-one coaching, AI-powered proficiency tests, and flexible online lessons.

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

### Option 1: Deploy via Vercel Dashboard (3 Minutes)

1. **Push to Git**:
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your repository
   - Click "Deploy"

3. **Done!** Your site will be live in 2-3 minutes.

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
cd fluentry-vercel
vercel
vercel --prod
```

## 📋 Build Configuration

This project is pre-configured for Vercel with:

- **Build Command**: `pnpm build:vercel`
- **Output Directory**: `dist/public`
- **Framework**: Vite
- **Node Version**: 18.x or higher

All settings are in `vercel.json` - no manual configuration needed!

## 🛠️ Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build:vercel

# Preview production build
pnpm preview
```

## 📦 Project Structure

```
fluentry-vercel/
├── client/              # React frontend
│   ├── src/
│   │   ├── pages/      # Page components
│   │   ├── components/ # Reusable components
│   │   └── main.tsx    # App entry point
│   └── index.html      # HTML template
├── server/             # Backend (not used in Vercel deployment)
├── vercel.json         # Vercel configuration
└── package.json        # Dependencies and scripts
```

## ✨ Features

- **Interactive English Tests** - AI-powered CEFR level assessment
- **Course Information** - Detailed course offerings
- **Pricing Plans** - Transparent pricing (100 DH/lesson or 70 DH monthly)
- **Easy Booking** - Calendly and WhatsApp integration
- **Responsive Design** - Works on all devices
- **Fast Performance** - Optimized for speed

## 🌐 Pages

- `/` - Home page with hero section
- `/about` - Founder story and mission
- `/courses` - Course offerings
- `/pricing` - Pricing plans and packages
- `/free-test` - Interactive English proficiency test
- `/book-lesson` - Booking options

## 📖 Documentation

See `VERCEL_DEPLOYMENT_GUIDE.md` for detailed deployment instructions and troubleshooting.

## 🔧 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui
- **Routing**: Wouter
- **Animations**: Framer Motion

## 📄 License

MIT

## 👨‍🏫 About

Founded by Mr. Ibrahim K., an experienced English educator from Tangier, Morocco. Fluentry provides personalized English coaching focused on real communication, not just grammar rules.

---

**Ready to deploy?** See `VERCEL_DEPLOYMENT_GUIDE.md` for step-by-step instructions!

