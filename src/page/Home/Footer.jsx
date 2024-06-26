import "../../scss/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <section className="container-footer">
      <div className="div-1-footer">
        <h2 className="title-1-footer">Pouard Samuel</h2>
        <p className="p-1-footer">
        {t("footer.p1Footer")}
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
            aria-label="Linkedin de Samuel Pouard"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
          <a
            href="https://github.com/samuel73000"
            target="_blank"
            rel="noreferrer"
            className="icon-footer"
            aria-label="GitHub de Samuel Pouard"
          >
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
