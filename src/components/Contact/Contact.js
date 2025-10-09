import React, { useState } from "react";
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

  return (
    <>
      <section className="contact-section section-padding" id="contact">
        <div className="container">
          <div className="contact-header">
            <h2>Rezerviraj svoje mjesto</h2>
            <div className="gold-line"></div>
            <p>
              Mjesta su ograničena - maksimalno 8 polaznika po programu. Popuni
              formu ispod i kontaktirat ćemo te u roku 24 sata s detaljima.
            </p>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Prijava za Program</h3>
              <p className="form-subtitle">
                Popuni formu ispod i kontaktirat ćemo te s detaljima o programu
              </p>

              <div className="form-group">
                <label className="form-label">
                  Ime i Prezime<span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Upiši svoje ime i prezime"
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">
                      Email<span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tvoj@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">
                      Telefon<span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+385 xx xxx xxxx"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Koji program te zanima?<span className="required">*</span>
                </label>
                <select
                  className="form-select"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                >
                  <option value="">Odaberi program...</option>
                  <option value="luxury-yacht">Luxury yacht hostess</option>
                  <option value="luxury-catamaran">
                    Luxury catamaran hostess
                  </option>
                  <option value="introductory">Foundation course</option>
                  <option value="introductory">Introductory course</option>
                  <option value="info">Trebam više informacija</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Poruka ili pitanja</label>
                <textarea
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Napiši nam svoja pitanja ili napomene (opcionalno)..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-gold submit-btn">
                Pošalji Prijavu
              </button>

              <p className="form-note">
                Odgovorit ćemo ti u roku 24 sata s detaljima o programu i
                plaćanju
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
