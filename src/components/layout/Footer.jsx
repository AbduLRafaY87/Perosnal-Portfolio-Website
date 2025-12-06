import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router'
import Logo from '../../assets/images/Logo.png'  

const Footer = () => {

  return (
    <footer className="footer">
      <h1>CHATRIWALA</h1>
      <div className="newsletterSec">
        <div className="left">
          <h5>Stay Updated! <i className="fa-solid fa-rocket"></i></h5>
          <p>Subscribe to our newsletter <i className="fa-solid fa-newspaper"></i> to receive the latest insights directly to your inbox.</p>
        </div>
        <div className="right">
          <form className="subscribeForm">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footerTop">
        <div className="right">
          <div className="logo">
            <img src={Logo} alt="Chatriwala Logo" />
          </div>
          <p>
            Design & Development Studio<br />
            A studio focused on quality, clarity, and meaningful digital experiences
          </p>
        </div>

        <div className="left">
          <div className="company">
            <h3>Company</h3>
            <ul>
              <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/about-me">About</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/get-in-touch">Contact</NavLink></li>
              <li><NavLink to="/my-portfolio" className={({ isActive }) => isActive ? 'active' : ''}>Our Work</NavLink></li>
              <li><NavLink to="/my-blogs" className={({ isActive }) => isActive ? 'active' : ''}>Blogs</NavLink></li>
              <li><NavLink to="/my-services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>
            </ul>
          </div>

          {/* <div className="contact">
            <h3>Contact Us</h3>
            <ul>
              <li><NavLink to="/get-in-touch" className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink></li>
              <li><NavLink to="/support" className={({ isActive }) => isActive ? 'active' : ''}>Support</NavLink></li>
              <li><NavLink to="/our-privacy-policy" className={({ isActive }) => isActive ? 'active' : ''}>Privacy Policy</NavLink></li>
              <li><NavLink to="/our-terms-and-conditions" className={({ isActive }) => isActive ? 'active' : ''}>Terms of Service</NavLink></li>
              <li><NavLink to="/faqs" className={({ isActive }) => isActive ? 'active' : ''}>FAQs</NavLink></li>
            </ul>
          </div> */}

          <div className="followUs">
            <h3>Follow Me</h3>
            <ul>
              <li><a target='_blank' href='https://www.facebook.com'>Facebook</a></li>
              <li><a target='_blank' href='https://www.twitter.com'>Twitter</a></li>
              <li><a target='_blank' href='https://www.instagram.com/rafay.guides'>Instagram</a></li>
              <li><a target='_blank' href='https://www.linkedin.com/abdul-rafay-chatriwala'>LinkedIn</a></li>
              <li><a target='_blank' href='https://github.com/AbdulRafay87'>Github</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="footerBottom">
        <p>&copy; 2025 Chatriwala | All rights reserved.</p>
        <div className="socialIcons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter /></a>
          <a href="https://instagram.com/rafay.guides" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
          <a href="https://linkedin.com/abdul-rafay-chatriwala" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a href="https://github.com/AbdulRafay87" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Github /></a>
        </div>
      </div>
    </footer>

  )
}

export default Footer