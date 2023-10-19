import "../../scss/Header.scss";
function Header() {
  return (
    <header id="home">
      <nav className="container-header">
      <div className="container-logo">
        <a href="#home">
          <img src={require("../../Data/gif-header.gif")} alt="Logo" className="header-logo"/>
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
      </nav>
    </header>
  );
}

export default Header;
