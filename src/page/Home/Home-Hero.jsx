import "../../scss/Home-Hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import TypewriterComponent from "typewriter-effect";
import React, { useState, useEffect, useRef } from "react";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import maltSVG from "../../Asset/malt.svg";
import maltHoverSVG from "../../Asset/malt2.svg";


function HomeHero() {
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
                .typeString("Bonjour, Je m'appelle Samuel Pouard.")
                .pauseFor(2500)
                .deleteAll();
              typewriter
                .typeString("Je suis développeur front-end freelance.")
                .pauseFor(2500)
                .deleteAll();
              typewriter
                .typeString("Faites défiler pour voir mes projets réalisés.")
                .pauseFor(2500)
                .deleteAll();
              typewriter
                .typeString("Vous pouvez me contacter sur LinkedIn ou Malt.")
                .pauseFor(2500)
                .deleteAll();
              typewriter
                .typeString("Bonjour,Je m'appelle Samuel Pouard.")
                .pauseFor(2500);
            }}
          />
        </h1>
      </div>
      <div className="container-p-home">
        <p className="p-home">
          Un développeur Web axé sur le Frontend, freelance, construisant
          l'interface des sites Web et des applications Web qui mène au succès
          global du produit.
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
          Linkedin
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
