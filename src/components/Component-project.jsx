
function ComponentProject(props){

return(

<div className="div-projects">
          <img
            src={props.img}
            className="img-projects-1"
            alt="screen projects"
          />
          <div>
            <h3 className="title-projects-1">{props.title}</h3>
            <p className="p-projects-1">
              {props.p}
            </p>
          </div>
        </div>
)
}

export default ComponentProject;