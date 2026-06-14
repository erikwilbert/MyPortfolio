# Vercel Quick Start

Use Vercel's native GitHub integration for deployment. No GitHub Actions deploy workflow or Vercel token secrets are needed.

## Fastest Path

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 2. Connect Vercel

1. Go to https://vercel.com/new
2. Select your GitHub repository
3. Click "Import"
4. Keep the detected Next.js settings
5. Click "Deploy"

## What Is Automated

### GitHub Actions CI

- Runs linting on push and pull requests
- Runs TypeScript checks
- Runs a production build test
- Workflow: `.github/workflows/ci.yml`

### Vercel Deployment

- Deploys production on push to `main`
- Creates preview deployments for pull requests
- Handles build logs, SSL, CDN, and rollbacks from Vercel

## Typical Workflow

1. Make changes locally
2. Run `npm run lint`
3. Run `npm run build`
4. Commit and push
5. Vercel automatically deploys from GitHub

## Configuration Files

- `vercel.json` - Vercel settings
- `.vercelignore` - Files ignored by Vercel
- `.github/workflows/ci.yml` - CI checks only

## Need Help?

- [CI + Vercel Deployment Guide](CI_CD_SETUP.md)
- [Deployment Checklist](DEPLOYMENT_CHECKLIST.md)
