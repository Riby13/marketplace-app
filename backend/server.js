import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { Pool } from 'pg';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new SocketIOServer(httpServer, {
  cors: { origin: process.env.FRONTEND_URL || 'http://localhost:5173', methods: ['GET', 'POST'] }
});

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('✅ Database connected');
  }
});

// Routes (placeholder)
app.get('/', (req, res) => {
  res.json({ message: 'Marketplace API running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Auth routes (skeleton)
app.post('/auth/register', (req, res) => {
  res.json({ message: 'Register endpoint - to be implemented' });
});

app.post('/auth/login', (req, res) => {
  res.json({ message: 'Login endpoint - to be implemented' });
});

// Offers routes (skeleton)
app.get('/offers', (req, res) => {
  res.json({ message: 'Get all offers - to be implemented' });
});

app.post('/offers', (req, res) => {
  res.json({ message: 'Create offer - to be implemented' });
});

// Socket.io for real-time messaging
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
