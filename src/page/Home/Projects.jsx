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
      "724Events",
    ],
    p: [
      "Booki is a travel agency website that I developed as part of my web integration training at OpenClassrooms. Built using HTML and CSS, this site is fully responsive, providing an optimal user experience on desktop computers, smartphones, and tablets.",
      "OhMyFood is a responsive website that I designed as part of my web integration training at OpenClassrooms. I developed this project using HTML and SCSS, following a mobile-first approach. Emphasis was placed on incorporating CSS animations to enhance the user experience on various devices.",
      "Print-it is a website that I created during my web integration training at OpenClassrooms. Developed using HTML, CSS, and JavaScript, the main goal of this project was to strengthen my JavaScript programming skills. It provides users with an interactive experience, thus contributing to the enhancement of my web integration skills",    
      "Kasa is a website that I created as part of my web integration training at OpenClassrooms, with a specific focus on learning React. This project was developed using React and SCSS. Kasa allowed me to master the skills necessary for creating dynamic and responsive user interfaces",
      "Argent Bank is a website I created during my web integration training at OpenClassrooms. Developed using React and SCSS, I utilized Redux Toolkit to manage the application's state. This project allowed me to become acquainted with API requests by integrating a JSON API to handle dynamic data while enhancing my front-end development skills and creating an interactive user experience.",  
      "724events was created as part of my web integration training at OpenClassrooms. Designed using React and SCSS, this interactive website's main goal was to familiarize myself with the Jest tool for unit testing. It serves as a showcase of my React development skills while ensuring code quality through the implementation of unit tests with Jest"
    ],
    a: [
      "https://booki-1.netlify.app/",
      "https://oh-my-food-2.netlify.app/",
      "https://print-it-3.netlify.app/",
      "https://kasa-4.netlify.app/",
      "https://argentbank-5.netlify.app/",
      "https://724events-6.netlify.app/",
    ],
    git:[
      "https://github.com/samuel73000/booki",
      "https://github.com/samuel73000/OhMyFood",
      "https://github.com/samuel73000/Print-it",
      "https://github.com/samuel73000/Kasa",
      "https://github.com/samuel73000/ArgentBank",
      "https://github.com/samuel73000/724events"
    ]
  };

  return (
    <section id="projects">
      <div className="border"></div>
      <h2 className="title-projects">PROJECTS</h2>
      <div className="border"></div>
      <p className="p-projects">
      Here, you will find some of my personal projects and those completed for my OpenClassrooms training
      </p>

      <div className="container-projects">
        <ComponentProject
          img={propsProject.img[0]}
          title={propsProject.title[0]}
          p={propsProject.p[0]}
          a={propsProject.a[0]}
          git={propsProject.git[0]}
        />

        <ComponentProject
          img={propsProject.img[1]}
          title={propsProject.title[1]}
          p={propsProject.p[1]}
          a={propsProject.a[1]}
          git={propsProject.git[1]}
        />

        <ComponentProject
          img={propsProject.img[2]}
          title={propsProject.title[2]}
          p={propsProject.p[2]}
          a={propsProject.a[2]}
          git={propsProject.git[2]}
        />

        <ComponentProject
          img={propsProject.img[3]}
          title={propsProject.title[3]}
          p={propsProject.p[3]}
          a={propsProject.a[3]}
          git={propsProject.git[3]}
        />

        <ComponentProject
          img={propsProject.img[4]}
          title={propsProject.title[4]}
          p={propsProject.p[4]}
          a={propsProject.a[4]}
          git={propsProject.git[4]}
        />

        <ComponentProject
          img={propsProject.img[5]}
          title={propsProject.title[5]}
          p={propsProject.p[5]}
          a={propsProject.a[5]}
          git={propsProject.git[5]}
        />
      </div>
    </section>
  );
}

export default Projects;
