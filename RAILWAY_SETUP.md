# Railway Setup Guide

Railway is a **modern deployment platform** that handles both your database and backend server. It's perfect for this project because:

- ✅ Free tier for hobby projects
- ✅ Affordable pay-as-you-go pricing ($0.10/hour = ~$7/month minimum)
- ✅ Automatic backups and 99.9% uptime
- ✅ One-click deployments
- ✅ No DevOps knowledge required

---

## Step 1: Create Railway Account (2 min)

1. Go to **https://railway.app**
2. Click **"Create Account"** (sign up with GitHub recommended)
3. Create a new project

---

## Step 2: Create PostgreSQL Database (3 min)

1. In your Railway project, click **"+ Add"**
2. Select **"Database"** → **"PostgreSQL"**
3. Railway creates the database automatically ✅
4. Click on the PostgreSQL plugin
5. Go to **"Connect"** tab
6. Copy the full connection string (looks like: `postgresql://user:password@host:port/railway`)

---

## Step 3: Set Up Local Backend

1. **Open PowerShell** in `C:\Temp\Claude Project 1\backend`

2. **Copy environment file:**
   ```powershell
   copy .env.example .env
   ```

3. **Edit `.env`** and paste your Railway PostgreSQL connection string:
   ```
   DATABASE_URL=postgresql://postgres:xxxxx@xxxxx.railway.app:5432/railway
   ```

4. **Create the database tables:**
   ```powershell
   # Install psql (PostgreSQL client) or use Railway's web interface
   # Option A: Use Railway web console to run schema.sql
   #   - In Railway, click PostgreSQL plugin → Query tab
   #   - Paste contents of schema.sql
   
   # Option B: Install PostgreSQL and run locally
   psql -U postgres -h your-host -d railway < schema.sql
   ```

5. **Install dependencies:**
   ```powershell
   npm install
   ```

6. **Test locally:**
   ```powershell
   npm run dev
   ```

   You should see:
   ```
   ✅ Database connected
   🚀 Server running on port 3000
   ```

---

## Step 4: Deploy Backend to Railway (5 min)

### Option A: Deploy with GitHub (Recommended)

1. **Create a GitHub repo** for your project
2. **Push code to GitHub:**
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/marketplace-app.git
   git push -u origin main
   ```

3. **In Railway dashboard:**
   - Click **"+ New Project"**
   - Select **"Deploy from GitHub"**
   - Choose your `marketplace-app` repo
   - Railway auto-deploys on every push! 🚀

4. **Add environment variables:**
   - In Railway project settings
   - Go to **Variables** tab
   - Add your `.env` variables:
     ```
     DATABASE_URL=postgresql://...
     JWT_SECRET=your_secret_key
     NODE_ENV=production
     FRONTEND_URL=https://your-frontend.vercel.app
     ```

5. **Get your backend URL:**
   - Railway gives you a public URL automatically
   - It looks like: `https://marketplace-backend.up.railway.app`

### Option B: Deploy with Railway CLI (Alternative)

```powershell
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Deploy
railway up
```

---

## Step 5: Deploy Frontend to Vercel (5 min)

1. **Create Vercel account:** https://vercel.com (sign up with GitHub)

2. **Push frontend to GitHub** (same repo or separate):
   ```powershell
   cd ../frontend
   git add .
   git commit -m "Add frontend"
   git push
   ```

3. **In Vercel dashboard:**
   - Click **"Add New"** → **"Project"**
   - Import your GitHub repo
   - Set root directory: `frontend`
   - Environment variables:
     ```
     VITE_API_URL=https://your-backend.up.railway.app
     ```
   - Click **"Deploy"** ✅

4. **Get frontend URL:**
   - Vercel gives you a URL like: `https://marketplace-app.vercel.app`

---

## Step 6: Connect Frontend to Backend

**Update `frontend/src/main.jsx`** to use your Railway backend URL:

```javascript
// Add at top
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

// When making API calls, use:
fetch(`${API_URL}/offers`)
```

Or create a config file `frontend/src/config.js`:

```javascript
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
```

Then import it:
```javascript
import { API_URL } from './config'

fetch(`${API_URL}/offers`)
```

---

## Pricing Summary

| Service | Free Tier | Price at Scale |
|---------|-----------|-----------------|
| **Railway (Backend + DB)** | $5/month | $0.10/hour + usage |
| **Vercel (Frontend)** | Free | Free (unless >100GB/mo bandwidth) |
| **Stripe (Payments)** | Free | 2.9% + $0.30 per transaction |
| **Cloudflare R2 (Storage)** | Free | $0.015/GB stored |
| **Total Monthly** | ~$5 | ~$50-200 at 1M users |

---

## Common Issues

**"Can't connect to database"**
- Make sure DATABASE_URL is correct in `.env`
- Check that Railway PostgreSQL plugin is running
- Test connection: `psql postgresql://...`

**"Frontend can't reach backend"**
- Add CORS headers to backend
- Check that FRONTEND_URL is set in `.env`
- Verify backend is deployed and running

**"Deployment failed"**
- Check Railway logs (click project → "Logs" tab)
- Make sure `package.json` has correct scripts
- Verify all dependencies are in `package.json`

---

## Next Steps

1. ✅ Set up Railway PostgreSQL
2. ✅ Deploy backend to Railway
3. ✅ Deploy frontend to Vercel
4. ⏳ Implement authentication (next phase)
5. ⏳ Build offer creation & storage
6. ⏳ Add messaging & payments

---

## Commands Cheat Sheet

```powershell
# Local development
npm install              # Install dependencies
npm run dev             # Start backend/frontend

# Railway CLI
railway login           # Login to Railway
railway up              # Deploy to Railway
railway logs            # View logs
railway variables       # Manage environment variables

# Git
git init                # Initialize repo
git add .               # Stage files
git commit -m "msg"     # Commit
git push                # Push to GitHub

# Database
psql -h host -U user -d dbname < schema.sql   # Run SQL file
```

---

## Support

- **Railway Docs**: https://docs.railway.app
- **Vercel Docs**: https://vercel.com/docs
- **PostgreSQL Docs**: https://www.postgresql.org/docs

Ready to deploy? 🚀
