import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Program je nadmašio sva moja očekivanja! Marina i Marijana su nevjerojatne - njihovo iskustvo i strast prema poslu su me potpuno inspirirali. Nakon tečaja sam odmah dobila posao na luksuznom katamaranu.",
      author: "Ana Marić",
      role: "Hostesa, Sunreef 60",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5,
    },
    {
      text: "Najbolja investicija u moju karijeru! Naučila sam sve od fine dining tehnike do wine pairinga. Praktične vježbe su bile ključne - osjećala sam se spremnom od prvog dana na jahti.",
      author: "Petra Kovač",
      role: "Hostesa, Lagoon 52",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
    },
    {
      text: "Atmosfera na tečaju je bila izuzetna. Sve je bilo profesionalno organizirano, a materijali koje smo dobili su mi i dalje vrhunska referenca. Preporučujem svima koje žele ozbiljnu karijeru u charter industriji!",
      author: "Lucija Novak",
      role: "Hostesa, Bali 4.3",
      avatar: "https://i.pravatar.cc/150?img=9",
      rating: 5,
    },
  ];

  return (
    <section
      className="testimonials-section section-padding"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <header className="testimonials-header">
          <h2 id="testimonials-heading">Što kažu o nama</h2>
          <div className="gold-line" aria-hidden="true"></div>
          <p>
            Pridruži nam se - čekamo te s otvorenim rukama i pričama cura koje
            su već zaživjele svoje snove.
          </p>
        </header>

        <div className="row testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <article
                className="testimonial-card"
                aria-labelledby={`testimonial-author-${index}`}
              >
                <div
                  className="testimonial-rating"
                  aria-label={`Ocjena: ${testimonial.rating} od 5 zvjezdica`}
                  role="img"
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FontAwesomeIcon icon={faStar} key={i} aria-hidden="true" />
                  ))}
                </div>

                <blockquote className="testimonial-text">
                  <p>{testimonial.text}</p>
                </blockquote>

                <footer className="testimonial-author">
                  <img
                    src={testimonial.avatar}
                    alt=""
                    className="testimonial-avatar"
                    loading="lazy"
                    role="presentation"
                  />
                  <div className="testimonial-author-info">
                    <h4 id={`testimonial-author-${index}`}>
                      {testimonial.author}
                    </h4>
                    <p>{testimonial.role}</p>
                  </div>
                </footer>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
