import React from "react";
import "../Styles/LandingPage.css";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function LandingPage() {
  return (
    <div className="LandingPage">
      <nav>
        <div className="left-nav">
          <div>
            <p>Home</p>
          </div>
          <div>
            <p>Resources</p>
          </div>
          <div>
            <p>FAQ</p>
          </div>
          <div>
            <p>Contact</p>
          </div>
        </div>
        <div className="right-nav">
          <div>
            <FaPinterest />
          </div>
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaInstagram />
          </div>
        </div>
      </nav>
      <div className="content">
        <div>
          <h1>Aurore ,</h1>
          <p className="title">Your Space Exploration Hub.</p>
        </div>
        <div className="description">
          <h4>Tired of chasing down space news from scattered sources? </h4>
          Aurore is your one-stop shop for all things cosmic! <br />
          Fuel your curiosity with reliable information about space missions,
          <br /> upcoming celestial events, and fascinating facts.
          <h4>
            Engage with a community of space enthusiasts and share your own
            discoveries. <br /> Aurore: Where the Universe is at your
            fingertips.
          </h4>
        </div>
        
      </div>
      <button className="start-btn">
          <p>Get Started</p>
        </button>
    </div>
  );
}

export default LandingPage;
