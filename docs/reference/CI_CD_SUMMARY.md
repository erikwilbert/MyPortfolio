# CI and Vercel Deployment Summary

This project uses GitHub Actions for CI and Vercel's native GitHub integration for deployment.

## GitHub Actions

Only one workflow is needed:

- `.github/workflows/ci.yml`

It runs:

- ESLint
- TypeScript checks
- Production build

## Vercel

Vercel handles deployment after the repository is connected in the Vercel dashboard:

- Production deployment on push to `main`
- Preview deployment on pull requests
- Build logs in Vercel
- SSL, CDN, and rollback handling

No GitHub Actions deploy workflow is needed. No Vercel deployment secrets are needed in GitHub.

## Flow

```text
Local changes
  -> Push to GitHub
  -> GitHub Actions runs CI
  -> Vercel builds and deploys from GitHub
  -> Site updates
```

## Files

```text
.github/workflows/ci.yml
vercel.json
.vercelignore
docs/deployment/QUICK_START.md
docs/deployment/CI_CD_SETUP.md
docs/deployment/DEPLOYMENT_CHECKLIST.md
```
