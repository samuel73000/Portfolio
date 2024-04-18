import React from "react";
import { useInView } from "react-intersection-observer";
import "../../scss/About.scss";
import { useTranslation } from "react-i18next";
function About() {
  const { t } = useTranslation();
  const [refKnow, inViewKnow] = useInView({
    triggerOnce: true,
  });

  const [refSkills, inViewSkills] = useInView({
    triggerOnce: true,
  });
  return (
    <section className="container-about" id="about">
      <div className="container-me">
        <h2 className="title-me">{t("About.TitleMe")}</h2>
        <div className="border"></div>
        <p className=" p-me">{t("About.pMe")}</p>
      </div>
      <div
        className={`container-know ${inViewKnow ? "animate" : ""}`}
        ref={refKnow}
      >
        <h3 className="title-know">{t("About.TitleKnow")}</h3>
        <p className="p-know">{t("About.pKnow")}</p>

        <div class="button-container-1">
          <a href="#contact">
            <span class="mas">Contact</span>
            <button id="work" type="button" name="Hover">
              Contact
            </button>
          </a>
        </div>
      </div>
      <div
        className={`container-skills ${inViewSkills ? "animate" : ""}`}
        ref={refSkills}
      >
        <h3 className="title-skills">{t("About.TitleSkills")}</h3>
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
