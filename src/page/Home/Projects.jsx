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
      "Booki est un site web d'agence de voyage que j'ai développé dans le cadre de ma formation d'intégrateur web à OpenClassrooms. Réalisé en HTML et CSS, ce site est entièrement responsive, offrant une expérience utilisateur optimale sur les appareils de bureau, les smartphones et les tablettes",
      "OhMyFood est un site web responsive que j'ai conçu dans le cadre de ma formation en tant qu'intégrateur web chez OpenClassrooms. J'ai développé ce projet en utilisant HTML et SCSS, en suivant une approche mobile-first. L'accent a été mis sur l'incorporation d'animations CSS pour améliorer l'expérience utilisateur sur différents appareils.",
      "Print-it est un site web que j'ai créé pendant ma formation d'intégrateur web chez OpenClassrooms. Réalisé en HTML, CSS et JavaScript, ce projet avait pour principal objectif de renforcer mes compétences en programmation JavaScript. Il offre aux utilisateurs une expérience interactive, contribuant ainsi à l'amélioration de mes compétences en intégration web.",    
      "Kasa est un site web que j'ai créé dans le cadre de ma formation en intégration web chez OpenClassrooms, avec un accent particulier sur l'apprentissage de React. Ce projet a été développé en utilisant React et SCSS . Kasa m'a permis de maîtriser les compétences nécessaires pour créer des interfaces utilisateur dynamiques et réactives.",
      "Argent Bank est un site web que j'ai créé lors de ma formation en intégration web chez OpenClassrooms. Développé en React et SCSS, ce projet m'a permis de me familiariser avec les requêtes API en intégrant une API JSON pour gérer des données dynamiques. Cela a renforcé mes compétences en développement front-end tout en créant une expérience utilisateur interactive.",  
      "724events a été réalisé dans le cadre de ma formation en intégration web chez OpenClassrooms. Conçu en utilisant React et SCSS, ce site interactif avait pour principal objectif de me familiariser avec l'outil Jest pour la création de tests unitaires. Il sert de démonstration de mes compétences en développement React tout en garantissant la qualité du code grâce à l'implémentation de tests unitaires avec Jest."
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
