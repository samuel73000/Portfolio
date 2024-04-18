import "../../scss/Header.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';
function Header() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id="home">
      <nav className="container-header">
        <div className="container-logo">
          <a href="#home">
            <img
              src={require("../../Asset/gif-header.gif")}
              alt="Logo-du-site"
              className="header-logo"
            />
          </a>
          <p className="header-p">Pouard Samuel</p>
        </div>
        <ul className="container-nav SMN_effect-6">
          <li>
            <a href="#home" className="header-li" data-hover="Accueil">
            {t('Header.liAccueil')}
            </a>
          </li>
          <li>
            <a href="#about" className="header-li" data-hover="Présentation">
            {t('Header.liPrésentation')}
            </a>
          </li>
          <li>
            <a href="#projects" className="header-li" data-hover="Projets">
            {t('Header.liProjets')}
            </a>
          </li>
          <li>
            <a href="#contact" className="header-li" data-hover="Contact">
            {t('Header.liContact')}
            </a>
          </li>
        </ul>
        <button className="header-modal" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} className="header-bars" />
        </button>
      </nav>
      {isMobileMenuOpen && (
        <nav className="container-nav-mobile">
          <ul className="ul-mobile">
            <a href="#home">
              <li className="li-mobile">{t('Header.liAccueil')}</li>
            </a>
            <a href="#about">
              <li className="li-mobile">{t('Header.liPrésentation')}</li>
            </a>
            <a href="#projects">
              <li className="li-mobile">{t('Header.liProjets')}</li>
            </a>
            <a href="#contact">
              <li className="li-mobile">{t('Header.liContact')}</li>
            </a>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
