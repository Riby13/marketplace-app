# Architecture & Deployment Strategy

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    END USERS                                 │
│              (Web & Mobile Browsers)                         │
└────────────────────┬────────────────────────────────────────┘
                     │ HTTPS
┌────────────────────▼────────────────────────────────────────┐
│  VERCEL (Frontend)                                          │
│  ├─ React + Vite                                            │
│  ├─ URL: https://marketplace.vercel.app                     │
│  ├─ Hosting: Global CDN (fast everywhere)                   │
│  ├─ Cost: Free tier (or $20/mo pro)                         │
│  └─ Deployments: Auto on every GitHub push                  │
└────────────────────┬────────────────────────────────────────┘
                     │ API Calls (REST + WebSocket)
┌────────────────────▼────────────────────────────────────────┐
│  RAILWAY (Backend + Database)                              │
│  ├─ Node.js + Express Server                               │
│  │  ├─ URL: https://marketplace-api.up.railway.app         │
│  │  ├─ Port: 3000 → 8080 (Railway auto-assigns)            │
│  │  ├─ Cost: $5/month minimum, ~$0.10/hour usage           │
│  │  └─ Deployments: Auto on GitHub push or railway cli     │
│  │                                                           │
│  └─ PostgreSQL Database                                    │
│     ├─ Shared tier (MVP)                                    │
│     ├─ Automatic backups                                    │
│     ├─ 99.9% uptime SLA                                     │
│     └─ Cost: Included in Railway subscription               │
└────────────────────┬────────────────────────────────────────┘
                     │ SQL Queries
         ┌───────────▼───────────┐
         │  PostgreSQL Cluster   │
         │  (Encrypted at rest)  │
         └───────────────────────┘
```

---

## Technology Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Frontend** | React 18 + Vite | Fast, modern, component-based |
| **Backend** | Node.js + Express | JavaScript, event-driven, scalable |
| **Database** | PostgreSQL | ACID compliance, relational data, reliable |
| **Hosting** | Railway (backend) + Vercel (frontend) | Easy deployment, good pricing, auto-scaling |
| **Real-time** | Socket.io | WebSocket messaging, fallback to polling |
| **Auth** | JWT tokens (homemade) | Secure, stateless, scalable |
| **Payments** | Stripe API | PCI-compliant, handles escrow, webhooks |

---

## Deployment Pipeline

### Local Development
```
Code → npm run dev → Backend on localhost:3000
                  → Frontend on localhost:5173
                  → PostgreSQL (Railway, local tunnel)
```

### Production Deployment
```
GitHub Push → Railway (backend auto-deploys)
           → Vercel (frontend auto-deploys)
           → Tests run automatically
           → No manual steps needed!
```

---

## Data Flow (Example: Create Offer)

```
1. User clicks "Create Offer"
   └─> React form component

2. User submits form
   └─> JavaScript validation (frontend)

3. Frontend sends: POST /offers
   └─> HTTPS to https://marketplace-api.up.railway.app/offers
   └─> Request body: { title, price, category, ... }

4. Backend receives request
   └─> Express route handler
   └─> Validates data
   └─> Hashes sensitive fields
   └─> Generates SQL INSERT

5. PostgreSQL executes INSERT
   └─> Data saved to Railway database
   └─> Automatic backup triggered
   └─> Row returns with ID

6. Backend returns response
   └─> Status 201 Created
   └─> JSON: { id, ...offer_data }

7. Frontend receives response
   └─> Updates React state
   └─> Shows success message
   └─> Redirects to offer detail page

8. Real-time updates (future)
   └─> Socket.io broadcasts to other users
   └─> "New offer created!" notification
```

---

## Security Layers

| Layer | Protection |
|-------|-----------|
| **Network** | HTTPS/TLS encryption (Vercel + Railway provide automatically) |
| **Authentication** | JWT tokens, HTTP-only cookies (coming soon) |
| **Authorization** | User can only see/edit their own offers |
| **Database** | PostgreSQL user with limited privileges, encrypted connections |
| **Secrets** | Environment variables (never in code), Railway vault |
| **Payments** | Stripe handles encryption, PCI compliance |

---

## Scaling Path

### Phase 1: MVP (Current)
- **Users**: 0-100 (hobby use)
- **Database**: Railway shared PostgreSQL
- **Backend**: 1 node on Railway
- **Cost**: ~$5-10/month

### Phase 2: Early Traction
- **Users**: 100-10,000
- **Database**: Railway private PostgreSQL (isolated)
- **Backend**: 2-3 Railway nodes (auto-scaling)
- **Caching**: Add Redis for sessions
- **Cost**: ~$20-50/month

### Phase 3: Growth
- **Users**: 10K-1M
- **Database**: Managed AWS RDS or Railway enterprise
- **Backend**: Kubernetes cluster or Railway custom
- **Cache**: Redis cluster
- **Storage**: S3/Cloudflare R2 for photos
- **Cost**: ~$200-1,000/month

### Phase 4: Scale
- **Users**: 1M+
- **Infrastructure**: Multi-region deployment
- **Database**: Replication, read replicas
- **CDN**: Cloudflare global edge
- **Cost**: Custom enterprise pricing

---

## Environment Variables

### Development (.env local)
```
DATABASE_URL=postgresql://user:pass@localhost:5432/marketplace
NODE_ENV=development
JWT_SECRET=dev_secret_change_me
STRIPE_SECRET_KEY=sk_test_123
STRIPE_PUBLISHABLE_KEY=pk_test_123
FRONTEND_URL=http://localhost:5173
```

### Production (Railway)
```
DATABASE_URL=postgresql://postgres:xxx@xxx.railway.app:5432/railway
NODE_ENV=production
JWT_SECRET=<long_random_string>
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_PUBLISHABLE_KEY=pk_live_xxx
FRONTEND_URL=https://marketplace.vercel.app
```

---

## Monitoring & Maintenance

### Railway Dashboard
- **Logs**: Real-time server logs
- **Metrics**: CPU, memory, network usage
- **Alerts**: Email on deployment failures

### Vercel Dashboard
- **Deployments**: View all releases
- **Analytics**: User traffic, performance
- **Edge Functions**: Serverless functions (future)

### PostgreSQL Backups
- **Automatic**: Daily snapshots
- **Retention**: 30 days
- **Restore**: One-click restore from Railway dashboard

---

## Cost Breakdown

| Service | Free Tier | Growth | Scale |
|---------|-----------|--------|-------|
| Railway Backend | $0 | $50-100 | $200-500 |
| Railway Database | included | included | $50-200 |
| Vercel Frontend | Free | Free | Free-20 |
| Stripe | Free | 2.9% + $0.30 | 2.9% + $0.30 |
| Domain | $12/year | $12/year | $12/year |
| **Monthly** | ~$5 | ~$50-100 | ~$250-700 |

*Costs scale with revenue, not user count (after initial tiers)*

---

## What's Next?

1. ✅ **Architecture finalized** (Railway + Vercel)
2. ⏳ **Local development setup** (follow QUICKSTART.md)
3. ⏳ **Implement authentication**
4. ⏳ **Build offer CRUD**
5. ⏳ **Add auto-pricing logic**
6. ⏳ **Deploy to production**
7. ⏳ **Add messaging**
8. ⏳ **Stripe integration**

---

## Useful Links

- **Railway Docs**: https://docs.railway.app
- **Vercel Docs**: https://vercel.com/docs
- **PostgreSQL Docs**: https://www.postgresql.org/docs
- **Node.js Docs**: https://nodejs.org/docs
- **Express Docs**: https://expressjs.com
- **React Docs**: https://react.dev
- **Stripe Docs**: https://stripe.com/docs

---

## Emergency Contacts / Recovery

### Database goes down
1. Railway automatically restarts
2. Check Railway status: https://status.railway.app
3. Restore from backup (1-click in Railway dashboard)

### Backend deployment fails
1. Railway keeps previous version running
2. Check logs in Railway dashboard
3. Fix code, push to GitHub, auto-redeploy

### Frontend won't load
1. Check Vercel deployment status
2. Clear browser cache (Ctrl+Shift+Delete)
3. Check network tab in DevTools

---

**Ready to deploy? Follow RAILWAY_SETUP.md next!** 🚀
