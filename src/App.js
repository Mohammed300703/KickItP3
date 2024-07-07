import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import GamesPage from './GamesPage';
import BookingsPage from './BookingsPage';
import ReviewsPage from './ReviewsPage';
import Signup from './Signup';
import './App.css';

function App() {
  return (
    <Router basename="/KickItP3">  
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
