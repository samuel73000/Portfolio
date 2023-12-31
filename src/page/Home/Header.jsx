import "../../scss/Header.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Header() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id="home">
      <nav className="container-header">
      <div className="container-logo">
        <a href="#home">
          <img src={require("../../Asset/gif-header.gif")} alt="Logo" className="header-logo"/>
          </a>
        <p className="header-p">Pouard Samuel</p>
        </div>
          <ul className="container-nav">
            <a href="#home">
              <li className="header-li">Home</li>
              </a>
              <a href="#about">
              <li className="header-li">About</li>
              </a>
              <a href="#projects">
              <li className="header-li">Projects</li>
              </a>
              <a href="#contact">
              <li className="header-li">Contact</li>
              </a>
          </ul>
          <button className="header-modal" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} className="header-bars" />
        </button>
        </nav>
        {isMobileMenuOpen && (
        <nav className="container-nav-mobile">
          <ul className="ul-mobile" >
          <a href="#home">
              <li className="li-mobile">Home</li>
              </a>
              <a href="#about">
              <li className="li-mobile">About</li>
              </a>
              <a href="#projects">
              <li className="li-mobile" >Projects</li>
              </a>
              <a href="#contact">
              <li className="li-mobile">Contact</li>
              </a>
          </ul>
        </nav>
        )}
      
    </header>
  );
}

export default Header;
