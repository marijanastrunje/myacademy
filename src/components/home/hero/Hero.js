import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      className="hero-section"
      id="home"
      aria-label="Dobrodošli na MY Academy"
    >
      <div className="hero-background" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1920&q=80"
          alt=""
          loading="eager"
          role="presentation"
        />
      </div>

      <div className="hero-overlay" aria-hidden="true"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="hero-content">
              <div className="hero-divider" aria-hidden="true"></div>

              <p className="hero-subtitle" aria-label="Naziv akademije">
                Masterclass Yacht Academy
              </p>

              <h1 className="hero-title">
                Postani profesionalna hostesa{" "}
                <span className="text-gold">luksuznih jahti</span>
              </h1>

              <p className="hero-description">
                Osvoji luksuzni svijet jahti i katamarana. Stekni vrhunske
                vještine kroz ekskluzivne programe edukacije u kulinarstvu,
                servisu i profesionalnom nastupu.
              </p>

              <nav className="hero-buttons" aria-label="Glavne akcije">
                <a
                  href="#programs"
                  className="btn btn-gold"
                  aria-label="Pregledaj dostupne programe obuke"
                >
                  Istraži Programe
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline-gold"
                  aria-label="Kontaktiraj nas za više informacija"
                >
                  Kontaktiraj Nas
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
