import React from "react";
import "./Success.css";

const Success = () => {
  return (
    <section
      className="success-section section-padding"
      id="success"
      aria-labelledby="success-heading"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="text-center mb-1">
            <h2 id="success-heading">Kako smo uspjele</h2>
            <div className="gold-line" aria-hidden="true"></div>
            <p className="lead">
              Od prvih dana na jahti do osnivanja prve službene akademije - naša
              priča je dokaz da se snovi mogu ostvariti.
            </p>
          </div>
          {/* Video kolona */}
          <div className="col-lg-6 mb-0">
            <div className="video-wrapper">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/g4-tTNgdrPc"
                  title="Kako smo uspjele - MY Academy priča"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Tekst kolona */}
          <div className="col-lg-6">
            <div className="success-content">
              <p>
                Marina i Marijana su prošle cijeli put od učenica do mentorica.
                Radile su na najluksuznijim katamaranima, ekskluzivnim jahtama,
                u prestižnim restoranima diljem Europe.
              </p>

              <p>
                Nakon 7+ godina iskustva u industriji, odlučile su formalizirati
                svoje znanje i stvoriti prvi službeni program obuke za hostese
                specijalizirane za luksuzne brodove.
              </p>

              <a href="#instructors" className="btn btn-gold">
                Saznaj više o nama
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
