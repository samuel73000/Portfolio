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
        <h2 className="title-me">À PROPOS DE MOI</h2>
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
        <h3 className="title-know">Faisons connaissance !</h3>
        <p className="p-know">
          Je suis un développeur front-end React passionné, travaillant en
          freelance et basé à Lyon, âgé de 24 ans. Formé chez OpenClassrooms,
          j'ai acquis des compétences solides en programmation, en utilisant les
          frameworks web modernes et les technologies nécessaires à la création
          de sites web attrayants et fonctionnels. Mon objectif est de continuer
          à apprendre et à évoluer dans ce domaine en constante évolution. En
          tant que développeur front-end, je suis spécialisé dans la création
          d'interfaces utilisateur réactives et intuitives pour des expériences
          en ligne exceptionnelles. Je suis disponible pour des collaborations
          et ouvert aux opportunités de réseautage. Vous pouvez me contacter sur
          Malt et LinkedIn pour discuter de projets web passionnants. Merci de
          visiter mon portfolio !
        </p>
        <a className="btn-know" href="#contact">
          CONTACT
        </a>
      </div>
      <div
        className={`container-skills ${inViewSkills ? "animate" : ""}`}
        ref={refSkills}
      >
        <h3 className="title-skills">Mes compétences</h3>
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
