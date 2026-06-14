# 🚀 CI/CD Quick Start - Deploy in 5 Minutes

Your portfolio has **automated CI/CD ready for Vercel**. Here's the fastest path to production.

## ⚡ Fastest Path (Recommended)

### 1️⃣ Push to GitHub (2 min)
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 2️⃣ Connect Vercel (3 min)
1. Go to https://vercel.com/new
2. Click "Select GitHub Account"
3. Find and click your "portfolio" repo
4. Click "Import"
5. Click "Deploy"
6. **Done!** 🎉 Your site is live

## ✅ What's Included

### GitHub Actions (CI)
- ✅ Automatic linting on every push/PR
- ✅ TypeScript type checking
- ✅ Full project build test
- ✅ Workflow: `.github/workflows/ci.yml`

### Vercel (CD)
- ✅ Auto-deploys on push to `main`
- ✅ Preview URLs on pull requests
- ✅ Automatic SSL certificates
- ✅ Global CDN
- ✅ Edge Functions ready

### Configuration Files
- ✅ `vercel.json` - Vercel settings
- ✅ `.vercelignore` - Ignore patterns
- ✅ `.github/workflows/ci.yml` - CI pipeline
- ✅ `.github/workflows/deploy.yml` - Optional manual deploy

## 📋 What Happens Automatically

```
You push code to GitHub main branch
         ↓
GitHub Actions runs CI (lint, type-check, build)
         ↓
If CI passes, Vercel builds and deploys
         ↓
Your site updates automatically 🎉
```

## 🔄 Typical Workflow

1. Make changes locally
2. Test: `npm run dev`
3. Build: `npm run build`
4. Commit: `git commit -m "description"`
5. Push: `git push`
6. Vercel automatically deploys ✓

## 🛑 If CI Fails

GitHub Actions will:
- Show ❌ in your PR
- Prevent merging (optional)
- Show detailed error logs

**How to fix:**
1. Check error message in GitHub Actions
2. Run locally: `npm run lint` and `npm run build`
3. Fix errors
4. Push again

## 📊 Monitor Your Deployments

### In Vercel Dashboard:
- View all deployments
- Check build logs
- Monitor performance
- View analytics

### In GitHub:
- Click "Actions" tab to see CI runs
- View test results
- Check build status

## 🎯 Next Steps

1. ✅ Push to GitHub
2. ✅ Connect to Vercel
3. ✅ Add custom domain (optional)
4. ✅ Update portfolio data in `src/data/`
5. ✅ Push changes - auto-deploys! 

## 🆘 Need Help?

See detailed guides:
- [CI_CD_SETUP.md](CI_CD_SETUP.md) - Full setup details
- [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) - Step-by-step checklist
- [PORTFOLIO_GUIDE.md](PORTFOLIO_GUIDE.md) - How to customize content

---

**Your CI/CD is ready!** Just push to GitHub and Vercel handles the rest. 🚀
