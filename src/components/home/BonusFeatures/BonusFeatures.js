import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShip,
  faHandshake,
  faBriefcase,
  faBook,
  faFileAlt,
  faGem,
  faUserGraduate,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import "./BonusFeatures.css";

const BonusFeatures = () => {
  const bonuses = [
    {
      icon: faShip,
      title: "Boravak na Sunreef 70 katamaranu",
      description:
        "Cijeli tečaj provodiš na luksuznom Sunreef 70 katamaranu - tamo učiš, tamo vježbaš, tamo živiš. Praksa u realnom okruženju s pravom opremom i prostorom kakav ćeš imati na poslu.",
      highlight: "Vrijednost: 5.000€+",
    },
    {
      icon: faHandshake,
      title: "Showcase charter agencijama",
      description:
        "Izravna prezentacija tvojih vještina vodećim charter agencijama. Oni dolaze k tebi - ti pokazuješ što znaš. Mnoge naše polaznice dobiju ponudu za posao odmah nakon showcasea.",
      highlight: "Izravni put do posla",
    },
    {
      icon: faBriefcase,
      title: "Vježbaš tamo gdje radiš",
      description:
        "Nema razlike između učenja i stvarnog rada. Sve što radiš na tečaju - od kuhanja do servisa - radiš u autentičnom luksuznom okruženju s profesionalnom opremom i standardima.",
      highlight: "100% praktična obuka",
    },
    {
      icon: faBook,
      title: "Detaljan priručnik za sve situacije",
      description:
        "Kompletni digitalni priručnik s postupcima, receptima, protokolima i svim detaljima koje ćeš trebati. Tvoja doživotna referenca za svaku situaciju na brodu.",
      highlight: "Pristup zauvijek",
    },
    {
      icon: faFileAlt,
      title: "Profesionalni CV i career coaching",
      description:
        "Izrada vrhunskog CV-a prilagođenog charter industriji, priprema za intervjue, savjeti za pregovaranje i sve što ti treba za konkurentnost na tržištu. Postaneš kandidatkinja kakvu svi žele.",
      highlight: "Konkurentna prednost",
    },
    {
      icon: faUserGraduate,
      title: "Certifikat i preporuke",
      description:
        "Službeni certifikat MY Academy i pisane preporuke od instruktorica s preko 7 godina iskustva u industriji. Potvrda tvoje stručnosti koju poslodavci cijene.",
      highlight: "Priznata kvalifikacija",
    },
  ];

  const valueItems = [
    { icon: faGem, text: "Vrijednost bonusa: 7.000€+" },
    { icon: faAward, text: "Doživotna podrška" },
    { icon: faHandshake, text: "Pristup mreži charter tvrtki" },
  ];

  return (
    <section
      className="bonus-features-section section-padding"
      id="bonuses"
      aria-labelledby="bonus-heading"
    >
      <div className="container">
        <header className="bonus-header">
          <div className="bonus-badge" aria-label="Dodatna vrijednost">
            Uključeno u cijenu
          </div>
          <h2 id="bonus-heading">Što još dobivaš s programom</h2>
          <div className="gold-line" aria-hidden="true"></div>
          <p>
            Cijena programa uključuje daleko više od samog tečaja. Dobivaš
            kompletnu podršku, resurse i pristup industriji koji ti osiguravaju
            uspjeh od prvog dana.
          </p>
        </header>

        <div className="bonus-grid">
          {bonuses.map((bonus, index) => (
            <article className="bonus-card" key={index}>
              <div className="bonus-icon-wrapper" aria-hidden="true">
                <FontAwesomeIcon icon={bonus.icon} />
              </div>
              <div className="bonus-content">
                <h3>{bonus.title}</h3>
                <p>{bonus.description}</p>
                <span className="bonus-highlight">{bonus.highlight}</span>
              </div>
            </article>
          ))}
        </div>

        <div
          className="bonus-cta-box"
          role="region"
          aria-label="Dodatne informacije o vrijednosti programa"
        >
          <div className="bonus-value-proposition">
            {valueItems.map((item, index) => (
              <div className="bonus-value-item" key={index}>
                <FontAwesomeIcon icon={item.icon} aria-hidden="true" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <h3>Ovo nije samo tečaj - ovo je investicija u tvoju budućnost</h3>
          <p>
            Svi bonusi, resursi i podrška su uključeni u cijenu programa. Nema
            skrivenih troškova. Dobivaš sve što ti treba za uspješan start i
            dugotrajnu karijeru u charter industriji.
          </p>

          <a
            href="#programs"
            className="btn btn-gold"
            aria-label="Odaberi svoj program i započni svoju karijeru"
          >
            Započni svoju karijeru
          </a>
        </div>
      </div>
    </section>
  );
};

export default BonusFeatures;
