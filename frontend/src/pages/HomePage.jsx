import { useNavigate } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="home-page">
      <div className="hero">
        <h1>Welcome to Marketplace</h1>
        <p>Buy and sell items through direct negotiation</p>
      </div>

      <div className="actions">
        <div className="action-card">
          <h2>📤 Create an Offer to Sell</h2>
          <p>List an item you want to sell and set your pricing terms</p>
          <button className="button button-primary" onClick={() => navigate('/create-offer')}>
            Create Sell Offer
          </button>
        </div>

        <div className="action-card">
          <h2>📥 Create an Offer to Buy</h2>
          <p>Make an offer for something you want to buy</p>
          <button className="button button-primary" onClick={() => navigate('/create-offer')}>
            Create Buy Offer
          </button>
        </div>

        <div className="action-card">
          <h2>👀 Browse Offers</h2>
          <p>See what other users are offering</p>
          <button className="button button-primary">
            Browse All Offers
          </button>
        </div>

        <div className="action-card">
          <h2>📋 My Dashboard</h2>
          <p>Track your active and completed offers</p>
          <button className="button button-primary" onClick={() => navigate('/dashboard')}>
            Go to Dashboard
          </button>
        </div>
      </div>

      <div className="auth-section">
        <p>New to Marketplace?</p>
        <button className="button button-secondary" onClick={() => navigate('/register')}>
          Sign Up
        </button>
        <button className="button button-secondary" onClick={() => navigate('/login')}>
          Log In
        </button>
      </div>
    </div>
  )
}
