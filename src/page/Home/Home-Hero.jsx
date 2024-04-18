import "../../scss/Home-Hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import TypewriterComponent from "typewriter-effect";
import React, { useState, useEffect, useRef } from "react";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import maltSVG from "../../Asset/malt.svg";
import maltHoverSVG from "../../Asset/malt2.svg";
import { useTranslation } from 'react-i18next';


function HomeHero() {
  const { t } = useTranslation();
  const [showButton, setShowButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const homeHeroRef = useRef();

  const handleScroll = () => {
    if (
      homeHeroRef.current &&
      window.pageYOffset > homeHeroRef.current.offsetTop
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="container-home">
      <img
        src={require("../../Asset/gif-dev.gif")}
        className="gif-dev-home"
        alt="gif d'un dev"
      ></img>
      <div className="container-h1-home">
        <h1 aria-label="HEY" className="h1-home">
          <TypewriterComponent
            options={{ autoStart: true }}
            onInit={(typewriter) => {
              typewriter
                .start()
                .typeString(t('HomeHero.typeString1'))
                .pauseFor(2500)
                .deleteAll();
              typewriter
                .typeString(t('HomeHero.typeString2'))
                .pauseFor(2500)
                .deleteAll();
              typewriter
                .typeString(t('HomeHero.typeString3'))
                .pauseFor(2500)
                .deleteAll();
              typewriter
                .typeString(t('HomeHero.typeString4'))
                .pauseFor(2500)
                .deleteAll();
              typewriter
                .typeString(t('HomeHero.typeString1'))
                .pauseFor(2500);
            }}
          />
        </h1>
      </div>
      <div className="container-p-home">
        <p className="p-home">
        {t('HomeHero.pHome')}
        </p>
      </div>
      <div className="btn-container-home">
        <a
          href="https://www.linkedin.com/in/samuel-pouard-645672184/"
          target="_blank"
          rel="noreferrer"
          className="btn-home"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2xl" className="icon-home" />
          LinkedIn
        </a>
        <a
          href="https://github.com/samuel73000"
          target="_blank"
          rel="noreferrer"
          className="btn-home"
        >
          <FontAwesomeIcon icon={faGithub} size="2xl" className="icon-home" />
          GitHub
        </a>

        <a
          href="https://www.malt.fr/profile/yousam"
          target="_blank"
          rel="noreferrer"
          className={`btn-home ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={isHovered ? maltHoverSVG : maltSVG}
            alt="logo-Malt"
            className={isHovered ? "btn-home-img-malt2" : "btn-home-img"}
          />
          Malt
        </a>
      </div>
      <div ref={homeHeroRef}></div>
      <button
        onClick={scrollToTop}
        className={`scroll-to-top ${showButton ? "visible" : ""}`}
      >
        <FontAwesomeIcon icon={faChevronUp} size="xl" />
      </button>
    </section>
  );
}

export default HomeHero;
