import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-background">
        <img
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
          alt="Luxury Yacht Interior"
        />
      </div>

      <div className="cta-overlay"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cta-content">
              <div className="cta-badge">Zadnja prilika 2025</div>

              <h2 className="cta-title">
                Postani dio <span>prve generacije</span> i daj si priliku za
                nadprosječna primanja.
              </h2>

              <p className="cta-description">
                Cjelosezonsko zapošljavanje za 2026 zaključuje se s krajem 2025.
                Ovo su zadnji termini ove godine za praktičnu obuku na luksuznim
                brodovima. Sljedeća prilika je travanj 2026 - prijavi se.
              </p>

              <div className="cta-buttons">
                <a href="#contact" className="btn btn-gold">
                  Rezerviraj Mjesto
                </a>
                <a href="#programs" className="btn btn-outline-gold">
                  Vidi Termine
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
