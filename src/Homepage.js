import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button, Form, FormControl, Card, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Ensure Link is imported
import './Homepage.css';
import logo from './images/Logo.png';
import user from './images/user.png';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';
import phone from './images/Phone.png';
import email from './images/email.png';
import league1 from "./images/league1.jpg";
import league2 from "./images/league2.jpg";

const Homepage = () => {
    return (
        <div className="homepage">
            <header className="header">
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img src={logo} width="100" height="100" alt="KickIt Logo" />
                        </Navbar.Brand>
                        <Nav className="mx-auto">
                            <NavLink as={Link} to="/" className="nav-link-custom">Home</NavLink>
                            <NavLink as={Link} to="/games" className="nav-link-custom">Games</NavLink>
                            <NavLink as={Link} to="/bookings" className="nav-link-custom">Book</NavLink>
                            <NavLink as={Link} to="/signup" className="nav-link-custom">Sign Up</NavLink>
                            <NavLink as={Link} to="/reviews" className="nav-link-custom">Reviews</NavLink> 
                        </Nav>
                        <img src={user} width="80" height="80" alt="User" />
                    </Container>
                </Navbar>
            </header>

            <section className="hero">
                <div className="hero-bg"></div>
                <Container className="text-center hero-text">
                    <h1>Find a league or drop in game today !!</h1>
                    <Form className="search-bar">
                        <FormControl type="text" placeholder="Enter City, ZIP code, State..." />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Container>
            </section>

            <Container className="league-cards my-5">
    <Row>
        <Col md={6}>
            <Card className="league-card">
                <Card.Img variant="top" src={league1} />
                <Card.Body>
                    <Card.Title>Join a league of your level today</Card.Title>
                    <Card.Text>
                        <Link to="/games">Find More about our leagues here</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md={6}>
            <Card className="league-card">
                <Card.Img variant="top" src={league2} />
                <Card.Body>
                    <Card.Title>Register your player profile</Card.Title>
                    <Card.Text>
                        <Link to="/signup">Register player</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>

            <footer className="footer bg-dark text-white text-center py-4">
                <Container>
                    <Row>
                        <Col md={4}>
                            <a href="#" className="text-white">Terms Of Service</a> | <a href="#" className="text-white">Privacy Policy</a>
                        </Col>
                        <Col md={4}>
                            <div className="follow-us">
                                <span>Follow Us</span>
                                <div className="social-icons">
                                    <img src={facebook} width="40" height="40" alt="Facebook" />
                                    <img src={instagram} width="40" height="40" alt="Instagram" />
                                    <img src={twitter} width="40" height="40" alt="Twitter" />
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="contact">
                                <div className="phone">
                                    <img src={phone} width="24" height="24" alt="Phone" />
                                    <span>123-456-789</span>
                                </div>
                                <div className="email">
                                    <img src={email} width="24" height="24" alt="Email" />
                                    <span>Kickit@gmail.com</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default Homepage;
