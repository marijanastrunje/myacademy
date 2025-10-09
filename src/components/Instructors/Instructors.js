import React from "react";
import marina from "../../assets/img/marina.JPG";
import marijana from "../../assets/img/marijana.JPG";
import "./Instructors.css";

const Instructors = () => {
  const instructors = [
    {
      name: "Marina",
      title: "Co-Founder",
      image: marina,
      description:
        "Marina je multidisciplinarna umjetnica i vrsna stručnjakinja za usluge čija kreativnost ne poznaje granice. Diplomirala je modni dizajn i u svaki detalj unosi profinjenu estetiku i umjetnički stil, pretvarajući uslugu u nezaboravno iskustvo. S bogatim iskustvom na luksuznim jahtama i u prestižnom restoranu u Dublinu, Marina je poznata stručnjakinja za silver service. Strastvena gurmanska i vinska znalica, podučava ne samo besprijekornu tehniku ​​već i umijeće stvaranja nezaboravnih, senzornih iskustava za goste, usavršenih na proslavljenom katamaranu Sunreef 60.",
      expertise: [
        "Silver service",
        "Wine pairing",
        "Dekoracije",
        "Fine dining",
        "VIP protokol",
      ],
    },
    {
      name: "Marijana",
      title: "Co-Founder",
      image: marijana,
      description:
        "Marijana je projektna menadžerica s iskustvom u vođenju tvrtki, marketingu i razvoju web rješenja. Radila je kao profesionalni kuhar na jahtama na Baltičkom i Francuskom moru, koktel majstor u poznatom Dublinskom klubu te privatni butler na Cipru. Njezino iskustvo na jahtama, uključujući rad na Sunreef 60 katamaranu, gdje je usavršavala silver service i vrhunsku komunikaciju, čine je iznimno sposobnom za edukaciju budućih profesionalaca.",
      expertise: [
        "Mixology",
        "Culinary arts",
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
          <h2>Upoznaj instruktorice</h2>
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
