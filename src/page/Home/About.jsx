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
          I'm a Frontend Web Developer building the Front-end of Websites and
          Web Applications that leads to the success of the overall product.
          Check out some of my work in the Projects section. I also like sharing
          content related to the stuff that I have learned over the years in Web
          Development so it can help other people of the Dev Community. Feel
          free to Connect or Follow me on my Linkedin where I post useful
          content related to Web Development and Programming I'm open to Job
          opportunities where I can contribute, learn and grow. If you have a
          good opportunity that matches my skills and experience then don't
          hesitate to contact me.
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
