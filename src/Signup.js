import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Signup.css';
import Logo from './images/Logo.png';
import UserIcon from './images/user.png';
import PhoneIcon from './images/Phone.png';
import EmailIcon from './images/email.png';
import FacebookIcon from './images/facebook.png';
import InstagramIcon from './images/instagram.png';
import TwitterIcon from './images/twitter.png';

function Signup() {
  const navigate = useNavigate(); // Hook to handle navigation programmatically

  // Function to handle navigation when a button is clicked
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="signup-page">
      <header className="header">
        <img src={Logo} alt="Kick It Logo" className="logo" />
        <nav className="nav-menu">
          <button onClick={() => handleNavigation('/')} className="nav-button">Home</button>
          <button onClick={() => handleNavigation('/games')} className="nav-button">Games</button>
          <button onClick={() => handleNavigation('/bookings')} className="nav-button">Book</button>
          <button onClick={() => handleNavigation('/signup')} className="nav-button active">Sign Up</button>
        </nav>
        <img src={UserIcon} alt="User Icon" className="user-icon" />
      </header>
      <div className="signup-container">
        <div className="signup-content">
          <div className="input-container">
            <label className="input-label">Name</label>
            <input type="text" className="input-field" placeholder="Enter Name" />
          </div>
          <div className="input-container">
            <label className="input-label">Email</label>
            <input type="email" className="input-field" placeholder="Enter Email" />
          </div>
          <div className="input-container">
            <label className="input-label">Level</label>
            <select className="input-field">
              <option>Select Your Level</option>
            </select>
          </div>
          <div className="input-container">
            <label className="input-label">Phone</label>
            <input type="tel" className="input-field" placeholder="E.g 123-456-789" />
          </div>
          <div className="input-container">
            <label className="input-label">Position</label>
            <select className="input-field">
              <option>Select Position</option>
            </select>
          </div>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="terms">
            <a href="/terms-of-service">Terms Of Service</a> | <a href="/privacy-policy">Privacy Policy</a>
          </div>
          <div className="socials">
            <div>Follow Us</div>
            <div className="social-icons">
              <img src={FacebookIcon} alt="Facebook" className="social-icon" />
              <img src={InstagramIcon} alt="Instagram" className="social-icon" />
              <img src={TwitterIcon} alt="Twitter" className="social-icon" />
            </div>
          </div>
          <div className="contact-info">
            <div className="phone">
              <img src={PhoneIcon} width="24" height="24" alt="Phone" /> <span>123-456-789</span>
            </div>
            <div className="email">
              <img src={EmailIcon} width="24" height="24" alt="Email" /> <span>Kickit@gmail.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Signup;
