import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faGraduationCap,
  faAnchor,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const About = () => {
  const features = [
    {
      icon: faGem,
      title: "Luksuzni standardi",
      description:
        "Učiš od najboljih - stekni vještine koje traže vlasnici najskupljih jahti na svijetu.",
    },
    {
      icon: faGraduationCap,
      title: "Praktično znanje",
      description:
        "Odmah primjenjivo - sve što naučiš odmah primjenjuješ u realnim uvjetima rada.",
    },
    {
      icon: faAnchor,
      title: "Brzo do posla",
      description:
        "Naše polaznice odmah dobiju priliku za showcase charterima - bez čekanja.",
    },
    {
      icon: faHeart,
      title: "Doživotna podrška",
      description:
        "Nisi sama - postaneš dio zajednice koja te podržava kroz cijelu karijeru.",
    },
  ];

  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="about-header">
          <h2>Tvoja karijera počinje ovdje</h2>
          <div className="gold-line"></div>
          <p className="lead">
            Zamisli kako poslužujueš šampanjac na palubi jahte dok plovi uz
            predivne jadranske otoke. Ili kako pripremаš gourmet večeru za VIP
            goste u najljepšim tirkiznim uvalama. To više nije san - to je tvoja
            nova realnost.
          </p>
        </div>

        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-main-image">
              <img
                src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1000&q=80"
                alt="Luxury Yacht Experience"
              />
              <div className="about-image-badge">
                <h4>Tvoje radno mjesto</h4>
                <p>Najljepše destinacije svijeta čekaju te</p>
              </div>
            </div>
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

        <div className="about-features-section">
          <div className="container">
            <div className="about-features-title">
              <h3>Što te čeka u programu?</h3>
              <p>Ozbiljne vještine. Realna praksa. Garantirani rezultati.</p>
            </div>

            <div className="features-grid">
              {features.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-cta-box">
          <h3>Spremna da promijeniš svoj život?</h3>
          <p>
            Svaki dan odgađanja je dan manje na jahtama tvojih snova. Mjesta su
            ograničena. Prvi termin je 30. listopada. Prijavi se.
          </p>
          <div className="about-cta-buttons">
            <a href="#programs" className="btn btn-gold">
              Odaberi svoj program
            </a>
            <a href="#contact" className="btn btn-outline-gold">
              Prijavi se odmah
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
