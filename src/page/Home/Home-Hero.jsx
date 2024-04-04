import "../../scss/Home-Hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import TypewriterComponent from "typewriter-effect";
import React, { useState, useEffect, useRef } from "react";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
function HomeHero() {
  const [showButton, setShowButton] = useState(false);
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
  return (
    <section className="container-home">
      <img
        src={require("../../Asset/gif-dev.gif")}
        className="gif-dev-home"
        alt="gif d'un dev"
      ></img>
      <div>
        <h1 aria-label="HEY" className="h1-home">
          <TypewriterComponent
            options={{ autoStart:true }}
            onInit={(typewriter) => {
              typewriter
              .start()
                .typeString("HEY, I'M POUARD SAMUEL.")
                .pauseFor(2500)
                .deleteAll();
              typewriter
                .typeString("Front-End React Developer.")
                .pauseFor(2500)
                .deleteAll();
              typewriter
                .typeString("Located in the city of Lyon, France.")
                .pauseFor(2500)
                .deleteAll();
              typewriter
                .typeString("Scroll to see my projects.")
                .pauseFor(2500)
                .deleteAll()
                typewriter
                .typeString("HEY, I'M POUARD SAMUEL.")
                .pauseFor(2500)
            }}
          />
        </h1>
      </div>
      <p className="p-home">
        A Frontend focused Web Developer building the Frontend of Websites and
        Web Applications that leads to the success of the overall product
      </p>
      <div className="btn-container-home">
        <a
          href="https://www.linkedin.com/in/samuel-p-645672184/"
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
      </div>
      <div ref={homeHeroRef}></div>{" "}
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
