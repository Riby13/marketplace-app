-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  profile_image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Offers table (covers both Sell and Buy offers)
CREATE TABLE offers (
  id SERIAL PRIMARY KEY,
  created_by INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(10) NOT NULL CHECK (type IN ('sell', 'buy')),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(50),
  -- Pricing
  ideal_price DECIMAL(10, 2) NOT NULL,
  min_price DECIMAL(10, 2) NOT NULL, -- For sell offers
  max_price DECIMAL(10, 2) NOT NULL, -- For buy offers
  -- Terms
  pickup_delivery_options VARCHAR(255),
  payment_terms VARCHAR(255),
  offer_expiry_date TIMESTAMP,
  auto_accept BOOLEAN DEFAULT FALSE,
  auto_accept_price DECIMAL(10, 2), -- If auto-accepting first offer
  -- Status
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'responded', 'agreed', 'completed', 'expired', 'cancelled')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Responses table (one response per user per offer)
CREATE TABLE responses (
  id SERIAL PRIMARY KEY,
  offer_id INTEGER NOT NULL REFERENCES offers(id) ON DELETE CASCADE,
  responder_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  proposed_price DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(offer_id, responder_id) -- One response per user per offer
);

-- Messages table
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  offer_id INTEGER NOT NULL REFERENCES offers(id) ON DELETE CASCADE,
  sender_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Agreements table
CREATE TABLE agreements (
  id SERIAL PRIMARY KEY,
  offer_id INTEGER NOT NULL REFERENCES offers(id) ON DELETE CASCADE,
  buyer_id INTEGER NOT NULL REFERENCES users(id),
  seller_id INTEGER NOT NULL REFERENCES users(id),
  final_price DECIMAL(10, 2) NOT NULL,
  terms VARCHAR(255),
  status VARCHAR(20) DEFAULT 'pending_payment' CHECK (status IN ('pending_payment', 'completed', 'cancelled')),
  signature_buyer VARCHAR(255),
  signature_seller VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Payments table
CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  agreement_id INTEGER NOT NULL REFERENCES agreements(id) ON DELETE CASCADE,
  amount DECIMAL(10, 2) NOT NULL,
  method VARCHAR(20) NOT NULL CHECK (method IN ('direct', 'escrow')),
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  stripe_payment_id VARCHAR(255),
  escrow_released BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for performance
CREATE INDEX idx_offers_created_by ON offers(created_by);
CREATE INDEX idx_offers_status ON offers(status);
CREATE INDEX idx_responses_offer_id ON responses(offer_id);
CREATE INDEX idx_responses_responder_id ON responses(responder_id);
CREATE INDEX idx_messages_offer_id ON messages(offer_id);
CREATE INDEX idx_agreements_buyer_id ON agreements(buyer_id);
CREATE INDEX idx_agreements_seller_id ON agreements(seller_id);
CREATE INDEX idx_payments_agreement_id ON payments(agreement_id);
