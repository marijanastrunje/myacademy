import React from "react";
import "./About.css";

const About = () => {
  return (
    <section
      className="about-section section-padding"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <header className="about-header">
          <h2 id="about-heading">Tvoja karijera počinje ovdje</h2>
          <div className="gold-line" aria-hidden="true"></div>
          <p>
            Zamisli kako poslužujueš šampanjac na palubi jahte dok plovi uz
            predivne jadranske otoke. Ili kako pripremаš gourmet večeru za VIP
            goste u najljepšim tirkiznim uvalama. To više nije san - to je tvoja
            nova realnost.
          </p>
        </header>

        <div className="about-content">
          <div className="about-image-wrapper">
            <figure className="about-main-image">
              <img
                src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1000&q=80"
                alt="Luksuzna jahta na Jadranu - tvoje buduće radno mjesto"
                loading="lazy"
              />
              <figcaption className="about-image-badge">
                <h4>Tvoje radno mjesto</h4>
                <p>Najljepše destinacije svijeta čekaju te</p>
              </figcaption>
            </figure>
          </div>

          <div className="about-text-content">
            <h3>
              Zašto izabrati baš{" "}
              <span className="highlight">našu akademiju?</span>
            </h3>
            <p>
              Zato što ne prodajemo samo tečaj - nudimo ti kompletnu
              transformaciju. Za 7 dana postaješ profesionalna hostesa za rad na
              najluksuznijim brodovima.
            </p>
            <p>
              <strong>Marina i Marijana</strong> nisu samo instruktorice - one
              su tvoje mentorice koje su prošle isti put. Radile su na Sunreef
              60 katamaranima, jahtama, u prestižnim restoranima Dublina i na
              najekskluzivnijim privatnim charterima na Mediteranu i u Europi.
            </p>
            <p>
              Svaki trik, svaki detalj, svaki tajni recept koji VIP gosti
              obožavaju - sve to dijelimo s tobom. Ne postoji "možda" ili
              "pokušat ćeš" - izlaziš spremna, sigurna i tražena u industriji.
            </p>

            <div className="about-signature">
              <div>
                <div className="about-signature-text">Marina & Marijana</div>
                <div className="about-signature-label">
                  Osnivačice & Tvoje Mentorice
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="about-cta-box"
          role="region"
          aria-label="Poziv na akciju"
        >
          <h3>Spremna da promijeniš svoj život?</h3>
          <p>
            Svaki dan odgađanja je dan manje na jahtama tvojih snova. Mjesta su
            ograničena. Prvi termin je 24. studenog. Prijavi se.
          </p>
          <nav className="about-cta-buttons" aria-label="Akcije">
            <a
              href="#programs"
              className="btn btn-gold"
              aria-label="Odaberi svoj program obuke"
            >
              Odaberi svoj program
            </a>
            <a
              href="#contact"
              className="btn btn-outline-gold"
              aria-label="Prijavi se odmah za program"
            >
              Prijavi se odmah
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default About;
