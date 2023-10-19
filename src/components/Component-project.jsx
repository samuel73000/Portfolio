import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function ComponentProject(props){

return(

<div className="div-projects">
  <a href={props.a} target="_blank" rel="noreferrer" >
          <img
            src={props.img}
            className="img-projects"
            alt="screen projects"
          /></a>
          <div>
            <div className="container-title-proects">
            <h3 className="title-projects-1">{props.title}</h3>
            <a className="git-projects" href={props.git} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2xl"  />
            </a>
            </div>
            <p className="p-projects">
              {props.p}
            </p>
            </div>
        </div>
)
}

export default ComponentProject;