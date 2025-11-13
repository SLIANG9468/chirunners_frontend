import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/ChiLogo.PNG'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo and Brand */}
        <div className="footer-column">
          <div className="footer-logo">
            <img src={logo} alt="ChiRunners Logo" />
            <h3>ChiRunners</h3>
          </div>
          <p className="footer-tagline">
            Chinese American running community in Chicago
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Run Schedule</Link></li>
            <li><Link to="/chimarathon">Chicago Marathon</Link></li>
            <li><Link to="/store">Store</Link></li>
          </ul>
        </div>

        {/* Column 3: Get Involved */}
        <div className="footer-column">
          <h4>Get Involved</h4>
          <ul>
            <li><Link to="/volunteers">Volunteer</Link></li>
            <li><Link to="/chimarathon">Marathon Training</Link></li>
            <li><Link to="/myteams">Community</Link></li>
            <li><a href="mailto:info@chirunners.org">Contact</a></li>
          </ul>
        </div>

        {/* Column 4: Connect */}
        <div className="footer-column">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://www.instagram.com/chirunners" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com/chirunners" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>WeChat Group</a></li>
            <li><a href="mailto:info@chirunners.org">Email Us</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Chi Running Club. All rights reserved. Run far, run together</p>
      </div>
    </footer>
  )
}

export default Footer
