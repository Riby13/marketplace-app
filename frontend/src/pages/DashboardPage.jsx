import { useState } from 'react'
import './DashboardPage.css'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('active')

  const offers = [
    {
      id: 1,
      type: 'sell',
      title: 'Used Mountain Bike',
      idealPrice: 400,
      minPrice: 300,
      status: 'active',
      responses: 3,
      createdAt: '2024-04-10'
    },
    {
      id: 2,
      type: 'buy',
      title: 'Vintage Record Player',
      idealPrice: 50,
      maxPrice: 100,
      status: 'responded',
      responses: 1,
      createdAt: '2024-04-08'
    },
    {
      id: 3,
      type: 'sell',
      title: 'Gaming Laptop',
      idealPrice: 800,
      minPrice: 600,
      status: 'agreed',
      responses: 2,
      createdAt: '2024-04-05'
    },
    {
      id: 4,
      type: 'buy',
      title: 'Used Coffee Table',
      idealPrice: 75,
      maxPrice: 150,
      status: 'completed',
      responses: 5,
      createdAt: '2024-03-28'
    }
  ]

  const getStatusColor = (status) => {
    const colors = {
      'active': '#28a745',
      'responded': '#ffc107',
      'agreed': '#17a2b8',
      'completed': '#6c757d',
      'expired': '#dc3545'
    }
    return colors[status] || '#999'
  }

  const filteredOffers = offers.filter(offer => {
    if (activeTab === 'active') return offer.status === 'active'
    if (activeTab === 'responded') return ['responded', 'agreed'].includes(offer.status)
    if (activeTab === 'completed') return offer.status === 'completed'
    return true
  })

  return (
    <div className="dashboard-page">
      <h1>My Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">6</div>
          <div className="stat-label">Total Offers</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">3</div>
          <div className="stat-label">Active Offers</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">2</div>
          <div className="stat-label">In Negotiation</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">1</div>
          <div className="stat-label">Completed</div>
        </div>
      </div>

      <div className="offers-section">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'active' ? 'active' : ''}`}
            onClick={() => setActiveTab('active')}
          >
            Active
          </button>
          <button
            className={`tab ${activeTab === 'responded' ? 'active' : ''}`}
            onClick={() => setActiveTab('responded')}
          >
            Negotiations
          </button>
          <button
            className={`tab ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed
          </button>
        </div>

        <div className="offers-list">
          {filteredOffers.length === 0 ? (
            <div className="empty-state">
              <p>No offers in this category</p>
            </div>
          ) : (
            filteredOffers.map(offer => (
              <div key={offer.id} className="offer-row">
                <div className="offer-info">
                  <div className="offer-type">
                    {offer.type === 'sell' ? '📤' : '📥'}
                  </div>
                  <div className="offer-details">
                    <h3>{offer.title}</h3>
                    <p className="offer-date">Created: {offer.createdAt}</p>
                  </div>
                </div>

                <div className="offer-pricing">
                  {offer.type === 'sell' ? (
                    <div>
                      <p className="price-label">Ideal / Min</p>
                      <p className="price-value">${offer.idealPrice} / ${offer.minPrice}</p>
                    </div>
                  ) : (
                    <div>
                      <p className="price-label">Dream / Max</p>
                      <p className="price-value">${offer.idealPrice} / ${offer.maxPrice}</p>
                    </div>
                  )}
                </div>

                <div className="offer-responses">
                  <p className="response-count">{offer.responses}</p>
                  <p className="response-label">Response{offer.responses !== 1 ? 's' : ''}</p>
                </div>

                <div className="offer-status">
                  <span
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(offer.status) }}
                  >
                    {offer.status.charAt(0).toUpperCase() + offer.status.slice(1)}
                  </span>
                </div>

                <div className="offer-actions">
                  <button className="button button-primary">
                    View
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
