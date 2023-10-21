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
    descriptionModal: [
      "Welcome to Booki, a fictional travel agency created as part of my web development training. Our website, developed in HTML and CSS, is fully responsive, ensuring an optimal user experience on all devices.Explore imaginary destinations, discover fictional hotels, fabulous flights, and extraordinary activities. Our inspiring design captures the spirit of travel. Book your imaginary adventures with ease through our user-friendly website. At Booki, we believe that the journey begins with imagination. Enjoy the experience, even in the realm of make-believe. Bon voyage with Booki!",
      "OhMyFood is a responsive website I designed during my OpenClassrooms web integration training. Please note that it's a fictional project developed solely for training purposes. It's built using HTML and SCSS with a mobile-first approach, ensuring it looks great on all devices. I've integrated CSS animations to enhance the user experience, making OhMyFood engaging and visually appealing. This project demonstrates my skills in web integration, highlighting my ability to create captivating, responsive websites",
      "Print-it is a web project I completed during my web integration training at OpenClassrooms. Designed to enhance my JavaScript programming skills, this fictitious site represents a significant milestone in my journey. Using HTML, CSS, and JavaScript, I created an interactive experience for users, engaging and involving them. This endeavor helped refine my web integration skills while exploring the power of JavaScript. Print-it embodies my commitment to continuous learning and growth as a web developer. It symbolizes the successful fusion of technology and user-centered design, a crucial skill in the field of web integration",
      "Kasa is a web project I designed during my web integration training at OpenClassrooms, with a primary focus on mastering React. This fictional platform, purpose-built for educational exploration, was brought to life using React and SCSS. The central goal of Kasa was to advance my expertise in creating dynamic and responsive user interfaces. It allowed me to delve deep into React, harnessing its power to build interactive and engaging web experiences. While Kasa may be a fictional creation, it is a testament to my commitment to honing my skills in web integration and exploring the capabilities of React. It signifies my journey towards crafting seamless and captivating digital interfaces.This experience has empowered me to blend technology with user-centered design, a fundamental skill in the realm of web integration. Kasa showcases my evolving proficiency and enthusiasm for creating exceptional web experiences that resonate with users and elevate the digital landscape",
      "Argent Bank: A Showcase of My React Skills Argent Bank is a web project I crafted during my web integration training at OpenClassrooms, serving as a testament to my growing expertise in web development. Developed using React and SCSS, I leveraged the power of Redux Toolkit to manage the application's state seamlessly. This project was a pivotal milestone in my journey, where I delved into the world of API requests by integrating a JSON API for dynamic data handling. It not only solidified my front-end development skills but also enabled me to create an immersive and interactive user experience. While Argent Bank remains a fictional concept, it highlights my commitment to mastering the art of web integration and showcases my proficiency in React. This experience signifies my evolution as a developer, capable of creating seamless and engaging web interfaces that resonate with users and breathe life into the digital realm",
      "724events is a website that I designed as part of my web integration training at OpenClassrooms. Developed using React and SCSS, this interactive site had the primary objective of introducing me to the Jest tool for unit testing. It showcases my React development skills while ensuring code quality through the implementation of unit tests with Jest. This project provided me with the opportunity to delve deeply into debugging and testing, two essential skills for ensuring the proper functioning of applications. As a developer, I tackled the challenges of debugging, tracking down bugs, and ensuring the site operates optimally. Furthermore, I learned to create rigorous unit tests with Jest to enhance the application's reliability. 724events illustrates my commitment to mastering React development while emphasizing code quality through rigorous testing. It reflects my evolution as a developer, capable of creating high-quality interactive applications while being confident in the robustness of my code.",
    ],
    git: [
      "https://github.com/samuel73000/booki",
      "https://github.com/samuel73000/OhMyFood",
      "https://github.com/samuel73000/Print-it",
      "https://github.com/samuel73000/Kasa",
      "https://github.com/samuel73000/ArgentBank",
      "https://github.com/samuel73000/724events",
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
          descriptionModal={propsProject.descriptionModal[0]}
          git={propsProject.git[0]}
        />

        <ComponentProject
          img={propsProject.img[1]}
          title={propsProject.title[1]}
          p={propsProject.p[1]}
          a={propsProject.a[1]}
          descriptionModal={propsProject.descriptionModal[1]}
          git={propsProject.git[1]}
        />

        <ComponentProject
          img={propsProject.img[2]}
          title={propsProject.title[2]}
          p={propsProject.p[2]}
          a={propsProject.a[2]}
          descriptionModal={propsProject.descriptionModal[2]}
          git={propsProject.git[2]}
        />

        <ComponentProject
          img={propsProject.img[3]}
          title={propsProject.title[3]}
          p={propsProject.p[3]}
          a={propsProject.a[3]}
          descriptionModal={propsProject.descriptionModal[3]}
          git={propsProject.git[3]}
        />

        <ComponentProject
          img={propsProject.img[4]}
          title={propsProject.title[4]}
          p={propsProject.p[4]}
          a={propsProject.a[4]}
          descriptionModal={propsProject.descriptionModal[4]}
          git={propsProject.git[4]}
        />

        <ComponentProject
          img={propsProject.img[5]}
          title={propsProject.title[5]}
          p={propsProject.p[5]}
          a={propsProject.a[5]}
          descriptionModal={propsProject.descriptionModal[5]}
          git={propsProject.git[5]}
        />
      </div>
    </section>
  );
}

export default Projects;
