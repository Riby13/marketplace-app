import { useState } from 'react'
import './CreateOfferPage.css'

export default function CreateOfferPage() {
  const [offerType, setOfferType] = useState('sell') // sell or buy
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    idealPrice: '',
    minPrice: '',
    maxPrice: '',
    pickupDelivery: '',
    paymentTerms: '',
    expiryDays: 7,
    offerTerms: 'one-time' // one-time, accepting-x-days-best, accepting-x-days-first
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Create offer:', { type: offerType, ...formData })
    alert('Offer creation coming soon!')
  }

  return (
    <div className="create-offer-page">
      <h1>Create an Offer</h1>

      <div className="offer-type-selector">
        <label>
          <input
            type="radio"
            value="sell"
            checked={offerType === 'sell'}
            onChange={(e) => setOfferType(e.target.value)}
          />
          📤 Create Sell Offer
        </label>
        <label>
          <input
            type="radio"
            value="buy"
            checked={offerType === 'buy'}
            onChange={(e) => setOfferType(e.target.value)}
          />
          📥 Create Buy Offer
        </label>
      </div>

      <form onSubmit={handleSubmit} className="offer-form">
        {/* Basic Info */}
        <section className="form-section">
          <h2>Offer Details</h2>

          <div className="form-group">
            <label htmlFor="title">Item Title / Description</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="e.g., Used Mountain Bike"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="furniture">Furniture</option>
              <option value="sports">Sports & Outdoors</option>
              <option value="clothing">Clothing</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe the item in detail..."
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
        </section>

        {/* Pricing */}
        <section className="form-section">
          <h2>Pricing</h2>

          {offerType === 'sell' ? (
            <>
              <div className="form-group">
                <label htmlFor="idealPrice">Price I'd love to get ($)</label>
                <input
                  type="number"
                  id="idealPrice"
                  name="idealPrice"
                  placeholder="Your ideal price"
                  step="0.01"
                  min="0"
                  value={formData.idealPrice}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="minPrice">Lowest possible price ($)</label>
                <input
                  type="number"
                  id="minPrice"
                  name="minPrice"
                  placeholder="Rock bottom price"
                  step="0.01"
                  min="0"
                  value={formData.minPrice}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="idealPrice">My steal of a deal price ($)</label>
                <input
                  type="number"
                  id="idealPrice"
                  name="idealPrice"
                  placeholder="Your dream price"
                  step="0.01"
                  min="0"
                  value={formData.idealPrice}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="maxPrice">Max possible price I'd pay ($)</label>
                <input
                  type="number"
                  id="maxPrice"
                  name="maxPrice"
                  placeholder="Your max budget"
                  step="0.01"
                  min="0"
                  value={formData.maxPrice}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}
        </section>

        {/* Terms */}
        <section className="form-section">
          <h2>Offer Terms</h2>

          <div className="form-group">
            <label htmlFor="offerTerms">How should this offer work?</label>
            <select
              id="offerTerms"
              name="offerTerms"
              value={formData.offerTerms}
              onChange={handleChange}
            >
              <option value="one-time">One-time response offer (expires after X days)</option>
              <option value="accepting-x-days-best">Accept best offer for X days</option>
              <option value="accepting-x-days-first">Accept first acceptable offer for X days</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="expiryDays">Offer expires in (days)</label>
            <input
              type="number"
              id="expiryDays"
              name="expiryDays"
              min="1"
              max="365"
              value={formData.expiryDays}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pickupDelivery">Pickup / Delivery Options</label>
            <input
              type="text"
              id="pickupDelivery"
              name="pickupDelivery"
              placeholder="e.g., Local pickup only"
              value={formData.pickupDelivery}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="paymentTerms">Payment Terms</label>
            <input
              type="text"
              id="paymentTerms"
              name="paymentTerms"
              placeholder="e.g., Cash, Stripe, Escrow"
              value={formData.paymentTerms}
              onChange={handleChange}
            />
          </div>
        </section>

        <button type="submit" className="button button-primary button-large">
          Create Offer
        </button>
      </form>
    </div>
  )
}
