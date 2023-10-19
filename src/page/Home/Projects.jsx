import "../../scss/Projects.scss";
import ComponentProject from "../../components/Component-project";

function Projects() {
  const propsProject = {
    img: [
      require("../../Data/Booki.png"),
      require("../../Data/ohmyfood.png"),
      require("../../Data/Print-it.png"),
      require("../../Data/kasa.png"),
      require("../../Data/argentBank.png"),
      require("../../Data/77.png"),
    ],
    title: [
      "Booki",
      "Oh my food",
      "Print it",
      "Kasa",
      "ArgentBank",
      "77Events",
    ],
    p: [
      "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally",
    ],
    a: [
      "https://booki-1.netlify.app/",
      "https://oh-my-food-2.netlify.app/",
      "https://print-it-3.netlify.app/",
      "https://kasa-4.netlify.app/",
      "https://argentbank-5.netlify.app/",
      "https://724events-6.netlify.app/",
    ],
  };

  return (
    <section id="projects">
      <div className="border"></div>
      <h2 className="title-projects">PROJECTS</h2>
      <div className="border"></div>
      <p className="p-projects">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </p>

      <div className="container-projects">
        <ComponentProject
          img={propsProject.img[0]}
          title={propsProject.title[0]}
          p={propsProject.p[0]}
          a={propsProject.a[0]}
        />

        <ComponentProject
          img={propsProject.img[1]}
          title={propsProject.title[1]}
          p={propsProject.p[0]}
          a={propsProject.a[1]}
        />

        <ComponentProject
          img={propsProject.img[2]}
          title={propsProject.title[2]}
          p={propsProject.p[0]}
          a={propsProject.a[2]}
        />

        <ComponentProject
          img={propsProject.img[3]}
          title={propsProject.title[3]}
          p={propsProject.p[0]}
          a={propsProject.a[3]}
        />

        <ComponentProject
          img={propsProject.img[4]}
          title={propsProject.title[4]}
          p={propsProject.p[0]}
          a={propsProject.a[4]}
        />

        <ComponentProject
          img={propsProject.img[5]}
          title={propsProject.title[5]}
          p={propsProject.p[0]}
          a={propsProject.a[5]}
        />
      </div>
    </section>
  );
}

export default Projects;
