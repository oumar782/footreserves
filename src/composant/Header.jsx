import React, { useState } from 'react';
import './Header2.css';




const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className="header-container">
      <div className="header">
        <div className="menu-toggle" onClick={toggleMenu}>☰</div>

        <div className="logo-title">
          <h1>
            <span className="red">Foot</span>
            <span className="blue">Space</span>
            <span className="yellow">Reserve</span>
          </h1>
        </div>

        <div className={`links ${isMenuActive ? 'active' : ''}`}>
          <a href="/about" id="about">À propos</a>
          <a href="/terrains" >Nos terrains</a>
          <a href="/reservation">Réservation</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
