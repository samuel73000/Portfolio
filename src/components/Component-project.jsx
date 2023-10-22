import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ComponentProject(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.classList.remove('modal-open');
    } else {
      document.body.classList.add('modal-open');
    }
  };
  
  

  return (
    <div className="div-projects">
      <a href={props.a} target="_blank" rel="noreferrer">
        <img src={props.img} className="img-projects" alt="screen projects" />
      </a>

      <div>
        <h3 className="title-article-projects">{props.title}</h3>

        <p className="p-article-projects">{props.p}</p>
        <button className="plus-projects" onClick={toggleModal}>
          Learn more
        </button>
      </div>

      {isOpen && (
        <div className="modal-projects">
          <div className="container-close-modal">
            <button onClick={toggleModal} className="close-modal">
            <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="container-title-modal">
            <h3 className="title-modal">{props.title}</h3>
            <img src={props.banner} className="banner-modal" alt="banner"/>
            <p className="p-modal">Client : {props.client}</p>
            <p className="p-modal">Presentation : {props.presentation}</p>
            <p className="p-modal">Objectives : {props.objectives}</p>
          </div>
          <div className="container-tech-modal">
            
          <img src={props.tech1} alt="logo"/>
          <img src={props.tech2} alt="logo"/>
          <img src={props.tech3} alt="logo" />
         
          </div>
          <div className="container-btn-modal">
            <a
              href={props.git}
              target="_blank"
              rel="noreferrer"
              className="btn-modal"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" /> GitHub
            </a>
            <a
              href={props.a}
              target="_blank"
              rel="noreferrer"
              className="btn-modal"
            >
              Website
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ComponentProject;
