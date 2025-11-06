import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Marina i Marijana su bile izuzetne! Njihova profesionalnost i pažnja prema detaljima su učinile naš charter nezaboravnim. Svaki obrok je bio savršeno poslužen, a atmosfera koju su stvorile bila je topla i prijateljska.",
      author: "James Mitchell",
      role: "Gost, Charter Split 2023",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5,
    },
    {
      text: "Najbolja hostesa s kojom smo imali zadovoljstvo ploviti! Od jutarnje kave do večernje wine selection - sve je bilo besprijekorno. Njezino poznavanje vina i fine dining protokola je na vrhunskoj razini.",
      author: "Sophie Laurent",
      role: "Gost, Charter Dalmacija 2024",
      avatar: "https://i.pravatar.cc/150?img=32",
      rating: 5,
    },
    {
      text: "Rijetko viđam takvu kombinaciju profesionalnosti i topline. Marina je pretvorila naš obiteljski odmor u luksuzno iskustvo koje ćemo pamtiti cijeli život. Svaka preporuka!",
      author: "Andreas Weber",
      role: "Gost, Charter Kornati 2023",
      avatar: "https://i.pravatar.cc/150?img=33",
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
