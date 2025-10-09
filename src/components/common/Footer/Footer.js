import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../../assets/img/logo-footer.PNG";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    alert("Hvala na prijavi! Uskoro ćete primiti naše novosti.");
    setEmail("");
  };

  const programs = [
    { label: "Introductory course", href: "#programs" },
    { label: "Foundation program", href: "#programs" },
    { label: "Luxury yacht hostess", href: "#programs" },
    { label: "Luxury catamaran hostess", href: "#programs" },
  ];

  const contactInfo = [
    {
      icon: faPhone,
      label: "Telefon",
      value: "+385 12 345 6789",
      link: "tel:+385123456789",
    },
    {
      icon: faEnvelope,
      label: "Email",
      value: "info@myacademy.hr",
      link: "mailto:info@myacademy.hr",
    },
    {
      icon: faMapMarkerAlt,
      label: "Lokacija",
      value: "Zagreb, Hrvatska",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: faFacebookF, url: "https://facebook.com" },
    { icon: faInstagram, url: "https://instagram.com" },
    { icon: faLinkedinIn, url: "https://linkedin.com" },
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-section">
                <div className="footer-brand">
                  <img
                    src={logo}
                    alt="MY Academy Logo"
                    className="footer-logo"
                  />
                </div>
                <p className="footer-description">
                  Prva službena akademija za obuku hostesa na luksuznim jahtama
                  i katamaranima. Transformiramo strast u profesionalnu
                  karijeru.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-section">
                <h4>Naši programi</h4>
                <ul className="footer-links">
                  {programs.map((program, index) => (
                    <li key={index}>
                      <a href={program.href}>{program.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-section">
                <h4>Kontakt</h4>
                {contactInfo.map((contact, index) => (
                  <div className="footer-contact-item" key={index}>
                    <div className="footer-contact-icon">
                      <FontAwesomeIcon icon={contact.icon} />
                    </div>
                    <div className="footer-contact-info">
                      <div className="footer-contact-label">
                        {contact.label}
                      </div>
                      {contact.link ? (
                        <a href={contact.link}>{contact.value}</a>
                      ) : (
                        <div>{contact.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-newsletter">
                <p>Prijavi se za novosti i ekskluzivne ponude:</p>
                <form
                  className="newsletter-form"
                  onSubmit={handleNewsletterSubmit}
                >
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Tvoj email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="newsletter-btn">
                    Prijavi Se
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Masterclass Yacht Academy. Sva
              prava pridržana.
            </p>

            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>

            <ul className="footer-legal-links">
              <li>
                <a href="#privacy">Politika privatnosti</a>
              </li>
              <li>
                <a href="#terms">Uvjeti korištenja</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
