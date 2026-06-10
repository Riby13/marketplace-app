import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './OfferDetailPage.css'

export default function OfferDetailPage() {
  const { id } = useParams()
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Seller', content: 'Hi, interested in this item!' },
    { id: 2, sender: 'You', content: 'What\'s the lowest you\'d go?' }
  ])
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: 'You',
        content: newMessage
      }])
      setNewMessage('')
    }
  }

  return (
    <div className="offer-detail-page">
      <div className="offer-container">
        <div className="offer-main">
          <h1>Used Mountain Bike</h1>
          <p className="offer-meta">Posted 2 days ago • ID: {id}</p>

          <div className="offer-card">
            <h2>Offer Details</h2>
            <div className="details-grid">
              <div>
                <strong>Type:</strong> <span>Sell Offer</span>
              </div>
              <div>
                <strong>Ideal Price:</strong> <span>$400</span>
              </div>
              <div>
                <strong>Min Price:</strong> <span>$300</span>
              </div>
              <div>
                <strong>Category:</strong> <span>Sports & Outdoors</span>
              </div>
              <div>
                <strong>Pickup:</strong> <span>Local pickup only</span>
              </div>
              <div>
                <strong>Payment:</strong> <span>Cash or Stripe</span>
              </div>
            </div>
          </div>

          <div className="offer-card">
            <h2>Description</h2>
            <p>
              Great condition mountain bike, barely used. 21-speed, 26" wheels.
              Comes with helmet. Perfect for weekend rides.
            </p>
          </div>
        </div>

        <div className="offer-sidebar">
          <div className="pricing-card">
            <h3>Market Price</h3>
            <div className="market-price">$350</div>
            <p className="price-note">Based on your pricing range</p>
            <button className="button button-primary button-full">
              Make an Offer
            </button>
          </div>

          <div className="offer-card">
            <h3>Auto-Deal Logic</h3>
            <div className="auto-deal-info">
              <p><strong>Your ideal:</strong> $400</p>
              <p><strong>Their min:</strong> $300</p>
              <p><strong>Market price:</strong> $350</p>
              <p className="auto-deal-note">
                If you offer $350 or higher, deal auto-closes!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="messaging-section">
        <h2>Messages</h2>
        <div className="messages-list">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
              <strong>{msg.sender}</strong>
              <p>{msg.content}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSendMessage} className="message-form">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your response..."
            required
          />
          <button type="submit" className="button button-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
