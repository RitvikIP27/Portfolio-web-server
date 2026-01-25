import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";


const HeroSection = () => {
  const images = [
    "src/assets/images.jpg",
  ];

  return (
    <div className="hero-wrapper">

      {/* NAVBAR */}
      <nav className="nav">
        <div className="logo">TASK 01</div>

        <div className="nav-actions">
  <Link to="/" className="login-btn">Log in</Link>
  <span className="globe">🌐</span>
  <div className="menu-icon">
    <div></div><div></div><div></div>
  </div>
</div>

      </nav>

      {/* MAIN HERO SECTION */}
      <div className="hero-content">

        {/* LEFT SIDE TEXT */}
        <div className="hero-left">
          <h1 className="hero-title">
            My New Work<br />By Ritvik Kant
          </h1>

          <p className="hero-sub">
           cOMPLETED MY TASK 1 FOR mETEORITE LABS.
          </p>

          <div className="hero-buttons">
            <button className="explore-btn">lEVELLING UP</button>
            <button className="creator-link">Become a creator</button>
          </div>
        </div>

        {/* RIGHT SIDE PHOTO COLLAGE */}
        <div className="hero-right">
          {images.map((img, idx) => (
            <img key={idx} src={"src/assets/images.jpg"} className="circle-img" />
          ))}
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
