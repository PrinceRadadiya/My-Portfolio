import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <img src="./img/prince-radadiya-logo.png" alt="logo" className="logo" />

      <nav className="navbar">
        <ul className="navbar-lists">
          <li>
            <NavLink className="navbar-link home-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link About-link" to="/About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link service-link" to="/Services">
              services
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link portfolio-link" to="/portfolio">
              portfolio
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link contact-link" to="Contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* mobile phone  */}

      <div className="mobile-navbar-btn">
        <ion-icon name="menu-outline" className="mobile-nav-icon"></ion-icon>
        <ion-icon name="close-outline" className="mobile-nav-icon"></ion-icon>
      </div>
    </header>
  );
};

export default Navbar;
