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
      "724events was created as part of my web integration training at OpenClassrooms. Designed using React and SCSS, this interactive website's main goal was to familiarize myself with the Jest tool for unit testing. It serves as a showcase of my React development skills while ensuring code quality through the implementation of unit tests with Jest",
    ],
    a: [
      "https://booki-1.netlify.app/",
      "https://oh-my-food-2.netlify.app/",
      "https://print-it-3.netlify.app/",
      "https://kasa-4.netlify.app/",
      "https://argentbank-5.netlify.app/",
      "https://724events-6.netlify.app/",
    ],
    presentation: [
      "Booki is a web project aimed at simplifying the search for accommodations and activities in the user's chosen city. My role as a Front-End developer was to take the mockups provided by the UI designer and integrate them using HTML and CSS.",
      "OhMyFood is a restaurant startup that aims to develop a website listing menus from gourmet restaurants. My role as a developer was to create the website while adhering to the mockups provided by the UX design team.",
      "I worked as a front-end developer on the Print-it project, which involved a complete website redesign, including the homepage slider.",
      "I worked as a front-end developer on the Kasa project, which involved a complete redesign of the website, including a transition from ASP.NET to a modern JavaScript stack. My role was to design a web platform using React for the front-end and Node.js for the backend, following mockups provided by the designer.",
      "As a front-end developer at Argent Bank, my primary mission was to create a user dashboard with an authentication system using React and Redux. This task involved migrating an existing website from HTML/CSS to this new platform.",
      "724events est un site web qui compile tous les événements créés par l'entreprise 724events. Il présente l'équipe de 724events et offre ses services aux particuliers en utilisant un formulaire de contact",
    ],
    client:[
      "Company looking to develop a website for accommodation and activity search.",
      "Restaurant startup",
      "Printing company",
      "A startup specialized in peer-to-peer apartment rentals.",
      "Online bank looking to expand in the banking sector.",
      "An event planning company",
    ] ,
    objectives:[
      "The main challenge was to make the project compatible with various screen sizes while adhering to the design specifications. I used flexbox to create a responsive layout, ensuring a consistent user experience across all devices. I worked closely with the designers to seamlessly integrate visual elements into the layout, thus ensuring both an aesthetic and functional presentation on large desktop screens, tablets, and smartphones",
      "The project was designed with a 'mobile-first' approach, meaning I prioritized optimizing the user experience on mobile devices. This strategy ensures that users have a smooth and responsive experience regardless of the device they are using, from smartphones to desktop computers. Additionally, to make the site even more appealing, I integrated smooth and natural animations. These animations were carefully crafted to enhance the site's interactivity, providing visitors with an engaging and immersive experience",
      "The objective was to modernize the existing platform using JavaScript to optimize the user experience across various screen sizes. I enhanced the site's interactivity by integrating a slider with active bullet points and text corresponding to the displayed image",
      "The objective was to modernize the existing platform using React to optimize the user experience across various screen sizes. I enhanced the site's interactivity by integrating CSS animations while introducing advanced elements, such as creating a carousel to display property images, implementing a collapse feature to improve UX, and dynamically managing property listings based on internal data. Additionally, I used Sass to enhance style management.",
      "En tant que membre de l'équipe Argent Bank, j'ai joué un rôle central dans la mise en place de l'authentification utilisateur avec JWT (JSON Web Tokens) et Axios pour des appels API sécurisés. J'ai également dirigé la gestion des données via Redux, en permettant notamment aux utilisateurs de récupérer leurs informations en se connectant mais également pouvoir en modifier certaines s'ils le souhaitent. L'utilisation de Swagger a facilité la conception et la documentation des API, accélérant le développement de nouvelles fonctionnalités et renforçant la sécurité, les performances et l'expérience utilisateur dans l'application Argent Bank. Mon rôle comprenait aussi la définition des routes pour les transactions dans l'éditeur de Swagger, ce qui impliquait de choisir les méthodes HTTP appropriées, telles que GET, PUT ou DELETE, pour simplifier leur gestion future. J'ai également contribué au Green Code en optimisant les images pour améliorer les performances de l'application et en créant des composants réutilisables pour favoriser les bonnes pratiques de développement.",
      "The objective was to fix the various bugs that the website had by creating unit tests and using existing tests to identify and correct the bugs. I familiarized myself with Jest",
    ] ,
    git: [
      "https://github.com/samuel73000/booki",
      "https://github.com/samuel73000/OhMyFood",
      "https://github.com/samuel73000/Print-it",
      "https://github.com/samuel73000/Kasa",
      "https://github.com/samuel73000/ArgentBank",
      "https://github.com/samuel73000/724events",
    ],
    tech:[
      require("../../Data/tech/html.png"),
      require("../../Data/tech/css.png"),
      require("../../Data/tech/js.png"),
      require("../../Data/tech/React.png"),
      require("../../Data/tech/sass.png"),
      require("../../Data/tech/jest.png"),
      require("../../Data/tech/redux.png")
    ],
    banner:[
      require("../../Data/banner/banner_booki.png"),
      require("../../Data/banner/banner_ohmyfood.png"),
      require("../../Data/banner/banner-print.png"),
      require("../../Data/banner/banner_kasa.png"),
      require("../../Data/banner/banner_argent.png"),
      require("../../Data/banner/banner-724.png"),
    ],
  };

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
