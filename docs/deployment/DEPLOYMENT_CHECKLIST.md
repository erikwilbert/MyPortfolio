# ✅ Deployment Checklist for Vercel

Complete these steps to deploy your portfolio to Vercel in minutes.

## Phase 1: Prepare Your Code (5 minutes)

- [ ] Test locally: `npm run dev`
- [ ] Build successfully: `npm run build`
- [ ] No linting errors: `npm run lint`
- [ ] Commit changes: `git add . && git commit -m "chore: prepare for deployment"`

## Phase 2: Set Up GitHub Repository (10 minutes)

- [ ] Initialize git: `git init`
- [ ] Add remote: `git remote add origin https://github.com/YOUR_USERNAME/portfolio.git`
- [ ] Push code:
  ```bash
  git branch -M main
  git push -u origin main
  ```

## Phase 3: Connect to Vercel (5 minutes)

### Option A: Automatic (Easiest - Recommended)

1. [ ] Go to [vercel.com/new](https://vercel.com/new)
2. [ ] Sign in with GitHub
3. [ ] Select your portfolio repository
4. [ ] Click "Import"
5. [ ] Click "Deploy"
6. [ ] Wait for green checkmark (~2-3 minutes)
7. [ ] Get your live URL! 🎉

### Option B: Manual with GitHub Actions

1. [ ] Go to Vercel project settings
2. [ ] Copy `VERCEL_TOKEN`
3. [ ] Go to GitHub repo settings
4. [ ] Add secrets:
   - `VERCEL_TOKEN` (from Vercel)
   - `VERCEL_ORG_ID` (from Vercel account)
   - `VERCEL_PROJECT_ID` (from Vercel project)
5. [ ] Trigger workflow or push to `main`

## Phase 4: Verify Deployment ✓

- [ ] Visit your Vercel URL
- [ ] Check that site loads correctly
- [ ] Test navigation between pages
- [ ] Verify dark mode works
- [ ] Check mobile responsiveness
- [ ] Test search and filters

## Phase 5: Custom Domain (Optional)

1. [ ] In Vercel dashboard, go to project Settings → Domains
2. [ ] Add your custom domain
3. [ ] Follow DNS configuration steps
4. [ ] Wait for SSL certificate (~15 minutes)

## Phase 6: Enable CI/CD (Optional but Recommended)

GitHub Actions automatically runs on every push:

- [ ] Lints code with ESLint
- [ ] Type checks with TypeScript
- [ ] Builds the project
- [ ] Blocks merging on failures

**Check status:** Go to GitHub repo → Actions tab

## Quick Reference URLs

| What | Where |
|------|-------|
| Live Site | https://your-vercel-url.vercel.app |
| Vercel Dashboard | https://vercel.com/dashboard |
| GitHub Repo | https://github.com/YOUR_USERNAME/portfolio |
| GitHub Actions | GitHub Repo → Actions tab |

## Troubleshooting

### Build fails on Vercel but works locally?
1. Check `.vercelignore` isn't excluding needed files
2. Verify all env variables are set
3. Check build command in `vercel.json`
4. View Vercel build logs for details

### Site works locally but not after deploy?
1. Clear browser cache
2. Wait for CDN cache to clear (5 minutes)
3. Check Vercel deployment status
4. Verify environment variables

### Want to redeploy?
```bash
# Option 1: Push new commit
git commit --allow-empty -m "chore: trigger redeploy"
git push

# Option 2: Manual redeploy in Vercel dashboard
# Click "Redeploy" button
```

## What's Automated

| Action | Trigger | What Happens |
|--------|---------|--------------|
| Preview Deploy | PR to main | Vercel builds and creates preview URL |
| Production Deploy | Push to main | Vercel builds and deploys to production |
| CI Checks | Push or PR | GitHub Actions runs linting and build |

## Environment Variables

If you need environment variables:

1. In Vercel dashboard: Project Settings → Environment Variables
2. Add variable name and value
3. Select which environments (Preview, Production, Development)
4. Redeploy for changes to take effect

## After Deployment

### Tell the world! 🚀
- Update your bio links
- Share on social media
- Add to your resume
- Send to friends/employers

### Keep it updated
- Edit data files in `src/data/`
- Push changes to GitHub
- Vercel automatically redeploys

### Monitor performance
- Check Vercel Analytics
- View deployment logs
- Monitor uptime

---

**You're all set!** Your portfolio is now live on the internet. 🎉

For detailed instructions, see [CI_CD_SETUP.md](CI_CD_SETUP.md)
