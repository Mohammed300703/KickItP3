import React, { useState, useEffect } from 'react';
import './GamesPage.css'; // Ensure styles are correctly linked
import logo from './images/Logo.png';
import user from './images/user.png';
import photo1 from './images/Sign Up.jpg';
import photo2 from './images/Hero Pitch.jpg';
import photo3 from './images/league1.jpg';
import phoneIcon from './images/Phone.png'; // Ensure the path is correct
import emailIcon from './images/email.png'; // Ensure the path is correct
import facebookIcon from './images/facebook.png'; // Ensure the path is correct
import instagramIcon from './images/instagram.png'; // Ensure the path is correct
import twitterIcon from './images/twitter.png'; 

function GamesPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        photo1,
        photo2,
        photo3,
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 5000); // Changes slide every 5 seconds

        return () => clearTimeout(timer);
    }, [currentSlide, slides.length]);

    return (
        <div className="gamesPage">
            <header className="header">
                <div className="logo">
                    <img src={logo} width="100" height="100" alt="KickIt Logo" />
                </div>
                <nav className="navbar">
                    <a href="/" className="navButton">Home</a>
                    <a href="/games" className="navButton active">Games</a>
                    <a href="/bookings" className="navButton">Book</a>
                    <a href="/signup" className="navButton">Sign Up</a>
                </nav>
                <div className="userIcon">
                    <img src={user} width="100" height="100" alt="User Icon" />
                </div>
            </header>
            <div className="slider">
                <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
                <div className="slider-nav">
                    {slides.map((_, idx) => (
                        <div
                            key={idx}
                            className={`nav-dot ${idx === currentSlide ? 'active' : ''}`}
                        ></div>
                    ))}
                </div>
            </div>
            <GamesTable />
            <LeaguesTable />
            <Footer />
        </div>
    );
}

function GamesTable() {
    const [filterOne, setFilterOne] = useState('All');
    const [filterTwo, setFilterTwo] = useState('All');

    const gamesData = [
        { dateTime: '2023-07-01 15:00', location: 'Field A', details: 'Friendly Match', spots: 10, level: 'Beginner' },
        { dateTime: '2023-07-02 16:00', location: 'Field B', details: 'Tournament', spots: 8, level: 'Intermediate' },
    ];

    const handleFilterChangeOne = (e) => {
        setFilterOne(e.target.value);
    };

    const handleFilterChangeTwo = (e) => {
        setFilterTwo(e.target.value);
    };

    return (
        <div className="dropInGames">
            <div className="gamesHeader">
                <h2 style={{ color: 'red', textAlign: 'center' }}>Drop In Games</h2>
                <div className="filters" style={{ textAlign: 'left', padding: '0 15px' }}>
                    <select value={filterOne} onChange={handleFilterChangeOne}>
                        <option value="All">All</option>
                        <option value="Option1">Option1</option>
                        <option value="Option2">Option2</option>
                    </select>
                    <select value={filterTwo} onChange={handleFilterChangeTwo}>
                        <option value="All">All</option>
                        <option value="Option1">Option1</option>
                        <option value="Option2">Option2</option>
                    </select>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Date/Time</th>
                        <th>Location</th>
                        <th>Details</th>
                        <th>Spots</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    {gamesData.map((game, index) => (
                        <tr key={index}>
                            <td>{game.dateTime}</td>
                            <td>{game.location}</td>
                            <td>{game.details}</td>
                            <td>{game.spots}</td>
                            <td>{game.level}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function LeaguesTable() {
    const [filterOne, setFilterOne] = useState('All');
    const [filterTwo, setFilterTwo] = useState('All');

    const leaguesData = [
        { dateTime: '2023-07-05 14:00', location: 'Stadium A', details: 'Championship', spots: 6, level: 'Advanced' },
        { dateTime: '2023-07-06 18:00', location: 'Stadium B', details: 'Regular Season', spots: 8, level: 'Intermediate' },
    ];

    const handleFilterChangeOne = (e) => {
        setFilterOne(e.target.value);
    };

    const handleFilterChangeTwo = (e) => {
        setFilterTwo(e.target.value);
    };

    return (
        <div className="leagues">
            <div className="leaguesHeader">
                <h2 style={{ color: 'red', textAlign: 'center' }}>Leagues</h2>
                <div className="filters" style={{ textAlign: 'left', padding: '0 15px' }}>
                    <select value={filterOne} onChange={handleFilterChangeOne}>
                        <option value="All">All</option>
                        <option value="Option1">Option1</option>
                        <option value="Option2">Option2</option>
                    </select>
                    <select value={filterTwo} onChange={handleFilterChangeTwo}>
                        <option value="All">All</option>
                        <option value="Option1">Option1</option>
                        <option value="Option2">Option2</option>
                    </select>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Date/Time</th>
                        <th>Location</th>
                        <th>Details</th>
                        <th>Spots</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    {leaguesData.map((league, index) => (
                        <tr key={index}>
                            <td>{league.dateTime}</td>
                            <td>{league.location}</td>
                            <td>{league.details}</td>
                            <td>{league.spots}</td>
                            <td>{league.level}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="termsLinks">
                <a href="/terms-of-service">Terms Of Service</a>
                <a href="/privacy-policy">Privacy Policy</a>
            </div>
            <div className="socials">
                <span className="followUs">Follow Us</span>
                {/* Ensure all social media icons are correctly implemented */}
                <a href="https://www.facebook.com" className="socialIcon">
                    <img src={facebookIcon} width="24" height="24" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com" className="socialIcon">
                    <img src={instagramIcon} width="24" height="24" alt="Instagram" />
                </a>
                <a href="https://www.twitter.com" className="socialIcon">
                    <img src={twitterIcon} width="24" height="24" alt="Twitter" /> {/* Add Twitter icon if not present */}
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
    );
}
export default GamesPage;
