# 🚀 GitHub Deployment Guide

This guide will walk you through deploying your PRD Template Generator to GitHub and making it publicly accessible via GitHub Pages.

## Prerequisites

- A GitHub account (create one at [github.com](https://github.com) if you don't have one)
- Git installed on your computer
- Basic familiarity with command line/terminal

## Step 1: Create a GitHub Repository

1. **Go to GitHub** and sign in to your account
2. **Click the "+" icon** in the top right corner and select "New repository"
3. **Fill in the repository details:**
   - Repository name: `prd-generator` (or any name you prefer)
   - Description: "A web tool to create professional Product Requirements Documents"
   - Choose "Public" (so others can see and use it)
   - ✅ Check "Add a README file" (we'll replace it with ours)
   - Choose a license: MIT License (recommended for open source)
4. **Click "Create repository"**

## Step 2: Initialize Git in Your Project

Open your terminal/command prompt and navigate to the prd-generator directory:

```bash
cd /Users/soumyamenon/Documents/Bob/prd-generator
```

Initialize Git and connect to your GitHub repository:

```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Create your first commit
git commit -m "Initial commit: PRD Template Generator"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/prd-generator.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click on "Settings"** (in the repository menu)
3. **Scroll down** to the "Pages" section in the left sidebar
4. **Under "Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. **Click "Save"**
6. **Wait a few minutes** for GitHub to build your site
7. **Your site will be live** at: `https://YOUR_USERNAME.github.io/prd-generator/`

## Step 4: Update the README

Update the GitHub link in your README.md file:

1. Open `README.md`
2. Find the line with `https://github.com/yourusername/prd-generator`
3. Replace `yourusername` with your actual GitHub username
4. Save the file
5. Commit and push the change:

```bash
git add README.md
git commit -m "Update GitHub link in README"
git push
```

## Step 5: Customize and Share

### Update the Footer Link

1. Open `index.html`
2. Find the footer section (near the bottom)
3. Update the GitHub link with your username:
   ```html
   <a href="https://github.com/YOUR_USERNAME/prd-generator" target="_blank">View on GitHub</a>
   ```
4. Save and push:
   ```bash
   git add index.html
   git commit -m "Update footer GitHub link"
   git push
   ```

### Add a Custom Domain (Optional)

If you have a custom domain:

1. In your repository settings, under "Pages"
2. Enter your custom domain in the "Custom domain" field
3. Follow GitHub's instructions to configure DNS

## Step 6: Share Your Project

Now you can share your project:

- **Live Site:** `https://YOUR_USERNAME.github.io/prd-generator/`
- **Repository:** `https://github.com/YOUR_USERNAME/prd-generator`

### Add to Your Portfolio

Add this project to your:
- LinkedIn profile (Projects section)
- Resume/CV
- Personal website
- Product management portfolio

### Promote Your Project

1. **Share on LinkedIn** with a post about why you built it
2. **Tweet about it** and tag #ProductManagement #OpenSource
3. **Post in PM communities** (Reddit, Slack groups, etc.)
4. **Add topics to your repo** on GitHub: `product-management`, `prd`, `documentation`, `web-app`

## Making Updates

Whenever you want to update your project:

```bash
# Make your changes to the files
# Then commit and push:

git add .
git commit -m "Description of your changes"
git push
```

GitHub Pages will automatically update your live site within a few minutes.

## Common Issues and Solutions

### Issue: Site not loading after enabling GitHub Pages
**Solution:** Wait 5-10 minutes. GitHub Pages can take time to build initially.

### Issue: Changes not showing on live site
**Solution:** 
1. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Wait a few minutes for GitHub to rebuild
3. Check that you pushed your changes: `git status`

### Issue: Git push rejected
**Solution:**
```bash
git pull origin main --rebase
git push
```

### Issue: Forgot to replace YOUR_USERNAME
**Solution:** Update the remote URL:
```bash
git remote set-url origin https://github.com/YOUR_ACTUAL_USERNAME/prd-generator.git
```

## Next Steps

### Enhance Your Project

1. **Add GitHub Actions** for automated testing
2. **Create issues** for feature requests and bugs
3. **Accept contributions** from other developers
4. **Add a CHANGELOG.md** to track versions
5. **Create releases** for major versions

### Get Feedback

1. Share with fellow PMs and ask for feedback
2. Post in product management communities
3. Ask for code reviews from developers
4. Iterate based on user feedback

### Build Your Brand

1. Write a blog post about building this tool
2. Create a demo video and post on YouTube
3. Present it in PM meetups or conferences
4. Add it to product management tool directories

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [Markdown Guide](https://www.markdownguide.org/)
- [Open Source Guide](https://opensource.guide/)

## Support

If you encounter issues:
1. Check the [GitHub Pages troubleshooting guide](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)
2. Search for solutions on Stack Overflow
3. Ask in GitHub Discussions or Issues

---

**Congratulations!** 🎉 You've successfully deployed your first project to GitHub!

This is a great addition to your portfolio and demonstrates your ability to:
- Build practical tools for product management
- Work with web technologies
- Use version control (Git)
- Deploy and maintain open source projects

Keep building and learning! 🚀