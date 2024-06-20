import React from "react";
import BgImage from "../assets/images/contact-bg.jpg";

const Contact = () => {
  return (
    <main>
      <section className="contact-container">
        <div className="shadow">
          <div className="contact-content">
            <div className="section-title">
              <h1 className="text-uppercase text-center fluid pt-4">
                Me contacter
              </h1>
              <h2 className="text-center fluid fs-5">
                Pour me contacter en vue d'un entretien ou d'une future
                collaboration, merci de remplir le formulaire de contact.
              </h2>
              <span></span>
            </div>
            <div className="w-10">
              <div className="row">
                <div className="col-sm-12 col-md-6 text-center">
                  <h3 className="border-bottom border-2 border-primary py-1 text-start">
                    Formulaire de contact
                  </h3>
                  <form action="submit" className="pt-2">
                    <input
                      className="p-2 my-3 form-control"
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="Votre nom"
                    />
                    <input
                      className="p-2 my-3 form-control"
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="Votre adresse email"
                    />
                    <input
                      className="p-2 my-3 form-control"
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      placeholder="Votre número de téléphone"
                    />
                    <input
                      className="p-2 my-3 form-control"
                      type="text"
                      name="suject"
                      id="suject"
                      required
                      placeholder="Sujet"
                    />
                    <textarea
                      className="p-2 my-3 form-control"
                      name="message"
                      id="message"
                      required
                      placeholder="Votre message"
                      rows={5}
                    ></textarea>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg fw-bold mb-5"
                    >
                      Envoyer
                    </button>
                  </form>
                </div>
                <div className="col-sm-12 col-md-6">
                  <h3 className="border-bottom border-2 border-primary py-1">
                    Mes coordonnées
                  </h3>
                  <address className="mb-0 fw-bold pt-3">
                    <i
                      className="fa-solid fa-location-dot"
                      style={{ color: "#000000" }}
                    ></i>{" "}
                    40 Rue Laure Diebold, 69009 Lyon, France
                  </address>
                  <p className="fw-bold">
                    <i
                      className="fa-solid fa-mobile-screen"
                      style={{ color: "#000000" }}
                    ></i>{" "}
                    06 20 30 40 50
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524621748!2d4.79640397689144!3d45.77866197108091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1spt-PT!2sfr!4v1718659742854!5m2!1spt-PT!2sfr"
                    style={{ border: "0", width: "100%", height: "313px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
