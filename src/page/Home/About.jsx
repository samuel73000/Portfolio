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
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div
        className={`container-know ${inViewKnow ? "animate" : ""}`}
        ref={refKnow}
      >
        <h3 className="title-know">Get to know me!</h3>
        <p className="p-know">
          I am a web development enthusiast based in Lyon, aged 24. Trained at
          OpenClassrooms, I have gained strong skills in programming, modern web
          frameworks, and technologies, enabling me to create attractive and
          functional websites. My goal? To continue learning and evolving in
          this ever-changing field. I aspire to design exceptional online
          experiences to help businesses achieve their digital objectives. If
          you share my passion for web development or would like to learn more
          about my work, please don't hesitate to contact me. I am open to
          collaboration and networking opportunities, and I would be delighted
          to discuss exciting web-related projects. Thank you for visiting my
          portfolio.
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
          <div className="skills">MySql</div>
          <div className="skills">Vite.js</div>
          <div className="skills">Figma</div>
          <div className="skills">Jest</div>
        </div>
      </div>
    </section>
  );
}

export default About;
