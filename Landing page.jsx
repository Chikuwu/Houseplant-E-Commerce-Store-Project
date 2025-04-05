// components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>Green Thumb Haven</h1>
      <p>
        Welcome to Green Thumb Haven, your premier destination for beautiful houseplants 
        that bring life to any space. We specialize in rare and easy-to-care-for plants 
        that suit both beginners and experienced plant parents.
      </p>
      <Link to="/products">
        <button className="get-started-btn">Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
