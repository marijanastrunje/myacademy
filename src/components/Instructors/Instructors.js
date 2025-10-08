import React from "react";
import "./Instructors.css";

const Instructors = () => {
  const instructors = [
    {
      name: "Marina",
      title: "Co-Founder & Wine Expert",
      badge: "Fashion Designer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
      description:
        "Dolazi iz svijeta mode, diplomirala fashion dizajn. Njezina kreativnost ne poznaje granice – sve što dotakne pretvara u pravu umjetnost. Vrhunska stručnjakinja za silver service s bogatim iskustvom na luksuznim jahtama na Španjolskom moru i u prestižnom Dublinskom klubu.",
      expertise: [
        "Silver Service",
        "Wine Pairing",
        "Dekoracije",
        "Fine Dining",
        "VIP Protokol",
      ],
    },
    {
      name: "Marijana",
      title: "Co-Founder & Project Manager",
      badge: "Culinary Expert",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
      description:
        "Projektna menadžerica s preko pet godina iskustva u vođenju tvrtki i strateškom upravljanju. Marketinški stručnjak, web developer i programer. Radila kao profesionalni kuhar na jahtama (30 i 40 metara) na Baltičkom i Francuskom moru, kao koktel majstor u Dublinu te kao privatni butler na Cipru.",
      expertise: [
        "Mixology",
        "Culinary Arts",
        "Housekeeping",
        "Management",
        "Bartending",
      ],
    },
  ];

  return (
    <section className="instructors-section section-padding">
      <div className="container">
        <div className="instructors-header">
          <h2>Upoznaj Svoj Tim</h2>
          <div className="gold-line"></div>
          <p>
            Profesionalke s preko 7 godina iskustva koje dijele svoju strast,
            znanje i vrhunske vještine iz luksuzne charter industrije.
          </p>
        </div>

        <div className="row">
          {instructors.map((instructor, index) => (
            <div className="col-lg-6" key={index}>
              <div className="instructor-card">
                <div className="instructor-image">
                  <img src={instructor.image} alt={instructor.name} />
                  <div className="instructor-badge">{instructor.badge}</div>
                </div>

                <div className="instructor-body">
                  <h3 className="instructor-name">{instructor.name}</h3>
                  <p className="instructor-title">{instructor.title}</p>
                  <p className="instructor-description">
                    {instructor.description}
                  </p>

                  <div className="instructor-expertise">
                    <h4>Područja Stručnosti:</h4>
                    <div className="expertise-tags">
                      {instructor.expertise.map((skill, idx) => (
                        <span className="expertise-tag" key={idx}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
