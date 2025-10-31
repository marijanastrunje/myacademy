import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-background" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
          alt=""
          role="presentation"
        />
      </div>

      <div className="cta-overlay" aria-hidden="true"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cta-content">
              <div className="cta-badge" role="status" aria-live="polite">
                Zadnja prilika 2025
              </div>

              <h2 className="cta-title" id="cta-heading">
                Postani dio <span>prve generacije</span> i daj si priliku za
                nadprosječna primanja.
              </h2>

              <p className="cta-description">
                Cjelosezonsko zapošljavanje za 2026 zaključuje se s krajem 2025.
                Ovo su zadnji termini ove godine za praktičnu obuku na luksuznim
                brodovima. Sljedeća prilika je travanj 2026 - prijavi se.
              </p>

              <nav className="cta-buttons" aria-label="Akcije">
                <a
                  href="#contact"
                  className="btn btn-gold"
                  aria-label="Rezerviraj svoje mjesto na programu"
                >
                  Rezerviraj Mjesto
                </a>
                <a
                  href="#programs"
                  className="btn btn-outline-gold"
                  aria-label="Vidi dostupne termine programa"
                >
                  Vidi Termine
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
