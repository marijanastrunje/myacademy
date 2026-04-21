// src/components/home/Modules/Modules.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkerAlt,
  faCheck,
  faEuroSign,
  faTrophy,
  faWineGlass,
  faMartiniGlass,
  faUtensils,
  faPalette,
  faFileAlt,
  faUserTie,
  faCoffee,
  faChampagneGlasses,
} from "@fortawesome/free-solid-svg-icons";
import "./Modules.css";

const Modules = () => {
  const modules = [
    {
      id: "wine-mastery",
      icon: faWineGlass,
      title: "Wine Mastery",
      duration: "1 Dan",
      location: "Vinarija Dalmacija",
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
      description:
        "Dubinsko poznavanje vina, pravilno uparivanje s jelima i prezentacija za najzahtjevnije goste.",
      highlights: [
        "Degustacija 12+ premium vina",
        "Wine pairing s gourmet jelima",
        "Prezentacija i servis vina",
        "Sommelier specijalizacija",
      ],
      price: "250",
      nextDate: "15. prosinca 2025",
    },
    {
      id: "mixology",
      icon: faMartiniGlass,
      title: "Advanced Mixology",
      duration: "1 Dan",
      location: "Premium Bar, Split",
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
      description:
        "Profesionalni kokteli, flair tehnike i kreiranje signature drinkova za VIP klijentelu.",
      highlights: [
        "20+ signature koktela",
        "Flair bartending tehnike",
        "Alkoholna i bezalkoholna mješavina",
        "Mixology specijalizacija",
      ],
      price: "250",
      nextDate: "22. prosinca 2025",
    },
    {
      id: "silver-service",
      icon: faUserTie,
      title: "Silver Service Excellence",
      duration: "1 Dan",
      location: "Restoran Michelin, Split",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      description:
        "Perfekcioniranje silver service tehnike, protokola i elegantnog servisa kakav očekuju VIP gosti.",
      highlights: [
        "Klasične silver service tehnike",
        "Servis za 12+ osoba",
        "VIP protokol i etiketa",
        "Fine dining specijalizacija",
      ],
      price: "280",
      nextDate: "12. siječnja 2026",
    },
    {
      id: "culinary",
      icon: faUtensils,
      title: "Culinary Excellence",
      duration: "1 Dan",
      location: "Kulinarski Centar, Split",
      image:
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
      description:
        "Napredne tehnike kuhanja, meal planning i pripreme gourmet jela u uslovima jahte.",
      highlights: [
        "3-course menu pripreme",
        "Napredne kulinarske tehnike",
        "Yacht galley management",
        "Culinary specijalizacija",
      ],
      price: "320",
      nextDate: "19. siječnja 2026",
    },
    {
      id: "plating",
      icon: faChampagneGlasses,
      title: "Plating & Presentation",
      duration: "Pola Dana",
      location: "Fine Dining Studio",
      image:
        "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800&q=80",
      description:
        "Profesionalno slaganje i prezentacija jela koja ostavlja dojam na najzahtjevnije goste.",
      highlights: [
        "Restaurant-level plating",
        "Dekorativne tehnike",
        "Fotografija jela basics",
        "Portfolio projekti",
      ],
      price: "180",
      nextDate: "26. siječnja 2026",
    },
    {
      id: "decoration",
      icon: faPalette,
      title: "Luxury Decoration",
      duration: "Pola Dana",
      location: "Event Studio, Split",
      image:
        "https://images.unsplash.com/photo-1478145787956-f6f12c59624d?w=800&q=80",
      description:
        "Kreiranje luksuznog stola i ambijenta za posebne prilike i VIP događaje.",
      highlights: [
        "Tablescaping dizajn",
        "Seasonal dekoracije",
        "Event styling basics",
        "Portfolio fotografija",
      ],
      price: "180",
      nextDate: "2. veljače 2026",
    },
    {
      id: "cv-career",
      icon: faFileAlt,
      title: "CV & Career Coaching",
      duration: "2 Sata",
      location: "Online ili Split",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      description:
        "Individualna izrada CV-a, LinkedIn profila i priprema za intervjue u yacht industriji.",
      highlights: [
        "Profesionalni yacht CV",
        "LinkedIn optimizacija",
        "Interview priprema",
        "Salary negotiation tips",
      ],
      price: "150",
      nextDate: "Fleksibilni termini",
    },
    {
      id: "breakfast-service",
      icon: faCoffee,
      title: "Breakfast Service Mastery",
      duration: "Pola Dana",
      location: "Yacht ili Hotel",
      image:
        "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800&q=80",
      description:
        "Specijalizacija za breakfast service - od pripreme do prezentacije.",
      highlights: [
        "Continental vs American breakfast",
        "Egg preparation mastery",
        "Coffee art basics",
        "Morning service protokol",
      ],
      price: "150",
      nextDate: "9. veljače 2026",
    },
  ];

  return (
    <section
      className="modules-section section-padding"
      id="modules"
      aria-labelledby="modules-heading"
    >
      <div className="container">
        <header className="modules-header">
          <div className="modules-badge" aria-label="Specijalizacija">
            Nadogradi svoje vještine
          </div>
          <h2 id="modules-heading">Pojedinačni moduli</h2>
          <div className="gold-line" aria-hidden="true"></div>
          <p>
            Premium vještine = premium plaća. Izdvoji se i postani tražena u
            charter industriji.
          </p>
        </header>

        <div className="modules-info-box">
          <div className="modules-info-item">
            <FontAwesomeIcon icon={faTrophy} aria-hidden="true" />
            <div>
              <strong>Konkurentna prednost</strong>
              <p>
                Sommelier ili mixology specijalizacija te izdvaja od
                konkurencije i otvara vrata premium pozicijama
              </p>
            </div>
          </div>
          <div className="modules-info-item">
            <FontAwesomeIcon icon={faEuroSign} aria-hidden="true" />
            <div>
              <strong>Veća plaća i napojnice</strong>
              <p>
                Specijalizirane vještine znače bolje plaćene pozicije i značajno
                veće napojnice od VIP gostiju
              </p>
            </div>
          </div>
          <div className="modules-info-item">
            <FontAwesomeIcon icon={faCheck} aria-hidden="true" />
            <div>
              <strong>Pristupačno i fleksibilno</strong>
              <p>
                Odaberi samo module koji te zanimaju, uči u svom tempu i
                prilagodi program svojim potrebama
              </p>
            </div>
          </div>
          <div className="modules-info-item">
            <FontAwesomeIcon icon={faClock} aria-hidden="true" />
            <div>
              <strong>Brza specijalizacija</strong>
              <p>
                Za 1 dan postani specijalistkinja u specifičnom području - bez
                potrebe za dugotrajnom dodatnom obukom
              </p>
            </div>
          </div>
        </div>

        <div className="modules-grid">
          {modules.map((module) => (
            <article
              className="module-card"
              key={module.id}
              aria-labelledby={`module-title-${module.id}`}
            >
              <div className="module-image">
                <img
                  src={module.image}
                  alt={`${module.title} - specijalistički modul`}
                  loading="lazy"
                />
              </div>

              <div className="module-body">
                <div className="module-meta" aria-label="Informacije o modulu">
                  <div className="module-meta-item">
                    <FontAwesomeIcon icon={faClock} aria-hidden="true" />
                    <span>{module.duration}</span>
                  </div>
                  <div className="module-meta-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} aria-hidden="true" />
                    <span>{module.location}</span>
                  </div>
                </div>

                <h3 className="module-title" id={`module-title-${module.id}`}>
                  {module.title}
                </h3>
                <p className="module-description">{module.description}</p>

                <div className="module-highlights">
                  <h4>Što ćeš naučiti:</h4>
                  <ul className="module-highlights-list">
                    {module.highlights.map((highlight, index) => (
                      <li key={index}>
                        <FontAwesomeIcon icon={faCheck} aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="module-next-date">
                  <strong>Sljedeći termin:</strong> {module.nextDate}
                </div>
              </div>

              <div className="module-footer">
                <div className="module-price">
                  <span className="module-price-label">Cijena</span>
                  <span
                    className="module-price-amount"
                    aria-label={`Cijena ${module.price} eura`}
                  >
                    €{module.price}
                  </span>
                </div>

                <a
                  href="#contact"
                  className="btn btn-gold module-cta"
                  aria-label={`Prijavi se za ${module.title}`}
                >
                  Prijavi Se
                </a>
              </div>
            </article>
          ))}
        </div>

        <div
          className="modules-cta-box"
          role="region"
          aria-label="Dodatne informacije"
        >
          <h3>Investiraj u svoju budućnost</h3>
          <p>
            Svatko tko ulaže u sebe - osvaja. Specijalizirane vještine su tvoj
            najbrži put do bolje plaćenih pozicija, većih napojnica i karijere
            kakvu želiš.
          </p>
          <div className="modules-cta-buttons">
            <a
              href="#contact"
              className="btn btn-gold"
              aria-label="Rezerviraj svoje mjesto na modulima"
            >
              Rezerviraj Mjesto
            </a>
            <a
              href="#programs"
              className="btn btn-outline-gold"
              aria-label="Vrati se na programe"
            >
              Vidi Programe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;
