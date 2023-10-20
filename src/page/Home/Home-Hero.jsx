import "../../scss/Home-Hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import TypewriterComponent from "typewriter-effect";

function HomeHero() {
  return (
    <section className="container-home">
      <img
        src={require("../../Data/gif-dev.gif")}
        className="gif-dev-home"
        alt="gif d'un dev"
      ></img>
      <div>
        <h1 aria-label="HEY" className="h1-home">
          <TypewriterComponent
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
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
                .start();
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
      </div>
      <div class="content">
        <a href="#about">
          <svg id="more-arrows">
            <polygon
              class="arrow-top"
              points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
            />
            <polygon
              class="arrow-middle"
              points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
            />
            <polygon
              class="arrow-bottom"
              points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default HomeHero;
