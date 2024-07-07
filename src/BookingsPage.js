import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './BookingsPage.css';
import logo from './images/Logo.png';
import user from './images/user.png';
import backgroundImage from './images/Book.jpg';
import facebookIcon from './images/facebook.png';
import instagramIcon from './images/instagram.png';
import twitterIcon from './images/twitter.png';
import phoneIcon from './images/Phone.png';
import emailIcon from './images/email.png';

function BookingsPage() {
    return (
        <div className="bookingsPage" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="KickIt Logo" />
                </div>
                <nav className="navbar">
                    <Link to="/" className="navButton">Home</Link>  
                    <Link to="/games" className="navButton">Games</Link>  
                    <Link to="/bookings" className="navButton active">Book</Link>  
                    <Link to="/signup" className="navButton">Sign Up</Link>  
                    <Link to="/reviews" className="navButton">Reviews</Link>  
                </nav>
                <div className="userIcon">
                    <img src={user} alt="User Icon" />
                </div>
            </header>
            <div className="booking-form">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Enter Name" />
                
                <label htmlFor="matchId">Match ID</label>
                <input id="matchId" type="text" placeholder="Enter Match ID" />
                
                <label htmlFor="position">Position</label>
                <select id="position">
                    <option>Select Position</option>
                    <option>Goalkeeper</option>
                    <option>Defender</option>
                    <option>Midfielder</option>
                    <option>Forward</option>
                </select>
                
                <label htmlFor="level">Level</label>
                <select id="level">
                    <option>Select Your Level</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                </select>
                
                <button type="submit">Book</button>
            </div>
            <footer className="footer">
                <div className="termsLinks">
                    <a href="/terms-of-service">Terms Of Service</a>
                    <a href="/privacy-policy">Privacy Policy</a>
                </div>
                <div className="socials">
                    <span className="followUs">Follow Us</span>
                    <a href="https://www.facebook.com" className="socialIcon">
                        <img src={facebookIcon} width="24" height="24" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com" className="socialIcon">
                        <img src={instagramIcon} width="24" height="24" alt="Instagram" />
                    </a>
                    <a href="https://www.twitter.com" className="socialIcon">
                        <img src={twitterIcon} width="24" height="24" alt="Twitter" />
                    </a>
                </div>
                <div className="contactInfo">
                    <a href="tel:123-456-789">
                        <img src={phoneIcon} width="24" height="24" alt="Phone" />
                        <span>123-456-789</span>
                    </a>
                    <a href="mailto:Kickit@gmail.com">
                        <img src={emailIcon} width="24" height="24" alt="Email" />
                        <span>Kickit@gmail.com</span>
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default BookingsPage;
