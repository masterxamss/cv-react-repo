import React from "react";

const LegalMentions = () => {
  return (
    <main> 
      <section className="legal-mentions-container px-5 pb-5 mb-5">
        <div className="section-title">
          <h1 className="text-uppercase text-center fluid pt-4">
            Mentions légales
          </h1>
          <span></span>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Éditeur du site
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h3>John Doe</h3>
                  <address className="mb-0 fw-bold">
                    <i className="fa-solid fa-location-dot text-black"></i> 40 Rue Laure Diebold<br />69009 Lyon, France
                  </address>
                  <p className="text-primary m-0">
                    <i className="fa-solid fa-mobile-screen text-black"></i> 06 20 30 40 50
                  </p>
                  <p>
                    <i className="fa-solid fa-envelope text-black"></i>
                    <a href="mailto:john.doe@gmail.com" className="m-0 text-primary"> john.doe@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Hébergeur
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h3>Always Data</h3>
                  <address className="fw-bold">
                    91 rue du Faubourg Saint Honoré<br />75008 Paris
                  </address>
                  <i className="fa-solid fa-globe"></i>
                  <a href="https://www.alwaysdata.com" target="_blank" className="text-primary"> www.alwaysdata.com</a>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Crédits
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h3>Crédits</h3>
                  <p className="fw-bold">Site développé par John Doe, étudiant du CEF.</p>
                  <p className="fw-bold">Les images libres de droit sont issues du site
                    <a href="https://pixabay.com" target="_blank" className="text-primary fw-bold"> Pixabay</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LegalMentions;
