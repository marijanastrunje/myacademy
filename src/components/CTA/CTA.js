import React from "react";
import "./CTA.css";

const CTA = () => {
  const stats = [
    { number: "100+", label: "Polaznica" },
    { number: "7", label: "Dana" },
    { number: "95%", label: "Uspješnost" },
  ];

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
              <div className="cta-badge">Upisi Otvoreni</div>

              <h2 className="cta-title">
                Započni Svoju Karijeru <span>Već Danas</span>
              </h2>

              <p className="cta-description">
                Ne propusti priliku da se pridružiš elitnoj grupi profesionalnih
                hostesa. Mjesta su ograničena, a sljedeći program započinje
                uskoro.
              </p>

              <div className="cta-buttons">
                <a href="#contact" className="btn btn-gold">
                  Prijavi Se Sada
                </a>
                <a href="#programs" className="btn btn-outline-gold">
                  Saznaj Više
                </a>
              </div>

              <div className="cta-features">
                {stats.map((stat, index) => (
                  <div className="cta-feature" key={index}>
                    <div className="cta-feature-number">{stat.number}</div>
                    <div className="cta-feature-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
