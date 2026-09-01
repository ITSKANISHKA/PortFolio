# Kanishka — Personal Portfolio Website

A modern, highly professional AI/ML and Backend Software Engineer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 How to Upload to GitHub & Deploy Live

Follow these simple steps to push your portfolio to GitHub and host it live on the web for free.

---

### Step 1: Open Terminal in your Project Folder
```bash
cd /Users/kanishka/.gemini/antigravity/scratch/kanishka-portfolio
```

---

### Step 2: Initialize Git & Commit Your Code

Run the following commands in your terminal:

```bash
# 1. Initialize git
git init

# 2. Add all project files
git add .

# 3. Commit your code
git commit -m "Initial commit - Kanishka Personal Portfolio"
```

---

### Step 3: Push to GitHub

1. Go to [GitHub New Repository](https://github.com/new).
2. Set the **Repository Name** as `kanishka-portfolio` (or `portfolio`).
3. Leave it as **Public** and **do NOT check** "Initialize with README".
4. Click **Create repository**.
5. Copy the commands shown on GitHub under **"…or push an existing repository from the command line"**, which will look like:

```bash
git branch -M main
git remote add origin https://github.com/Kanishka2004/kanishka-portfolio.git
git push -u origin main
```

---

### Step 4: Deploy Live for Free

#### Option A: Vercel (Recommended — Easiest & Fastest ⚡)
1. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
2. Click **Add New...** -> **Project**.
3. Import your `kanishka-portfolio` repository.
4. Framework Preset will automatically be detected as **Vite**.
5. Click **Deploy**.
6. In ~30 seconds, your site will be live at `https://kanishka-portfolio.vercel.app`!

---

#### Option B: Netlify
1. Go to [Netlify](https://netlify.com) and log in with GitHub.
2. Click **Add new site** -> **Import an existing project**.
3. Choose **GitHub** and select `kanishka-portfolio`.
4. Build command: `npm run build`, Publish directory: `dist`.
5. Click **Deploy kanishka-portfolio**.

---

#### Option C: GitHub Pages
If you want to host directly on GitHub Pages (`https://kanishka2004.github.io/kanishka-portfolio`):
1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
2. Add these scripts to your `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run deploy:
   ```bash
   npm run deploy
   ```
