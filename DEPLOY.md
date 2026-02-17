# Deploy this portfolio for free (Vercel)

## 1. Push to GitHub

Create a **new repository** on GitHub:

- Go to [github.com/new](https://github.com/new)
- Repository name: e.g. `portfolio` or `monish-portfolio`
- Leave it **empty** (no README, no .gitignore)
- Click **Create repository**

Then in your terminal (from this folder):

```bash
cd /Users/monishbalusu/Portfolio

# Replace YOUR_USERNAME and YOUR_REPO with your GitHub username and repo name
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and **Sign up** (choose **Continue with GitHub**).
2. Click **Add New Project**.
3. **Import** your GitHub repo (e.g. `YOUR_USERNAME/portfolio`).
4. Leave all defaults (Vercel detects Next.js automatically).
5. Click **Deploy**.

After a minute you’ll get a live URL like `https://portfolio-xxx.vercel.app`. You can add a custom domain later in Project Settings.
