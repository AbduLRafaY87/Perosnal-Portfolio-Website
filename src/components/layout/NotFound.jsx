import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import '../../../src/styling/notfound.css'

const NotFound = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="notfound-container">
      {/* Animated Background */}
      <div className="notfound-bg-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      {/* Content */}
      <div className={`notfound-content ${isLoaded ? 'loaded' : ''}`}>
        {/* 404 Number with Animation */}
        <div className="notfound-number">
          <div className="number-digit">4</div>
          <div className="number-circle">
            <div className="circle-inner"></div>
          </div>
          <div className="number-digit">4</div>
        </div>

        {/* Main Heading */}
        <h1 className="notfound-title">Page Not Found</h1>

        {/* Description */}
        <p className="notfound-description">
          Oops! It seems the page you're looking for has wandered off into the digital void.
          Don't worry, let's get you back on track.
        </p>

        {/* Error Code Badge */}
        <div className="error-badge">
          <span className="badge-label">Error</span>
          <span className="badge-code">404</span>
        </div>

        {/* CTA Buttons */}
        <div className="notfound-buttons">
          <Link to="/" className="btn-primary">
            <Home size={20} />
            Back to Home
          </Link>
          <button 
            className="btn-secondary"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        {/* <div className="helpful-links">
          <p className="links-label">Quick Links:</p>
          <div className="links-grid">
            <Link to="/portfolio" className="link-item">Portfolio</Link>
            <Link to="/services" className="link-item">Services</Link>
            <Link to="/blog" className="link-item">Blog</Link>
            <Link to="/about" className="link-item">About</Link>
          </div>
        </div> */}
      </div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
    </div>
  )
}

export default NotFound