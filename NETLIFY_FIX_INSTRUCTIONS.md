# Netlify Deployment Fix Instructions

## Problem Diagnosis

The build failed because Netlify couldn't find `package.json` in the repository root. This typically happens when:
1. The repository structure doesn't match what Netlify expects
2. The fluentry folder is inside another folder in your Git repository

## Solution: Choose Based on Your Repository Structure

### Scenario A: Fluentry is in the Root (Most Common)

If your Git repository looks like this:
```
your-repo/
├── package.json
├── netlify.toml
├── client/
├── server/
└── ...
```

**Fix:**
1. Update `netlify.toml` (already done - see updated file)
2. Commit and push:
   ```bash
   cd /home/ubuntu/fluentry
   git add netlify.toml
   git commit -m "Fix: Update netlify.toml with pnpm install"
   git push
   ```
3. Redeploy in Netlify dashboard

### Scenario B: Fluentry is in a Subdirectory

If your Git repository looks like this:
```
your-repo/
└── fluentry/
    ├── package.json
    ├── netlify.toml
    ├── client/
    └── ...
```

**Fix Option 1: Use Base Directory (Recommended)**

Create/update `netlify.toml` in the **fluentry** folder:
```toml
[build]
  base = "fluentry"
  command = "pnpm install && pnpm build"
  publish = "dist/public"
  functions = "netlify/functions"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Fix Option 2: Configure in Netlify Dashboard**

1. Go to your site in Netlify dashboard
2. Site settings → Build & deploy → Build settings
3. Set **Base directory**: `fluentry`
4. Set **Build command**: `pnpm install && pnpm build`
5. Set **Publish directory**: `fluentry/dist/public`
6. Save and redeploy

## Quick Fix Steps

### Step 1: Identify Your Structure

Run this command to see your repository structure:
```bash
cd /home/ubuntu/fluentry
git ls-files | head -20
```

### Step 2: Apply the Appropriate Fix

**If package.json is at the root of your repo:**
- Use the updated `netlify.toml` (already updated)
- Commit and push

**If your repo has fluentry as a subdirectory:**
- Update Netlify settings to use base directory "fluentry"
- OR update netlify.toml with base = "fluentry"

### Step 3: Commit and Push

```bash
cd /home/ubuntu/fluentry
git add netlify.toml
git commit -m "Fix Netlify build configuration"
git push origin main  # or master, depending on your branch name
```

### Step 4: Redeploy

In Netlify dashboard:
1. Go to your site
2. Click "Deploys" tab
3. Click "Trigger deploy" → "Deploy site"

## Alternative: Manual Deployment (No Git Required)

If you want to avoid Git configuration issues entirely:

### Option 1: Netlify Drop
1. Go to https://app.netlify.com/drop
2. Drag the `dist/public` folder from your local machine
3. Done! No build process needed

### Option 2: Netlify CLI
```bash
cd /home/ubuntu/fluentry
export NETLIFY_AUTH_TOKEN="nfp_Wnub5Bb3suV8B3fojpNarZoHzsQdPrHo9a5b"
netlify deploy --prod --dir=dist/public --site=fluentry-english
```

## Verification

After applying the fix, check the build logs in Netlify:
- ✅ Should see "pnpm install" running successfully
- ✅ Should see "pnpm build" completing
- ✅ Should see "Site is live" message

## Still Having Issues?

### Check These:

1. **Is package.json committed?**
   ```bash
   git ls-files | grep package.json
   ```

2. **Is netlify.toml committed?**
   ```bash
   git ls-files | grep netlify.toml
   ```

3. **What's your branch name?**
   ```bash
   git branch --show-current
   ```
   Make sure Netlify is deploying from the correct branch (usually `main` or `master`)

4. **Check Netlify build settings:**
   - Site settings → Build & deploy → Build settings
   - Ensure they match your repository structure

## Contact Me

If you're still having issues, please share:
1. Your repository structure (output of `git ls-files | head -20`)
2. Your Netlify build logs
3. Screenshot of your Netlify build settings

I'll help you resolve it quickly!

