import "../../scss/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section className="container-footer">
      <div className="div-1-footer">
        <h2>Pouard Samuel</h2>
        <p>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        </div>
      <div className="div-2-footer">
        <h2 className="title-2-footer">SOCIAL</h2>
        <a href="https://www.linkedin.com/in/samuel-pouard-645672184/" className="icon-footer">
        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </a>
        <a href="https://github.com/samuel73000" className="icon-footer">
        <FontAwesomeIcon icon={faGithub} size="2xl" />
        </a>
      </div>
      <p className="copyright-footer">© Copyright 2023. Made by Pouard Samuel</p>
    </section>
  );
}

export default Footer;
