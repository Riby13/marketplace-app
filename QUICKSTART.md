# Quick Start (5 minutes)

## 1. Database Setup with Railway (2 min)

1. Go to https://railway.app → Sign up (free, use GitHub)
2. Create a new project → Click **"+ Add"** → **"Database"** → **"PostgreSQL"**
3. Railway creates it instantly! Copy the connection string from **"Connect"** tab
4. Use Railway's **Query** tab to paste `backend/schema.sql` and run it

See **RAILWAY_SETUP.md** for detailed instructions.

## 2. Backend Setup (1 min)

```powershell
cd backend
copy .env.example .env
# Edit .env and paste your Railway database URL
npm install
npm run dev
```

✅ Backend running on http://localhost:3000

## 3. Frontend Setup (1 min)

Open a **new terminal**:

```bash
cd frontend
npm install
npm run dev
```

✅ Frontend running on http://localhost:5173

## 4. Test It!

Open http://localhost:5173 in your browser

**What you can do right now:**
- 👀 Browse the UI (all pages work)
- 📝 Fill out forms
- 🔄 Navigate between pages
- 📱 Test on mobile (responsive)

**What's not connected yet:**
- No data saves (backend is skeleton)
- No auth (forms don't work)
- No real messaging
- No payments

---

## Next: Implement Features

Pick one and we'll build it:
1. **User Authentication** — Login/Register
2. **Create Offers** — Save offers to database
3. **Auto-Pricing Logic** — Calculate market price
4. **Messaging** — Real-time chat (WebSockets)
5. **Payments** — Stripe integration

What's your priority?
