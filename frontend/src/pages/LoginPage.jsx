import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AuthPages.css'

export default function LoginPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login:', formData)
    // API call would go here
    alert('Login functionality coming soon!')
  }

  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="button button-primary">
            Log In
          </button>
        </form>

        <p>Don't have an account? <a href="/register">Sign up here</a></p>
      </div>
    </div>
  )
}
