import React from "react";
import Banner from "../components/Banner";
import imgFreshFood from "../assets/images/portfolio/fresh-food.jpg";
import imgResto from "../assets/images/portfolio/restaurant-japonais.jpg";
import imgSpa from "../assets/images/portfolio/espace-bien-etre.jpg";

const Achievements = () => {
  return (
    <main>
      <Banner />
      <section className="blog-container">
        <div className="section-title">
          <h1 className="text-uppercase text-center fluid pt-4">Portfolio</h1>
          <h2 className="text-center fluid fs-5">
            Voici quelques-unes de mes réalisations
          </h2>
          <span></span>
        </div>
        {/* CARDS */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 pb-4">
              <div className="card text-center">
                <img
                  src={imgFreshFood}
                  className="card-img-top"
                  alt="image code"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold fs-4">Fresh food</h5>
                  <p className="card-text">
                    Réalisation d'un site avec commande en ligne.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                  >
                    Voir
                  </button>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary fw-bold">
                    Site réalisé avec PHP et MySQL
                  </small>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 pb-4">
              <div className="card text-center">
                <img
                  src={imgResto}
                  className="card-img-top"
                  alt="image money"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold fs-4">Restaurant Akira</h5>
                  <p className="card-text">Réalisation d'un site vitrine.</p>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                  >
                    Voir
                  </button>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary fw-bold">
                    Site réalisé avec WordPress
                  </small>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 pb-4">
              <div className="card text-center">
                <img src={imgSpa} className="card-img-top" alt="image google" />
                <div className="card-body">
                  <h5 className="card-title fw-bold fs-4">Espace bien-être</h5>
                  <p className="card-text">
                    Réalisation d'un site vitrine pour un patricien de bien-être
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                  >
                    Voir
                  </button>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary fw-bold">
                    Site réalisé en HTML/CSS
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Achievements;
