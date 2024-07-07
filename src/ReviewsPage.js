import React, { useState } from 'react';
import './ReviewsPage.css';
import logo from './images/Logo.png';
import user from './images/user.png';
import football from './images/football.png';
import filledFootball from './images/ball.png';
import facebookIcon from './images/facebook.png';
import instagramIcon from './images/instagram.png';
import twitterIcon from './images/twitter.png';
import phoneIcon from './images/Phone.png';
import emailIcon from './images/email.png';

function ReviewsPage() {
    const [pitchRating, setPitchRating] = useState(0);
    const [friendlinessRating, setFriendlinessRating] = useState(0);
    const [overallRating, setOverallRating] = useState(0);
    const [levelRating, setLevelRating ] = useState(0);
    const createRatingHandler = (setter) => (rate) => {
        setter(rate);
    };

    const RatingStars = ({ rating, setRating }) => (
        <div className="ratings">
            {[1, 2, 3, 4, 5].map((index) => (
                <img
                    key={index}
                    src={index <= rating ? filledFootball : football}
                    alt={`Rate ${index}`}
                    className={`rating ${index <= rating ? 'active' : ''}`}
                    onClick={() => setRating(index)}
                    style={{ cursor: 'pointer' }}
                />
            ))}
        </div>
    );

    return (
        <div className="reviewsPage">
            <header className="header">
                <div className="logo">
                    <img src={logo} width="100" height="100" alt="KickIt Logo" />
                </div>
                <nav className="navbar">
                    <a href="/" className="navButton">Home</a>
                    <a href="/games" className="navButton">Games</a>
                    <a href="/book" className="navButton">Book</a>
                    <a href="/signup" className="navButton">Sign Up</a>
                </nav>
                <div className="userIcon">
                    <img src={user} width="100" height="100" alt="User Icon" />
                </div>
            </header>
            <div className="promo-section">
                <div className="promo-text">
                    Please Rate Your Match for 20% off your next Booking !!
                </div>
                <div className="rating-section">
                    <p>How accurate was the level of the match</p>
                    <RatingStars rating={levelRating} setRating={createRatingHandler(setLevelRating)} />
                    <p>How was the pitch</p>
                    <RatingStars rating={pitchRating} setRating={createRatingHandler(setPitchRating)} />
                    <p>How friendly were the players</p>
                    <RatingStars rating={friendlinessRating} setRating={createRatingHandler(setFriendlinessRating)} />
                    <p>Rate your overall experience with Kickit</p>
                    <RatingStars rating={overallRating} setRating={createRatingHandler(setOverallRating)} />
                </div>
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

export default ReviewsPage;
