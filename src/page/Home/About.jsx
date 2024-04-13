import React from "react";
import { useInView } from "react-intersection-observer";
import "../../scss/About.scss";
function About() {
  const [refKnow, inViewKnow] = useInView({
    triggerOnce: true,
  });

  const [refSkills, inViewSkills] = useInView({
    triggerOnce: true,
  });
  return (
    <section className="container-about" id="about">
      <div className="container-me">
        <h2 className="title-me">ABOUT ME</h2>
        <div className="border"></div>
        <p className=" p-me">
          Vous trouverez ici plus d'informations sur moi, ce que je fais et mes
          compétences actuelles, principalement en termes de programmation et de
          technologie.
        </p>
      </div>
      <div
        className={`container-know ${inViewKnow ? "animate" : ""}`}
        ref={refKnow}
      >
        <h3 className="title-know">Get to know me!</h3>
        <p className="p-know">
          Je suis un passionné de développement web basé à Lyon, âgé de 24 ans.
          Formé chez OpenClassrooms, j'ai acquis de solides compétences en
          programmation, en frameworks web modernes et en technologies, me
          permettant de créer des sites web attrayants et fonctionnels. Mon
          objectif ? Continuer à apprendre et à évoluer dans ce domaine en
          constante évolution. J'aspire à concevoir des expériences en ligne
          exceptionnelles pour aider les entreprises à atteindre leurs objectifs
          digitaux. Si vous partagez ma passion pour le développement web ou si
          vous souhaitez en savoir plus sur mon travail, n'hésitez pas à me
          contacter. Je suis ouvert aux collaborations et aux opportunités de
          réseautage, et je serais ravi de discuter de projets web passionnants.
          Merci d'avoir visité mon portfolio.
        </p>
        <a className="btn-know" href="#contact">
          CONTACT
        </a>
      </div>
      <div
        className={`container-skills ${inViewSkills ? "animate" : ""}`}
        ref={refSkills}
      >
        <h3 className="title-skills">My Skills</h3>
        <div className="display-skills">
          <div className="skills">HTML</div>
          <div className="skills">CSS</div>
          <div className="skills">JavaScript</div>
          <div className="skills">React</div>
          <div className="skills">SASS</div>
          <div className="skills">GitHub</div>
          <div className="skills">SEO</div>
          <div className="skills">REDUX</div>
          <div className="skills">MongoDB</div>
          <div className="skills">Vite.js</div>
          <div className="skills">Figma</div>
          <div className="skills">Jest</div>
        </div>
      </div>
    </section>
  );
}

export default About;
