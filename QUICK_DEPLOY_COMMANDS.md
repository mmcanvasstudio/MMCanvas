# 🚀 Quick Deploy Commands Reference

## Step 1: Git Setup & Push to GitHub

```bash
# Navigate to project
cd c:/Manohar/Projects/MMCanvas

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit - Bryan Minear Portfolio"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/bryan-minear-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 2: Future Updates (After Initial Push)

```bash
# After making changes to your code:

# See what changed
git status

# Add all changes
git add .

# Commit with message
git commit -m "Update: describe your changes here"

# Push to GitHub (triggers auto-deploy on Vercel)
git push origin main
```

---

## Common Git Commands

```bash
# Check current status
git status

# See commit history
git log --oneline

# Discard changes (before commit)
git restore .

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main

# Pull latest changes
git pull origin main
```

---

## Vercel Deployment Steps

1. **Go to:** https://vercel.com
2. **Sign up** with GitHub account
3. **Click:** "Add New..." → "Project"
4. **Select:** `bryan-minear-portfolio` repository
5. **Click:** "Deploy"
6. **Wait:** 2-5 minutes
7. **Done!** Get your URL: `https://your-project.vercel.app`

---

## GoDaddy DNS Records

**Add these in GoDaddy DNS Management:**

### A Record (Root Domain)
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 600
```

### CNAME Record (WWW)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 1 Hour
```

**⚠️ Important:** Delete old A/CNAME records that conflict!

---

## Test Build Locally

```bash
# Before pushing, test your build:
npm run build

# If build succeeds, test production mode:
npm start

# Then push to GitHub:
git add .
git commit -m "Ready for deployment"
git push origin main
```

---

## Useful Links

- **Your GitHub:** https://github.com/YOUR_USERNAME/bryan-minear-portfolio
- **Vercel Dashboard:** https://vercel.com/dashboard
- **GoDaddy DNS:** https://dcc.godaddy.com/manage/
- **Check DNS Propagation:** https://www.whatsmydns.net

---

## Emergency: Rollback Deployment

If something breaks after deployment:

1. Go to Vercel dashboard
2. Click your project
3. Go to "Deployments" tab
4. Find previous working deployment
5. Click "..." menu → "Promote to Production"

---

## Need Help?

- **Read full guide:** `DEPLOYMENT_GUIDE.md`
- **Vercel Support:** https://vercel.com/help
- **GitHub Help:** https://docs.github.com
