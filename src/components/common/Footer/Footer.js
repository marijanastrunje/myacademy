import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [status, setStatus] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        "service_vthnq8i",
        "template_bz2f4zj",
        { email: email },
        "tBFNn_WgRGGsuslCh"
      )
      .then(
        () => {
          setStatus("success");
          alert("Hvala na prijavi! Uskoro ćete primiti naše novosti.");
          setEmail("");
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          setStatus("error");
          alert("Greška pri prijavi. Pokušaj ponovo.");
          console.error(error);
        }
      );
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
      value: "+385 99 3152 678",
      link: "tel:+385993152678",
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
      value: "Split, Hrvatska",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: faFacebookF,
      url: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: faInstagram,
      url: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: faLinkedinIn,
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="footer" role="contentinfo">
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
              <nav
                className="footer-section"
                aria-labelledby="footer-programs-heading"
              >
                <h4 id="footer-programs-heading">Naši programi</h4>
                <ul className="footer-links">
                  {programs.map((program, index) => (
                    <li key={index}>
                      <a
                        href={program.href}
                        aria-label={`Saznaj više o ${program.label}`}
                      >
                        {program.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="footer-section"
                aria-labelledby="footer-contact-heading"
              >
                <h4 id="footer-contact-heading">Kontakt</h4>
                <address>
                  {contactInfo.map((contact, index) => (
                    <div className="footer-contact-item" key={index}>
                      <div className="footer-contact-icon" aria-hidden="true">
                        <FontAwesomeIcon icon={contact.icon} />
                      </div>
                      <div className="footer-contact-info">
                        <div className="footer-contact-label">
                          {contact.label}
                        </div>
                        {contact.link ? (
                          <a
                            href={contact.link}
                            aria-label={`${contact.label}: ${contact.value}`}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div>{contact.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </address>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="footer-newsletter"
                aria-labelledby="newsletter-heading"
              >
                <h4 id="newsletter-heading" className="d-none">
                  Newsletter
                </h4>
                <p>Prijavi se za novosti i ekskluzivne ponude:</p>
                <form
                  className="newsletter-form"
                  onSubmit={handleNewsletterSubmit}
                  aria-label="Prijava na newsletter"
                >
                  <label htmlFor="newsletter-email" className="visually-hidden">
                    Email adresa za newsletter
                  </label>
                  <input
                    type="email"
                    id="newsletter-email"
                    className="newsletter-input"
                    placeholder="Tvoj email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === "loading"}
                    aria-required="true"
                  />
                  <button
                    type="submit"
                    className="newsletter-btn"
                    disabled={status === "loading"}
                    aria-busy={status === "loading"}
                  >
                    {status === "loading" ? "Šaljem..." : "Prijavi Se"}
                  </button>
                </form>
                {status === "success" && (
                  <p
                    className="newsletter-success"
                    role="status"
                    aria-live="polite"
                  >
                    Uspješno prijavljen!
                  </p>
                )}
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

            <nav className="footer-social" aria-label="Social media linkovi">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={`Posjetite nas na ${social.label}`}
                >
                  <FontAwesomeIcon icon={social.icon} aria-hidden="true" />
                </a>
              ))}
            </nav>

            <nav aria-label="Pravni linkovi">
              <ul className="footer-legal-links">
                <li>
                  <a href="#privacy">Politika privatnosti</a>
                </li>
                <li>
                  <a href="#terms">Uvjeti korištenja</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
