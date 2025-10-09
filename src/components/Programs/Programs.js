import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCheck,
  faVideo,
  faUsers,
  faAward,
  faShip,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Programs.css";

const Programs = () => {
  const programs = [
    {
      id: "introductory",
      badge: "Online",
      badgeType: "badge-online",
      title: "Introductory course",
      subtitle: "Online priprema za Luxury tečajeve",
      duration: "5 Sati",
      format: "Video call",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      description:
        "Obavezna online priprema za cure bez iskustva koje žele ići na Luxury tečaj. Individualni video call sa Marinom i Marijanom.",
      highlights: [
        "Online predavanje",
        "Uvod u rad na luksuznim brodovima",
        "Osnovni protokoli i očekivanja",
        "Priprema za Luxury program",
        "Q&A sesija - pitaj što god želiš",
      ],
      price: "129",
      cta: "Rezerviraj Mjesto",
    },
    {
      id: "foundation",
      badge: "Ulazak u industriju",
      title: "Foundation program",
      subtitle: "Za potpune početnice",
      duration: "7 Dana",
      format: "Praksa",
      availableDates: "19. studenog 2025 i 1. travnja 2026",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      description:
        "Kompletan program za ulazak u charter industriju. Idealno za cure koje nikad nisu radile na brodu.",
      highlights: [
        "Osnove rada na brodu i sigurnosni protokoli",
        "Housekeeping i održavanje interijera",
        "Osnovne kulinarske vještine",
        "Komunikacija s posadom i gostima",
        "Osnovno baratanje s konopima i privezivanje",
        "Time management i rad pod pritiskom",
        "Izrada CV-a i priprema za intervju",
      ],
      price: "899",
      cta: "Prijavi Se",
    },
    {
      id: "luxury-yacht",
      badge: "Launch cijena",
      badgeType: "badge-launch",
      featured: true,
      title: "Luxury yacht hostess",
      subtitle: "Za jahte 40m+ i Sunreef 60+ (bez kuhanja)",
      duration: "7 Dana",
      format: "Praksa",
      availableDates: "30. listopada i 11. studenog 2025",
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
      description:
        "Prvi službeni tečaj za hostese na luksuznim brodovima. Rad s profesionalnim kuharom - fokus na silver service i VIP protokol.",
      highlights: [
        "Silver service za VIP goste",
        "Wine pairing - program o vinima",
        "Mixology - premium bartending",
        "VIP protokol, etiketa i diskrecija",
        "Decoration skills - luksuzni dekor",
        "Housekeeping i deck obaveze vrhunskog nivoa",
        "Teamwork, komunikacija i profesionalne vještine",
      ],
      price: "1.495",
      originalPrice: "1.795",
      discount: "Launch cijena vrijedi samo za 30.10.2025.",
      cta: "Osiguraj mjesto",
    },
    {
      id: "luxury-catamaran",
      badge: "Launch cijena",
      badgeType: "badge-launch",
      featured: true,
      title: "Luxury catamaran hostess",
      subtitle: "Za katamarane i jahte do 40m (sa kuhanjem)",
      duration: "7 Dana",
      format: "Praksa",
      availableDates: "30. listopada i 11. studenog 2025",
      image:
        "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
      description:
        "Prvi službeni tečaj za hostese na luksuznim katamaranima. Kompletan program - od fine dining kulinarstva do vrhunskog servisa.",
      highlights: [
        "Fine dining kulinarstvo i napredne tehnike",
        "Plating i profesionalna prezentacija",
        "Wine pairing i teorija vina",
        "Mixology - kokteli i bartending",
        "Service skills i VIP protokol",
        "Decoration skills",
        "Housekeeping i deck obaveze",
      ],
      price: "1.595",
      originalPrice: "1.895",
      discount: "Launch cijena vrijedi samo za 30.10.2025.",
      cta: "Osiguraj Mjesto",
    },
  ];

  const credibilityItems = [
    { icon: faAward, text: "7+ godina iskustva u industriji" },
    { icon: faUsers, text: "10+ hostesa individualno mentorirano" },
    { icon: faShip, text: "Partneri vodeće charter tvrtke" },
  ];

  return (
    <section className="programs-section section-padding" id="programs">
      <div className="container">
        <div className="programs-hero">
          <h2>Naši programi</h2>
          <p className="subtitle">
            Prvi službeni tečaj za hostese na luksuznim katamaranima i jahtama
            do 40m
          </p>
          <div className="gold-line"></div>
          <p>
            Mi smo u industriji 7+ godina i odlučile smo formalizirati naše
            iskustvo i znanje u profesionalne programe. Budi dio prve službene
            generacije hostesa specijaliziranih za ovaj segment nautičkog
            turizma.
          </p>
        </div>

        <div className="launch-alert">
          <div className="launch-badge">Launch ponuda - 30.10. 2025</div>
          <h3>Postani dio prve službene generacije - 1.495€</h3>
          <p style={{ marginBottom: "1rem" }}>
            Prvih 8 polaznika dobiva posebnu launch cijenu od{" "}
            <strong>1.495€</strong> (redovna cijena: 1.795€).
          </p>
          <p
            style={{
              marginBottom: "0",
              fontSize: "1.125rem",
              fontWeight: "600",
            }}
          >
            Cjelosezonsko zapošljavanje za 2026 zaključuje se s krajem 2025. -
            Zadnja prilika za praktičnu obuku ove godine!
          </p>
          <p style={{ marginTop: "1rem", marginBottom: "0" }}>
            <strong>Dostupni termini:</strong> 30. listopada • 11. studenog 2025
            <br />
            Maksimalno 8 polaznika po programu
          </p>
          <a
            href="#contact"
            className="btn btn-gold"
            style={{ marginTop: "1.5rem" }}
          >
            Rezerviraj mjesto
          </a>
        </div>

        <div className="programs-grid">
          {programs.map((program) => (
            <div
              className={`program-card ${program.featured ? "featured" : ""}`}
              key={program.id}
            >
              <div className={`program-badge ${program.badgeType || ""}`}>
                {program.badge}
              </div>

              <div className="program-image">
                <img src={program.image} alt={program.title} />
              </div>

              <div className="program-body">
                <div className="program-meta">
                  <div className="program-meta-item">
                    <FontAwesomeIcon icon={faClock} />
                    <span>{program.duration}</span>
                  </div>
                  <div className="program-meta-item">
                    <FontAwesomeIcon
                      icon={program.format === "Video Call" ? faVideo : faShip}
                    />
                    <span>{program.format}</span>
                  </div>
                </div>

                <h3 className="program-title">{program.title}</h3>
                <p className="program-subtitle">{program.subtitle}</p>
                <p className="program-description">{program.description}</p>

                {program.availableDates && (
                  <div className="program-dates">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>
                      <strong>Dostupni termini:</strong>{" "}
                      {program.availableDates}
                    </span>
                  </div>
                )}

                <div className="program-highlights">
                  <h4>Program uključuje:</h4>
                  <ul className="program-highlights-list">
                    {program.highlights.map((highlight, index) => (
                      <li key={index}>
                        <FontAwesomeIcon icon={faCheck} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="program-footer">
                <div className="program-price">
                  <span className="program-price-label">Cijena</span>
                  <div>
                    {program.originalPrice && (
                      <span className="program-price-original">
                        €{program.originalPrice}
                      </span>
                    )}
                    <span className="program-price-amount">
                      €{program.price}
                    </span>
                  </div>
                  {program.discount && (
                    <span className="program-price-discount">
                      {program.discount}
                    </span>
                  )}
                </div>
                <a href="#contact" className="btn btn-gold program-cta">
                  {program.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="credibility-section">
          <h3>Zašto nam možeš vjerovati?</h3>
          <div className="credibility-items">
            {credibilityItems.map((item, index) => (
              <div className="credibility-item" key={index}>
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
