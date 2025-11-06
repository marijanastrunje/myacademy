import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faWineGlass,
  faMartiniGlass,
  faUserTie,
  faStar,
  faBroom,
  faShip,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./WhatYouLearn.css";

const WhatYouLearn = () => {
  const learningPoints = [
    {
      icon: faUtensils,
      title: "Fine dining",
      description: "Napredne tehnike kuhanja i plating za VIP goste.",
    },
    {
      icon: faWineGlass,
      title: "Wine pairing",
      description: "Stručno uparivanje vina s jelima.",
    },
    {
      icon: faMartiniGlass,
      title: "Mixology",
      description: "Premium kokteli i profesionalni bartending.",
    },
    {
      icon: faUserTie,
      title: "VIP servis",
      description: "Vrhunski protokol i etiketa.",
    },
    {
      icon: faStar,
      title: "Decoration",
      description: "Luksuzni stolni dekor za posebne prilike.",
    },
    {
      icon: faBroom,
      title: "Housekeeping",
      description: "Održavanje na najvišem nivou.",
    },
    {
      icon: faShip,
      title: "Deck obaveze",
      description: "Sigurnost i suradnja na palubi.",
    },
    {
      icon: faCheckCircle,
      title: "Soft skills",
      description: "Komunikacija i leadership vještine.",
    },
  ];

  return (
    <section className="what-you-learn" id="sto-ucite">
      <div className="container">
        <header className="section-header">
          <h2>Što ćete naučiti</h2>
          <div className="gold-line"></div>
          <p>
            Sveobuhvatan program koji vas priprema za rad na najluksuznijim
            jahtama. Svaka vještina je pažljivo odabrana.
          </p>
        </header>

        <div className="learning-grid">
          {learningPoints.map((point, index) => (
            <article className="learning-card" key={index}>
              <div className="card-icon">
                <FontAwesomeIcon icon={point.icon} />
              </div>
              <div className="card-content">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="cta-box">
          <p>
            Svaki modul je dizajniran da vas pripremi za stvarni rad od prvog
            dana.
          </p>
          <a href="#programs" className="btn btn-gold">
            Pogledaj Programme
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
