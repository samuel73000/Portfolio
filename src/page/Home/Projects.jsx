import "../../scss/Projects.scss";
import ComponentProject from "../../components/Component-project";
import propsProject from "../../Data/PropsProject";

function Projects() {
  return (
    <section id="projects">
      <h2 className="title-projects">PROJECTS</h2>
      <div className="border"></div>
      <p className="p-projects">
        Here, you will find some of my personal projects and those completed for
        my OpenClassrooms training
      </p>
      
      <div className="container-projects">
        <ComponentProject
          img={propsProject.img[0]}
          title={propsProject.title[0]}
          p={propsProject.p[0]}
          a={propsProject.a[0]}
          client={propsProject.client[0]}
          presentation={propsProject.presentation[0]}
          objectives={propsProject.objectives[0]}
          git={propsProject.git[0]}
          tech1={propsProject.tech[0]}
          tech2={propsProject.tech[1]}
          banner={propsProject.banner[0]}
        />

        <ComponentProject
          img={propsProject.img[1]}
          title={propsProject.title[1]}
          p={propsProject.p[1]}
          a={propsProject.a[1]}
          client={propsProject.client[1]}
          presentation={propsProject.presentation[1]}
          objectives={propsProject.objectives[1]}
          git={propsProject.git[1]}
          tech1={propsProject.tech[0]}
          tech2={propsProject.tech[4]}
          banner={propsProject.banner[1]}
        />

        <ComponentProject
          img={propsProject.img[2]}
          title={propsProject.title[2]}
          p={propsProject.p[2]}
          a={propsProject.a[2]}
          client={propsProject.client[2]}
          presentation={propsProject.presentation[2]}
          objectives={propsProject.objectives[2]}
          git={propsProject.git[2]}
          tech1={propsProject.tech[0]}
          tech2={propsProject.tech[1]}
          tech3={propsProject.tech[2]}
          banner={propsProject.banner[2]}
        />

        <ComponentProject
          img={propsProject.img[3]}
          title={propsProject.title[3]}
          p={propsProject.p[3]}
          a={propsProject.a[3]}
          client={propsProject.client[3]}
          presentation={propsProject.presentation[3]}
          objectives={propsProject.objectives[3]}
          git={propsProject.git[3]}
          tech1={propsProject.tech[3]}
          tech2={propsProject.tech[4]}
          banner={propsProject.banner[3]}
        />

        <ComponentProject
          img={propsProject.img[4]}
          title={propsProject.title[4]}
          p={propsProject.p[4]}
          a={propsProject.a[4]}
          client={propsProject.client[4]}
          presentation={propsProject.presentation[4]}
          objectives={propsProject.objectives[4]}
          git={propsProject.git[4]}
          tech1={propsProject.tech[3]}
          tech2={propsProject.tech[4]}
          tech3={propsProject.tech[6]}
          banner={propsProject.banner[4]}
        />

        <ComponentProject
          img={propsProject.img[5]}
          title={propsProject.title[5]}
          p={propsProject.p[5]}
          a={propsProject.a[5]}
          client={propsProject.client[5]}
          presentation={propsProject.presentation[5]}
          objectives={propsProject.objectives[5]}
          git={propsProject.git[5]}
          tech1={propsProject.tech[3]}
          tech2={propsProject.tech[4]}
          tech3={propsProject.tech[5]}
          banner={propsProject.banner[5]}
        />
      </div>
    </section>
  );
}

export default Projects;
