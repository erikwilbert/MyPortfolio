# 📚 Documentation Index

Welcome to the portfolio documentation! Here's everything organized by topic.

## 🚀 Getting Started

Start with one of these based on your needs:

### For Quick Deployment (5 minutes)
→ **[Quick Start Deployment](./deployment/QUICK_START.md)** ⚡

**What:** Deploy to Vercel in 5 minutes  
**For:** Developers who want to go live fast

### For Complete Setup Guide
→ **[CI/CD Setup Guide](./deployment/CI_CD_SETUP.md)** 📚

**What:** Detailed CI/CD configuration and workflows  
**For:** Developers who want to understand everything

### For Pre-Deployment Verification
→ **[Deployment Checklist](./deployment/DEPLOYMENT_CHECKLIST.md)** ✅

**What:** Step-by-step verification before going live  
**For:** Making sure everything is ready

## 🎨 Portfolio Customization

→ **[Portfolio Customization Guide](./guides/PORTFOLIO_GUIDE.md)** 🎨

**What:** How to customize your portfolio content  
**Topics:**
- Edit profile information
- Add projects
- Add experience entries
- Add skills
- Write articles
- Update social links

## 📋 Reference & Overview

→ **[CI/CD Summary](./reference/CI_CD_SUMMARY.md)** 📋

**What:** Overview of your CI/CD setup  
**Topics:**
- What's included
- Deployment flow
- File structure
- Pro tips

## 📂 Directory Structure

```
docs/
├── index.md (this file)
├── deployment/
│   ├── QUICK_START.md              ⚡ 5-min deployment
│   ├── CI_CD_SETUP.md              📚 Detailed guide
│   └── DEPLOYMENT_CHECKLIST.md     ✅ Verification
├── guides/
│   └── PORTFOLIO_GUIDE.md          🎨 Customization
└── reference/
    └── CI_CD_SUMMARY.md            📋 Overview
```

## 🎯 Find What You Need

| I want to... | Go to... |
|---|---|
| Deploy NOW | [Quick Start](./deployment/QUICK_START.md) |
| Understand the setup | [CI/CD Summary](./reference/CI_CD_SUMMARY.md) |
| Deep dive into config | [CI/CD Setup](./deployment/CI_CD_SETUP.md) |
| Before deploying | [Checklist](./deployment/DEPLOYMENT_CHECKLIST.md) |
| Customize content | [Portfolio Guide](./guides/PORTFOLIO_GUIDE.md) |

## 🚀 Quick Navigation

### Deployment Docs
- [Quick Start - 5 minute deployment](./deployment/QUICK_START.md)
- [Complete CI/CD Setup](./deployment/CI_CD_SETUP.md)
- [Pre-deployment Checklist](./deployment/DEPLOYMENT_CHECKLIST.md)

### Guides
- [Portfolio Customization](./guides/PORTFOLIO_GUIDE.md)

### Reference
- [CI/CD Overview](./reference/CI_CD_SUMMARY.md)

## 📖 Common Tasks

### First Time Here?
1. Read this file (you're doing it! ✓)
2. Go to [Quick Start](./deployment/QUICK_START.md)
3. Follow the 5-minute deployment

### Want to Customize?
1. Read [Portfolio Guide](./guides/PORTFOLIO_GUIDE.md)
2. Edit files in `src/data/`
3. Push to GitHub - auto-deploys!

### Need Help?
1. Check [CI/CD Summary](./reference/CI_CD_SUMMARY.md)
2. Read [Complete Setup Guide](./deployment/CI_CD_SETUP.md)
3. Review [Troubleshooting](./deployment/CI_CD_SETUP.md#troubleshooting)

## 📦 Project Files

Your actual project lives in:
- `src/` - Application source code
- `src/app/` - Pages and routes
- `src/components/` - Reusable components
- `src/data/` - **Your portfolio content** (edit these!)
- `.github/workflows/` - CI/CD automation

## 💾 Key Data Files to Edit

Found in `src/data/`:
- `profile.ts` - Your profile info
- `projects.ts` - Your projects
- `experience.ts` - Your work history
- `skills.ts` - Your technologies
- `articles.ts` - Your blog posts
- `socials.ts` - Social media links

## 🔄 Update Workflow

```bash
# 1. Edit data in src/data/
# 2. Commit and push
git add .
git commit -m "Update portfolio"
git push

# 3. Vercel auto-deploys - Done! ✓
```

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [GitHub Workflows](https://docs.github.com/en/actions)

---

**Start with one of the deployment docs above!** 🚀

Most common: [Quick Start Deployment](./deployment/QUICK_START.md) ⚡
