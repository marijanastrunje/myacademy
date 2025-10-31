import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(""); // 'loading', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("loading");

    emailjs
      .send(
        "service_vthnq8i",
        "template_s35ho6o",
        formData,
        "tBFNn_WgRGGsuslCh"
      )
      .then(
        () => {
          setFormStatus("success");
          alert("Hvala na prijavi! Kontaktirat ćemo vas uskoro.");
          setFormData({
            name: "",
            email: "",
            phone: "",
            program: "",
            message: "",
          });
        },
        (error) => {
          setFormStatus("error");
          alert("Greška pri slanju. Pokušaj ponovo.");
          console.error(error);
        }
      );
  };

  return (
    <section
      className="contact-section section-padding"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <header className="contact-header">
          <h2 id="contact-heading">Rezerviraj svoje mjesto</h2>
          <div className="gold-line" aria-hidden="true"></div>
          <p>
            Mjesta su ograničena - maksimalno 8 polaznika po programu. Popuni
            formu ispod i kontaktirat ćemo te u roku 24 sata s detaljima.
          </p>
        </header>

        <div className="contact-form-wrapper">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            aria-label="Obrazac za prijavu na program"
          >
            <h3>Prijava za program</h3>
            <p className="form-subtitle">
              Popuni formu ispod i kontaktirat ćemo te s detaljima o programu
            </p>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-name">
                Ime i prezime
                <span className="required" aria-label="obavezno polje">
                  *
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Upiši svoje ime i prezime"
                required
                aria-required="true"
              />
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">
                    Email
                    <span className="required" aria-label="obavezno polje">
                      *
                    </span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tvoj@email.com"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-phone">
                    Telefon
                    <span className="required" aria-label="obavezno polje">
                      *
                    </span>
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+385 xx xxx xxxx"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-program">
                Koji program te zanima?
                <span className="required" aria-label="obavezno polje">
                  *
                </span>
              </label>
              <select
                className="form-select"
                id="contact-program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
                aria-required="true"
              >
                <option value="">Odaberi program...</option>
                <option value="luxury-yacht">Luxury yacht hostess</option>
                <option value="luxury-catamaran">
                  Luxury catamaran hostess
                </option>
                <option value="foundation">Foundation course</option>
                <option value="introductory">Introductory course</option>
                <option value="info">Trebam više informacija</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">
                Poruka ili pitanja
              </label>
              <textarea
                className="form-control"
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Napiši nam svoja pitanja ili napomene (opcionalno)..."
                aria-describedby="message-help"
              ></textarea>
              <small id="message-help" className="visually-hidden">
                Ovo polje nije obavezno
              </small>
            </div>

            <button
              type="submit"
              className="btn btn-gold submit-btn"
              disabled={formStatus === "loading"}
              aria-busy={formStatus === "loading"}
            >
              {formStatus === "loading" ? "Šaljem..." : "Pošalji prijavu"}
            </button>

            <p className="form-note" role="note">
              Odgovorit ćemo ti u roku 24 sata s detaljima o programu i plaćanju
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
