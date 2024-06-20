import React from "react";
import aboutImg from "../assets/images/john-doe-about.jpg";

const Home = () => {
  const skills = [
    {
      id: 0,
      name: "HTML5",
      percent: "90%",
      bsClasses: "progress-bar bg-danger",
    },
    { id: 1, name: "CSS3", percent: "80%", bsClasses: "progress-bar bg-info" },
    {
      id: 3,
      name: "JAVASCRIPT",
      percent: "70%",
      bsClasses: "progress-bar bg-warning",
    },
    {
      id: 4,
      name: "PHP",
      percent: "60%",
      bsClasses: "progress-bar bg-success",
    },
    { id: 5, name: "REACT", percent: "50%", bsClasses: "progress-bar" },
  ];

  const arrayDataItems = skills.map((skill) => (
    <li key={skill.id}>
      <p>{skill.name + " " + skill.percent}</p>
      <div className="progress">
        <div
          className={skill.bsClasses}
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: skill.percent }}
        ></div>
      </div>
    </li>
  ));

  return (
    <main>
      <section className="hero-banner">
        <div className="content">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <a href="#about" className="btn btn-sm btn-primary fw-bold px-4">
            En savoir plus
          </a>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-container">
          <div className="about-content">
            <h3>À propos</h3>
            <article>
              <p>
                Passionné par l'informatique et les nouvelles technologies, j'ai
                suivi une formation d'
                <strong>intégrateur développeur web</strong> au CEF. Au cours de
                cette formation, j'ai pu acquérir des bases solides pour
                travailler dans le domaine de <strong>dévloppement web</strong>
              </p>
              <p>
                Basé à Lyon, je suis en recherche d'une alternance au sein d'une
                agence digitale pour consolider ma formation de{" "}
                <strong>devellopeur web full stack</strong>
              </p>
              <p>
                J'accorde une attention particulière à la qualité du code que
                j'écris et je respecte les bonnes pratiques du web.
              </p>
            </article>
          </div>
          <div className="skills">
            <img src={aboutImg} alt="about image" />
            <h4>Mes compétences</h4>
            <ul>{arrayDataItems}</ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
