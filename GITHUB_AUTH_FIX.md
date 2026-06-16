# 🔐 Fixing GitHub Authentication Issue

## The Problem

You're seeing this error:
```
remote: Invalid username or token. Password authentication is not supported for Git operations.
fatal: Authentication failed for 'https://github.com/soumya-159/prd-generator.git/'
```

**Why?** GitHub stopped accepting passwords for Git operations in August 2021. You need to use a Personal Access Token (PAT) instead.

## Solution: Create a Personal Access Token

### Step 1: Generate a Personal Access Token

1. **Go to GitHub** and sign in
2. **Click your profile picture** (top right) → Settings
3. **Scroll down** in the left sidebar and click **"Developer settings"**
4. **Click "Personal access tokens"** → **"Tokens (classic)"**
5. **Click "Generate new token"** → **"Generate new token (classic)"**
6. **Fill in the details:**
   - Note: `PRD Generator Deployment` (or any name you prefer)
   - Expiration: Choose `90 days` or `No expiration` (for convenience)
   - **Select scopes:** Check these boxes:
     - ✅ `repo` (Full control of private repositories)
     - ✅ `workflow` (Update GitHub Action workflows)
7. **Scroll down** and click **"Generate token"**
8. **IMPORTANT:** Copy the token immediately! You won't be able to see it again.
   - It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Step 2: Use the Token to Push to GitHub

Now, let's push your code using the token:

```bash
# Navigate to your project
cd /Users/soumyamenon/Documents/Bob/prd-generator

# Remove the old remote (if you already added it)
git remote remove origin

# Add the remote with your username
git remote add origin https://github.com/soumya-159/prd-generator.git

# Try to push
git push -u origin main
```

When prompted:
- **Username:** `soumya-159`
- **Password:** Paste your Personal Access Token (not your GitHub password!)

### Step 3: Save Your Credentials (Optional but Recommended)

To avoid entering the token every time:

**On macOS:**
```bash
git config --global credential.helper osxkeychain
```

**On Windows:**
```bash
git config --global credential.helper wincred
```

**On Linux:**
```bash
git config --global credential.helper store
```

After this, Git will remember your token for future operations.

## Complete Deployment Steps

Here's the complete sequence to deploy your project:

```bash
# 1. Navigate to your project
cd /Users/soumyamenon/Documents/Bob/prd-generator

# 2. Initialize git (if not already done)
git init

# 3. Add all files
git add .

# 4. Create first commit
git commit -m "Initial commit: PRD Template Generator"

# 5. Add remote repository
git remote add origin https://github.com/soumya-159/prd-generator.git

# 6. Rename branch to main (if needed)
git branch -M main

# 7. Push to GitHub (you'll be prompted for username and token)
git push -u origin main
```

When prompted:
- Username: `soumya-159`
- Password: [Paste your Personal Access Token]

## Alternative: Using SSH (More Secure)

If you prefer SSH authentication:

### 1. Generate SSH Key

```bash
# Generate a new SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Press Enter to accept default location
# Enter a passphrase (optional but recommended)

# Start the ssh-agent
eval "$(ssh-agent -s)"

# Add your SSH key
ssh-add ~/.ssh/id_ed25519
```

### 2. Add SSH Key to GitHub

```bash
# Copy your public key
cat ~/.ssh/id_ed25519.pub
# Copy the output
```

Then:
1. Go to GitHub → Settings → SSH and GPG keys
2. Click "New SSH key"
3. Paste your key and save

### 3. Use SSH URL

```bash
# Remove HTTPS remote
git remote remove origin

# Add SSH remote
git remote add origin git@github.com:soumya-159/prd-generator.git

# Push
git push -u origin main
```

## Troubleshooting

### Issue: "Repository not found"
**Solution:** Make sure you've created the repository on GitHub first:
1. Go to github.com
2. Click "+" → "New repository"
3. Name it `prd-generator`
4. Click "Create repository"

### Issue: "Permission denied"
**Solution:** 
- Verify your username is correct: `soumya-159`
- Make sure you're using the token, not your password
- Check that your token has the `repo` scope

### Issue: Token not working
**Solution:**
1. Go back to GitHub → Settings → Developer settings → Personal access tokens
2. Delete the old token
3. Generate a new one with `repo` scope
4. Try again with the new token

### Issue: "Updates were rejected"
**Solution:**
```bash
# Pull first, then push
git pull origin main --allow-unrelated-histories
git push -u origin main
```

## Verifying Your Setup

After successful push, verify:

1. **Check GitHub:** Go to `https://github.com/soumya-159/prd-generator`
   - You should see all your files

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main` / `root`
   - Save
   - Your site will be at: `https://soumya-159.github.io/prd-generator/`

## Security Best Practices

1. **Never share your token** - treat it like a password
2. **Use token expiration** - set tokens to expire after 90 days
3. **Revoke unused tokens** - regularly clean up old tokens
4. **Use SSH for better security** - consider switching to SSH authentication
5. **Don't commit tokens** - never add tokens to your code

## Quick Reference

**Your GitHub Profile:** https://github.com/soumya-159  
**Your Repository:** https://github.com/soumya-159/prd-generator  
**Your Live Site (after deployment):** https://soumya-159.github.io/prd-generator/

## Need More Help?

- [GitHub Token Documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [GitHub SSH Documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [Git Credential Helper](https://git-scm.com/docs/gitcredentials)

---

**Once you've successfully pushed, your project will be live on GitHub!** 🎉