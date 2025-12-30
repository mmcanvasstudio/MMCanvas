# 🚀 Deployment Guide
## Deploy Bryan Minear Portfolio to Vercel with GoDaddy Domain

This guide will walk you through deploying your Next.js portfolio to Vercel and connecting your GoDaddy domain.

---

## 📋 Prerequisites

- ✅ GitHub account
- ✅ Vercel account (sign up at [vercel.com](https://vercel.com))
- ✅ GoDaddy domain
- ✅ Git installed on your computer

---

## 🔧 Step 1: Initialize Git Repository (Local)

Open your terminal in the project directory and run:

```bash
# Navigate to your project
cd c:/Manohar/Projects/MMCanvas

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Bryan Minear Portfolio Clone"
```

---

## 📤 Step 2: Push to GitHub

### Option A: Using GitHub Desktop (Easier)
1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click "Add" → "Add Existing Repository"
4. Browse to `c:/Manohar/Projects/MMCanvas`
5. Click "Publish repository"
6. Choose repository name: `bryan-minear-portfolio`
7. Uncheck "Keep this code private" if you want it public
8. Click "Publish repository"

### Option B: Using Command Line
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `bryan-minear-portfolio`
3. Don't initialize with README (we already have files)
4. Copy the repository URL

```bash
# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/bryan-minear-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

---

## 🌐 Step 3: Deploy to Vercel

### 3.1 Sign Up / Login to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub" (recommended)
4. Authorize Vercel to access your GitHub account

### 3.2 Import Your Project
1. Click "Add New..." → "Project"
2. Click "Import" next to your `bryan-minear-portfolio` repository
3. **Configure Project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
   - Install Command: `npm install` (auto-filled)

4. Click "Deploy"

### 3.3 Wait for Deployment
- Vercel will install dependencies
- Build your project
- Deploy to production
- This takes 2-5 minutes

### 3.4 Deployment Complete! 🎉
- You'll get a URL like: `https://bryan-minear-portfolio.vercel.app`
- Click "Visit" to see your live site

---

## 🔗 Step 4: Connect GoDaddy Domain to Vercel

### 4.1 Add Domain in Vercel
1. Go to your project in Vercel
2. Click "Settings" tab
3. Click "Domains" in the sidebar
4. Enter your domain (e.g., `yourwebsite.com`)
5. Click "Add"

### 4.2 Get DNS Records from Vercel
Vercel will show you DNS records to add. You'll see something like:

**For Root Domain (yourwebsite.com):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For WWW (www.yourwebsite.com):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

### 4.3 Configure DNS in GoDaddy

1. **Login to GoDaddy:**
   - Go to [godaddy.com](https://www.godaddy.com)
   - Click "Sign In"
   - Go to "My Products"

2. **Access DNS Settings:**
   - Find your domain
   - Click "DNS" or "Manage DNS"

3. **Add/Update DNS Records:**

   **For Root Domain:**
   - Click "Add" or edit existing A record
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21` (Vercel's IP)
   - TTL: `600 seconds` (or default)
   - Click "Save"

   **For WWW Subdomain:**
   - Click "Add"
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: `1 Hour`
   - Click "Save"

4. **Remove Conflicting Records (Important!):**
   - Delete any existing A records pointing to GoDaddy's parking page
   - Delete any CNAME records for `@` or `www` that conflict
   - Keep only the Vercel DNS records

### 4.4 Wait for DNS Propagation
- DNS changes take 5 minutes to 48 hours
- Usually works within 10-30 minutes
- Check status at [whatsmydns.net](https://www.whatsmydns.net)

### 4.5 Verify in Vercel
1. Go back to Vercel → Settings → Domains
2. Wait for the domain to show "Valid Configuration"
3. Green checkmark = Success! ✅

---

## 🔄 Step 5: Future Updates

### Making Changes to Your Site:

```bash
# Make your code changes
# Then commit and push to GitHub:

git add .
git commit -m "Description of changes"
git push origin main
```

**Vercel will automatically:**
- Detect the GitHub push
- Build your project
- Deploy the new version
- Usually takes 1-2 minutes

---

## ⚙️ Additional Configuration

### SSL Certificate (HTTPS)
- ✅ Automatic! Vercel provides free SSL
- Your site will be `https://` automatically
- No configuration needed

### Environment Variables (If Needed)
If you add API keys or secrets later:
1. Vercel → Settings → Environment Variables
2. Add your variables
3. Redeploy

### Custom 404 Page
Already handled by Next.js App Router automatically!

---

## 🐛 Troubleshooting

### Build Fails on Vercel
**Check:**
- Build works locally: `npm run build`
- All dependencies in `package.json`
- No TypeScript errors: `npm run lint`

**Solution:**
```bash
# Fix locally, then push:
npm run build
git add .
git commit -m "Fix build errors"
git push origin main
```

### Domain Not Working
**Check:**
1. DNS records are correct in GoDaddy
2. Wait 10-30 minutes for propagation
3. Check [whatsmydns.net](https://www.whatsmydns.net)
4. Clear browser cache (Ctrl+Shift+R)

**Common Issues:**
- Forgot to remove old A records
- WWW CNAME pointing to wrong target
- DNS not propagated yet

### Images Not Loading
**Check:**
1. `next.config.js` has correct image domains
2. Images exist in `/public` folder
3. Image paths are correct in code

---

## 📊 Monitoring Your Site

### Vercel Analytics (Free)
1. Go to your project in Vercel
2. Click "Analytics" tab
3. See visitor stats, performance metrics

### Vercel Speed Insights (Free)
1. Enable in project settings
2. Get Core Web Vitals data
3. Monitor performance

---

## 🎯 Best Practices

### Before Pushing to GitHub:
```bash
# Test locally
npm run dev

# Check for errors
npm run lint

# Test production build
npm run build
npm start
```

### Regular Backups:
- GitHub already backs up your code
- Vercel keeps deployment history
- You can rollback any deployment in Vercel

### Version Control:
```bash
# Create feature branches for big changes
git checkout -b feature/new-section
# Make changes
git add .
git commit -m "Add new section"
git push origin feature/new-section
# Then merge via GitHub Pull Request
```

---

## 📞 Support Resources

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **GoDaddy Support:** [godaddy.com/help](https://www.godaddy.com/help)
- **GitHub Docs:** [docs.github.com](https://docs.github.com)

---

## ✅ Quick Checklist

- [ ] Git initialized and first commit made
- [ ] Code pushed to GitHub repository
- [ ] Vercel account created/logged in
- [ ] Project imported to Vercel
- [ ] First deployment successful
- [ ] Domain added in Vercel
- [ ] DNS records added in GoDaddy
- [ ] DNS propagation complete
- [ ] Site accessible via custom domain
- [ ] HTTPS working (automatic)
- [ ] Test all pages and features

---

## 🎉 Congratulations!

Your portfolio is now live! 

**Your URLs:**
- Vercel: `https://bryan-minear-portfolio.vercel.app`
- Custom Domain: `https://yourwebsite.com`

**Next Steps:**
1. Share your portfolio
2. Update content as needed
3. Add real photos to replace placeholders
4. Monitor analytics

---

**Need Help?** Open an issue in your GitHub repository or contact Vercel support.

**Last Updated:** December 31, 2024
