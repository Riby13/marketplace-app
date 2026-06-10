# Marketplace App - Negotiation Platform

A web application where users can create buy/sell offers, negotiate prices, and reach deals with automatic pricing logic.

## Project Structure

```
marketplace-app/
├── backend/          # Express.js API server
│   ├── server.js
│   ├── schema.sql
│   ├── package.json
│   └── .env.example
└── frontend/         # React app
    ├── src/
    │   ├── pages/
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Quick Start

### 1. Set Up Database (Railway - Free)

1. Go to [railway.app](https://railway.app) and sign up (free with GitHub)
2. Create a new project
3. Click **"+ Add"** → **"Database"** → **"PostgreSQL"** (Railway creates it instantly)
4. Click PostgreSQL → **"Connect"** tab → Copy the connection string
5. Paste in your backend `.env` file as `DATABASE_URL`
6. Use the Railway web console (Query tab) to paste `backend/schema.sql` and run it

### 2. Set Up Backend

```bash
cd backend

# Create .env file
cp .env.example .env

# Add your database URL to .env
# DATABASE_URL=postgresql://your_user:password@your_host:5432/your_db
# (Edit the file and paste your Supabase connection string)

# Install dependencies
npm install

# Start the server
npm run dev
```

The backend will run on `http://localhost:3000`

### 3. Set Up Frontend

In a **new terminal**:

```bash
cd frontend

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The frontend will run on `http://localhost:5173`

### 4. Open in Browser

Visit: **http://localhost:5173**

You should see the landing page! 🎉
