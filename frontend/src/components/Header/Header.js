import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Shagun Tent House</h1>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`line ${menuOpen ? "line1" : ""}`}></div>
          <div className={`line ${menuOpen ? "line2" : ""}`}></div>
          <div className={`line ${menuOpen ? "line3" : ""}`}></div>
        </div>
        <nav className={menuOpen ? "nav-open" : ""}>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/booking" onClick={toggleMenu}>
                Booking
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={toggleMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
