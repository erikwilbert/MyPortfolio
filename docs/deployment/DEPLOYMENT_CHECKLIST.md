# Deployment Checklist for Vercel

## Phase 1: Prepare Code

- [ ] Test locally with `npm run dev`
- [ ] Run lint with `npm run lint`
- [ ] Build successfully with `npm run build`
- [ ] Commit your changes

## Phase 2: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

## Phase 3: Connect to Vercel

1. [ ] Go to https://vercel.com/new
2. [ ] Sign in with GitHub
3. [ ] Select this repository
4. [ ] Click "Import"
5. [ ] Keep the detected Next.js settings
6. [ ] Click "Deploy"
7. [ ] Wait for the deployment to finish

No `VERCEL_TOKEN`, `VERCEL_ORG_ID`, or `VERCEL_PROJECT_ID` GitHub secrets are needed when using Vercel's GitHub integration.

## Phase 4: Verify Deployment

- [ ] Visit your Vercel URL
- [ ] Check navigation between pages
- [ ] Check mobile layout
- [ ] Test search and filters
- [ ] Confirm the contact section works

## Optional: Custom Domain

1. [ ] Open Vercel project settings
2. [ ] Go to Domains
3. [ ] Add your domain
4. [ ] Follow Vercel's DNS instructions

## What Is Automated

| Action | Trigger | Result |
| --- | --- | --- |
| CI checks | Push or pull request | GitHub Actions runs lint, type check, and build |
| Preview deploy | Pull request | Vercel creates a preview URL |
| Production deploy | Push to `main` | Vercel builds and deploys production |

## Redeploy

Use either option:

```bash
git commit --allow-empty -m "chore: trigger redeploy"
git push
```

Or click "Redeploy" in the Vercel dashboard.
