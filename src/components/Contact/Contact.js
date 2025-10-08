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
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Hvala na prijavi! Kontaktirat ćemo vas uskoro.");
  };

  const contactInfo = [
    {
      icon: faPhone,
      title: "Telefon",
      info: "+385 12 345 6789",
      link: "tel:+385123456789",
    },
    {
      icon: faEnvelope,
      title: "Email",
      info: "info@myacademy.hr",
      link: "mailto:info@myacademy.hr",
    },
    {
      icon: faMapMarkerAlt,
      title: "Lokacija",
      info: "Zagreb, Hrvatska",
      link: null,
    },
  ];

  return (
    <>
      <section className="contact-section section-padding" id="contact">
        <div className="container">
          <div className="contact-header">
            <h2>Kontaktiraj Nas</h2>
            <div className="gold-line"></div>
            <p>
              Imate pitanja o programu? Želite rezervirati mjesto? Kontaktirajte
              nas i rado ćemo vam pomoći!
            </p>
          </div>

          <div className="row">
            {contactInfo.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <h4>{item.title}</h4>
                  {item.link ? (
                    <a href={item.link}>{item.info}</a>
                  ) : (
                    <p>{item.info}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-12">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Prijavi Se Za Program</h3>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Ime i Prezime *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Telefon *</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Odaberi Program *</label>
                      <select
                        className="form-select"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Odaberi program...</option>
                        <option value="foundation">Foundation Program</option>
                        <option value="luxury">Luxury Yacht Hostess</option>
                        <option value="info">Trebam više informacija</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Poruka</label>
                  <textarea
                    className="form-control"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Napiši nam svoja pitanja ili napomene..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-gold submit-btn">
                  Pošalji Prijavu
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <img
              src="https://via.placeholder.com/200x200/1a2951/c9a961?text=MY+Academy"
              alt="MY Academy Logo"
              className="footer-logo"
            />

            <div className="footer-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Masterclass Yacht Academy. Sva prava pridržana.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
