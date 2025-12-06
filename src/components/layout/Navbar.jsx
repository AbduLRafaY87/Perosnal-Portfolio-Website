import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Moon, Sun, Menu, X } from 'lucide-react';
import useDarkMode from '../../hooks/useDarkMode'
import Logo from "../../assets/images/logo.jpg"
import Modal from './Modal';


const Navbar = () => {
  const { theme, toggleTheme } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='NavHeader'>
      <nav className="navbar">
        <div className="logoWrapper">
          <Link to="/">
            <div className="logoImg"><img src={Logo} alt="" /></div>
            <div className="logoTxt">Chatriwala</div>
          </Link>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-header">
            <div className="logoWrapper">
              <Link to="/">
                <div className="logoImg"><img src={Logo} alt="" /></div>
                <div className="logoTxt">Chatriwala</div>
              </Link>
            </div>
            <div className="close-menu" onClick={toggleMenu}>
              <X size={24} />
            </div>
          </div>
          <ul>
            <li><NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to='/about-me' className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Who Am I</NavLink></li>
            <li><NavLink to='/my-services' className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Services</NavLink></li>
            <li><NavLink to='/my-portfolio' className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Portfolio</NavLink></li>
            <li><NavLink to='/my-blogs' className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Insights</NavLink></li>
            <li><NavLink to='/get-in-touch' className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
          </ul>
        </div>
        <div className="navBtns">
          <p className='menuIcon' onClick={toggleMenu}><Menu /></p>
          <p className='talk' onClick={() => setOpenModal(true)}>Lets Talk</p>
          <p className='toggle' onClick={toggleTheme}>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </p>
        </div>
      </nav>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </header>
  )
}

export default Navbar