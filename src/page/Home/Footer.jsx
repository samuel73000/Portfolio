import "../../scss/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section className="container-footer">
      <div className="div-1-footer">
        <h2 className="title-1-footer">Pouard Samuel</h2>
        <p className="p-1-footer">
          Un développeur Web axé sur le Frontend, freelance, construisant
          l'interface des sites Web et des applications Web qui mène au succès
          global du produit.
        </p>
      </div>
      <div className="div-2-footer">
        <h2 className="title-2-footer">SOCIAL</h2>
        <div className="div-3-footer">
        <a
          href="https://www.linkedin.com/in/samuel-pouard-645672184/"
          target="_blank"
          rel="noreferrer"
          className="icon-footer"
        >
          <p className="seo">hfghff</p>
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          
        </a>
        <a
          href="https://github.com/samuel73000"
          target="_blank"
          rel="noreferrer"
          className="icon-footer"
        >
          <p className="seo">hfg</p>
          <FontAwesomeIcon icon={faGithub} size="2xl" />
          
        </a>
        </div>
        <a
          href="https://www.malt.fr/profile/yousam"
          target="_blank"
          rel="noreferrer"
          className="icon-footer"
        >
          <img
            src={require("../../Asset/malt_logo_white.webp")}
            alt="logomalt"
            className="icon-footer-img"
          />
        </a>
        
      </div>
      <p className="copyright-footer">
        © Copyright 2024. Made by Pouard Samuel
      </p>
    </section>
  );
}

export default Footer;
