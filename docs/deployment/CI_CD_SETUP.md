# CI/CD Setup Guide

## Quick Start

### 1. Connect to Vercel (Recommended - Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Click "Import"
5. Vercel automatically detects Next.js settings
6. Click "Deploy"

**That's it!** Vercel now handles everything:
- ✅ Automatic deployments on push to `main`
- ✅ Preview deployments on pull requests
- ✅ Automatic rollbacks on errors
- ✅ Environment variables management
- ✅ Analytics and monitoring

### 2. GitHub Actions CI/CD

This repo includes GitHub Actions workflows for continuous integration:

**File:** `.github/workflows/ci.yml`

**What it does:**
- ✅ Runs on every push to `main` or `develop`
- ✅ Runs on every pull request
- ✅ Lints code with ESLint
- ✅ Type checks with TypeScript
- ✅ Builds the project
- ✅ Uploads build artifacts

**Status:**
- Checks will appear on PRs
- Failed checks block merging (optional - configure in repo settings)

## Deployment Workflow

### Development Flow
```
Feature Branch → Create PR → GitHub Actions runs CI → Code Review → Merge to main → Vercel deploys
```

### Preview Deployments
- Every PR gets a preview URL from Vercel
- Test changes before merging
- Share preview with team

### Production Deployments
- Merge to `main` branch
- Vercel automatically builds and deploys
- Deploy to production takes ~2-3 minutes

## Setup Instructions

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: modern portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Connect Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Select your GitHub repository
3. Accept default settings (Next.js is auto-detected)
4. Click "Deploy"
5. Wait for deployment (~2-3 minutes)
6. Get your live URL!

### Step 3: Add Custom Domain (Optional)
1. In Vercel project settings
2. Go to "Domains"
3. Add your custom domain
4. Follow DNS instructions

## Environment Variables

### On Vercel Dashboard:
1. Project Settings → Environment Variables
2. Add variables for each environment (Preview, Production)

### Example:
```
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## Monitoring & Logs

### Vercel Dashboard:
- View deployments
- Check deployment logs
- Monitor performance
- View analytics

### GitHub Actions:
- Click on workflow runs in "Actions" tab
- See detailed logs of CI checks
- Debug build errors

## Troubleshooting

### Build Fails on Vercel but Works Locally?
1. Check Node.js version matches
2. Verify all dependencies in `package.json`
3. Check environment variables
4. View Vercel build logs for details

### Preview URL Not Working?
1. Check GitHub Actions passed
2. Wait for Vercel to finish deployment
3. Check for build errors in Vercel dashboard

### Need to Redeploy?
1. Click "Redeploy" in Vercel dashboard, OR
2. Push a new commit to `main`

## Advanced Options

### Protect Main Branch
1. GitHub Repo Settings → Branches
2. Add "main" branch protection rule
3. Require CI checks to pass before merge
4. Require pull request reviews

### Automatic Deployments
Already configured! Every push to `main` auto-deploys.

### Scheduled Deployments
Vercel doesn't support scheduled deployments, but you can:
- Manually redeploy from dashboard
- Use GitHub Actions for scheduled rebuilds

## Performance Tips

- Vercel automatically optimizes images
- Next.js automatically code-splits
- Edge caching enabled by default
- ISR (Incremental Static Regeneration) ready
- Check Vercel Analytics for performance

## Next Steps

1. ✅ Push this repo to GitHub
2. ✅ Connect to Vercel
3. ✅ Add custom domain (optional)
4. ✅ Update portfolio data
5. ✅ Start building!

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Your CI/CD is ready!** Just push to GitHub and connect to Vercel. 🚀
