import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="n-wrapper" id="Navbar">
      {/* Left Section */}
      <div className="n-left">
        <div className="n-name">Andrew</div>
        <Toggle />
      </div>

      {/* Right Section */}
      <div className="n-right">
        {/* Navigation List */}
        <div className={`n-list ${isMenuOpen ? "active" : ""}`}>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="works"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="testimonial"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Button */}
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
        >
          <button className="button n-button">Contact</button>
        </Link>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </div>
  );
};

export default Navbar;
