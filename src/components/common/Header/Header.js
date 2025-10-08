import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../../assets/img/MYA-logo.jpg";
import "./Header.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Početna" },
    { href: "#programs", label: "Programi" },
    { href: "#about", label: "O Nama" },
    { href: "#testimonials", label: "Iskustva" },
    { href: "#contact", label: "Kontakt" },
  ];

  return (
    <div className="header-wrapper">
      <div className="topbar">
        <div className="container">
          <div className="topbar-content">
            <div className="topbar-info">
              <a href="tel:+385123456789" className="topbar-item">
                <FontAwesomeIcon icon={faPhone} />
                <span className="topbar-text">+385 12 345 6789</span>
              </a>
              <a href="mailto:info@myacademy.hr" className="topbar-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="topbar-text">info@myacademy.hr</span>
              </a>
            </div>
            <div className="topbar-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-yacht">
        <div className="container">
          <a className="navbar-brand navbar-brand-yacht" href="#home">
            <img src={logo} alt="MY Academy Logo" className="navbar-logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav navbar-nav-yacht align-items-lg-center">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.href}>
                  <a
                    className={`nav-link nav-link-yacht ${
                      activeLink === link.href ? "active" : ""
                    }`}
                    href={link.href}
                    onClick={() => setActiveLink(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a href="#contact" className="btn btn-gold nav-cta">
                  Prijavi Se
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
