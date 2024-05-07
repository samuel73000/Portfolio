import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Header: {
          liAccueil: "Home",
          liPrésentation: "About",
          liProjets: "projects",
          liContact: "Contact",
        },
        HomeHero: {
          typeString1: "Hello, My name is Samuel Pouard.",
          typeString2: "I am a freelance front-end developer.",
          typeString3: "Scroll down to see my completed projects.",
          typeString4: "You can contact me on LinkedIn or Malt.",
          pHome:
            "A frontend-focused web developer, freelancing, building the interface of websites and web applications that leads to the overall success of the product.",
        },
        About: {
          TitleMe: "About Me",
          pMe: "Here you'll find more information about me, what I do, and my current skills, mainly in terms of programming and technology.",
          TitleKnow: "Let's get to know each other!",
          pKnow:
            "I'm a passionate React front-end developer, working as a freelancer based in Lyon, aged 24. Trained at OpenClassrooms, I've gained solid programming skills, using modern web frameworks and technologies required to create attractive and functional websites. My goal is to continue learning and evolving in this ever-changing field. As a front-end developer, I specialize in creating responsive and intuitive user interfaces for exceptional online experiences. I'm available for collaborations and open to networking opportunities. You can reach out to me on Malt and LinkedIn to discuss exciting web projects. Thank you for visiting my portfolio!",
          TitleSkills: "My skills",
        },
        Project: {
          titleProjects: "PROJECTS",
          pProjects:
            "Here, you'll find some of my personal projects as well as those completed during my training at OpenClassrooms.",
        },
        Contact: {
          pContact:
            "Feel free to contact me by submitting the form below, and I'll get back to you as soon as possible.",
          name: "Name:",
          email: "Email Address:",
          message: "Message :",
          envoyer: "Send",
          holdername: " Please enter your name:",
          holderemail: " Please enter your email address:",
          holdermessage: " Please enter your message:",
        },
        footer: {
          p1Footer:
            "A frontend-focused web developer, freelancing, building the interface of websites and web applications that leads to the overall success of the product.",
        },
        PropsModal: {
          pBookie:
            "Bookie is a travel agency website that I developed as part of my web integration training at OpenClassrooms. Built with HTML and CSS, this site is fully responsive, providing an optimal user experience on desktop computers, smartphones, and tablets.",
          pOhMyFood:
            "OhMyFood is a responsive website that I designed as part of my web integration training at OpenClassrooms. I developed this project using HTML and SCSS, following a mobile-first approach. The focus was on incorporating CSS animations to enhance the user experience on various devices.",
          pNina:
            "During the Nica Carducci Portfolio project, I created a website as part of my web development training at OpenClassrooms. Using HTML, CSS, and JavaScript, my main goal was to optimize the site's SEO by working on its search engine optimization to achieve high scores in Lighthouse tests.",
          pKasa:
            "Kasa is a website I created as part of my web integration training at OpenClassrooms, focusing on learning React. This project was developed using React and SCSS. Kasa allowed me to master the skills needed to create dynamic and responsive user interfaces.",
          pArgent:
            "Argent Bank is a website I created during my web integration training at OpenClassrooms. Developed using React and SCSS, I used Redux Toolkit to manage the application state. This project allowed me to become familiar with API requests by integrating a JSON API to handle dynamic data while improving my front-end development skills and creating an interactive user experience.",
          p724: "724events was created as part of my web integration training at OpenClassrooms. Designed using React and SCSS, this interactive website's main objective was to familiarize myself with the Jest tool for unit testing. It serves as a showcase for my React development skills while ensuring code quality through the implementation of unit tests with Jest.",

          presentationBookie:
            "Booki is a web project aimed at simplifying the search for accommodations and activities in the city chosen by the user. My role as a Front-End developer was to take the mockups provided by the UI designer and integrate them using HTML and CSS.",
          presentationOhMyFood:
            "OhMyFood is a restaurant startup aiming to develop a website listing menus from gourmet restaurants. My role as a developer was to create the website while adhering to the mockups provided by the UX design team.",
          presentationNina:
            "Nina Carducci is the website of a professional photographer specializing in portraits and event photography. The purpose of the website is to showcase the photographer's portfolio and highlight her achievements.",
          presentationKasa:
            "I worked as a front-end developer on the Kasa project, which involved a complete redesign of the website, including a transition from ASP.NET to a modern JavaScript stack. My role was to design a web platform using React for the front-end and Node.js for the back-end, following the mockups provided by the designer.",
          presentationArgent:
            "As a front-end developer at Argent Bank, my main mission was to create a user dashboard with an authentication system using React and Redux. This task involved migrating an existing website from HTML/CSS to this new platform.",
          presentation724:
            "724events is a website that compiles all events created by the company 724events. It highlights the 724events team and offers its services to individuals via a contact form.",

          clientBookie:
            "A company looking to develop a website for accommodation and activity search.",
          clientOhMyFood: "Restaurant startup",
          clientNina: "Nina Carducci, professional photographer.",
          clientKasa: "Startup specializing in peer-to-peer apartment rentals.",
          clientArgent: "Online bank seeking to expand in the banking sector.",
          client724: "Event planning company",

          objectivesBookie:
            "The main challenge was to make the project compatible with various screen sizes while adhering to design specifications. I used Flexbox to create a responsive layout, ensuring a consistent user experience across all devices. I worked closely with the designers to seamlessly integrate visual elements into the layout, thus ensuring an aesthetic and functional presentation on large desktop screens, tablets, and smartphones.",
          objectivesOhMyFood:
            "The project was designed with a mobile-first approach, meaning I prioritized optimizing the user experience on mobile devices. This strategy ensures users a smooth and responsive experience regardless of the device used, from smartphones to desktop computers. Additionally, to make the site even more engaging, I integrated smooth and natural animations. These animations were carefully crafted to enhance the site's interactivity, providing visitors with an immersive and captivating experience.",
          objectivesNina:
            "The project aimed to enhance the overall performance of the website, reduce loading times, and strengthen its optimization for search engines. My involvement included image optimization, restructuring the site's code and structure, implementing local SEO with Schema.org, and adding meta tags for social media. Additionally, I performed SEO optimization, integrated Rich Snippets for better search engine visibility, and conducted thorough analysis with Wave to ensure optimal performance. These improvements resulted in a smoother user experience, increased online visibility, and the ability to attract new customers, notably through Wave optimization for enhanced accessibility.",
          objectivesKasa:
            "The goal was to modernize the existing platform using React to optimize the user experience across various screen sizes. I enhanced the site's interactivity by integrating CSS animations while introducing advanced elements such as creating a carousel to display property images, implementing a filtering function to enhance UX, and dynamically managing property lists based on internal data. Additionally, I used Sass to improve style management.",
          objectivesArgent:
            "As a member of the Argent Bank team, I played a key role in implementing user authentication using JWT and Axios for secure API calls. I led data management via Redux, enabling users to access and modify their information after logging in. We used Swagger for efficient API design and documentation, enhancing security, performance, and user experience in the Argent Bank application. I also defined transaction routes in the Swagger editor, simplifying future management. Additionally, I optimized images for better application performance and created reusable components for good development practices.",
          objectives724:
            "The 724 Events project was assigned to me with several technical issues to resolve. My job was to identify and fix these bugs to improve the stability and performance of the site. To do this, I used Jest unit tests to target the issues and ensure that the fixes were effective.",
        },
      },
    },
    fr: {
      translation: {
        Header: {
          liAccueil: "Accueil",
          liPrésentation: "Présentation",
          liProjets: "Projets",
          liContact: "Contact",
        },
        HomeHero: {
          typeString1: "Bonjour, Je m'appelle Samuel Pouard.",
          typeString2: "Je suis développeur front-end freelance.",
          typeString3: "Faites défiler pour voir mes projets réalisés.",
          typeString4: "Vous pouvez me contacter sur LinkedIn ou Malt.",
          pHome:
            "Un développeur Web axé sur le Frontend, freelance, construisant l'interface des sites Web et des applications Web qui mène au succès global du produit.",
        },
        About: {
          TitleMe: "À PROPOS DE MOI",
          pMe: "Vous trouverez ici plus d'informations sur moi, ce que je fais et mes compétences actuelles, principalement en termes de programmation et de technologie.",
          TitleKnow: "Faisons connaissance !",
          pKnow:
            "Je suis un développeur front-end React passionné, travaillant en freelance et basé à Lyon, âgé de 24 ans. Formé chez OpenClassrooms, j'ai acquis des compétences solides en programmation, en utilisant les frameworks web modernes et les technologies nécessaires à la création de sites web attrayants et fonctionnels. Mon objectif est de continuer à apprendre et à évoluer dans ce domaine en constante évolution. En tant que développeur front-end, je suis spécialisé dans la création d'interfaces utilisateur réactives et intuitives pour des expériences en ligne exceptionnelles. Je suis disponible pour des collaborations et ouvert aux opportunités de réseautage. Vous pouvez me contacter sur Malt et LinkedIn pour discuter de projets web passionnants. Merci de visiter mon portfolio !",
          TitleSkills: "Mes compétences",
        },
        Project: {
          titleProjects: "PROJETS",
          pProjects:
            "Ici, vous trouverez certains de mes projets personnels ainsi que ceux réalisés dans le cadre de ma formation chez OpenClassrooms.",
        },
        Contact: {
          pContact:
            " N'hésitez pas à me contacter en soumettant le formulaire ci-dessous, et je vous répondrai dès que possible.",
          name: "Nom :",
          email: "adresse e-mail :",
          message: "Message :",
          envoyer: "Envoyer",
          holdername: " Entrez votre nom :",
          holderemail: " Entrez votre adresse e-mail :",
          holdermessage: " Entrez votre message :",
        },
        footer: {
          p1Footer:
            " Un développeur Web axé sur le Frontend, freelance, construisant l'interface des sites Web et des applications Web qui mène au succès global du produit.",
        },
        PropsModal: {
          pBookie:
            "Booki est un site web d'agence de voyage que j'ai développé dans le cadre de ma formation en intégration web chez OpenClassrooms. Construit avec HTML et CSS, ce site est entièrement responsive, offrant une expérience utilisateur optimale sur ordinateurs de bureau, smartphones et tablettes.",
          pOhMyFood:
            "OhMyFood est un site web responsive que j'ai conçu dans le cadre de ma formation en intégration web chez OpenClassrooms. J'ai développé ce projet en utilisant HTML et SCSS, en suivant une approche mobile-first. L'accent a été mis sur l'incorporation d'animations CSS pour améliorer l'expérience utilisateur sur différents appareils.",
          pNina:
            "Pendant le projet Portfolio de Nica Carducci, j'ai créé un site web lors de ma formation en développement web chez OpenClassrooms. En utilisant HTML, CSS et JavaScript, mon objectif principal était d'optimiser le référencement du site en travaillant sur son optimisation pour les moteurs de recherche afin d'obtenir des scores élevés dans les tests Lighthouse.",
          pKasa:
            "Kasa est un site web que j'ai créé dans le cadre de ma formation en intégration web chez OpenClassrooms, en mettant l'accent sur l'apprentissage de React. Ce projet a été développé en utilisant React et SCSS. Kasa m'a permis de maîtriser les compétences nécessaires pour créer des interfaces utilisateur dynamiques et responsive.",
          pArgent:
            "Argent Bank est un site web que j'ai créé lors de ma formation en intégration web chez OpenClassrooms. Développé en utilisant React et SCSS, j'ai utilisé Redux Toolkit pour gérer l'état de l'application. Ce projet m'a permis de me familiariser avec les requêtes API en intégrant une API JSON pour gérer des données dynamiques tout en améliorant mes compétences en développement front-end et en créant une expérience utilisateur interactive.",
          p724: "724events a été créé dans le cadre de ma formation en intégration web chez OpenClassrooms. Conçu en utilisant React et SCSS, ce site web interactif avait pour principal objectif de me familiariser avec l'outil Jest pour les tests unitaires. Il sert de vitrine pour mes compétences en développement React tout en assurant la qualité du code grâce à la mise en œuvre de tests unitaires avec Jest",

          presentationBookie:
            "Booki est un projet web visant à simplifier la recherche d'hébergements et d'activités dans la ville choisie par l'utilisateur. Mon rôle en tant que développeur Front-End était de prendre les maquettes fournies par le designer UI et de les intégrer en utilisant HTML et CSS.",
          presentationOhMyFood:
            "OhMyFood est une startup de restauration qui vise à développer un site web répertoriant les menus des restaurants gastronomiques. Mon rôle en tant que développeur était de créer le site web tout en respectant les maquettes fournies par l'équipe de conception UX.",
          presentationNina:
            "Nina Carducci est le site web d'une photographe professionnelle spécialisée dans les portraits et la photographie d'événements. Le but du site web est de présenter le portfolio du photographe et de mettre en valeur ses réalisations.",
          presentationKasa:
            "J'ai travaillé en tant que développeur front-end sur le projet Kasa, qui impliquait une refonte complète du site web, y compris une transition de ASP.NET à une pile JavaScript moderne. Mon rôle était de concevoir une plateforme web en utilisant React pour le front-end et Node.js pour le back-end, en suivant les maquettes fournies par le designer.",
          presentationArgent:
            "En tant que développeur front-end chez Argent Bank, ma mission principale était de créer un tableau de bord utilisateur avec un système d'authentification en utilisant React et Redux. Cette tâche impliquait la migration d'un site web existant de HTML/CSS vers cette nouvelle plateforme.",
          presentation724:
            "724events est un site web qui compile tous les événements créés par l'entreprise 724events. Il met en valeur l'équipe de 724events et propose ses services aux particuliers via un formulaire de contact.",

          clientBookie:
            "Entreprise cherchant à développer un site web pour la recherche d'hébergements et d'activités.",
          clientOhMyFood: "Startup de restauration",
          clientNina: "Nina Carducci, photographe professionnelle.",
          clientKasa:
            "Startup spécialisée dans la location d'appartements entre particuliers.",
          clientArgent:
            "Banque en ligne cherchant à s'étendre dans le secteur bancaire.",
          client724: "Entreprise de planification d'événements",

          objectivesBookie:
            "Le principal défi était de rendre le projet compatible avec diverses tailles d'écran tout en respectant les spécifications de conception. J'ai utilisé Flexbox pour créer une mise en page responsive, garantissant une expérience utilisateur cohérente sur tous les appareils. J'ai travaillé étroitement avec les designers pour intégrer harmonieusement les éléments visuels dans la mise en page, assurant ainsi une présentation esthétique et fonctionnelle sur les grands écrans de bureau, les tablettes et les smartphones.",
          objectivesOhMyFood:
            "Le projet a été conçu avec une approche mobile-first, ce qui signifie que j'ai priorisé l'optimisation de l'expérience utilisateur sur les appareils mobiles. Cette stratégie garantit aux utilisateurs une expérience fluide et réactive quel que soit le dispositif utilisé, des smartphones aux ordinateurs de bureau. De plus, pour rendre le site encore plus attrayant, j'ai intégré des animations douces et naturelles. Ces animations ont été soigneusement conçues pour améliorer l'interactivité du site, offrant aux visiteurs une expérience immersive et captivante.",
          objectivesNina:
            "Le projet visait à améliorer les performances globales du site web, à réduire les temps de chargement et à renforcer son optimisation pour les moteurs de recherche. Mon implication comprenait l'optimisation des images, une refonte du code et de la structure du site, la mise en œuvre du SEO local avec Schema.org, et l'ajout de balises meta pour les médias sociaux. De plus, j'ai effectué une optimisation SEO, intégré des Rich Snippets pour une meilleure visibilité sur les moteurs de recherche, et réalisé une analyse approfondie avec Wave pour garantir des performances optimales. Ces améliorations ont entraîné une expérience utilisateur plus fluide, une meilleure visibilité en ligne et la capacité à attirer de nouveaux clients, notamment grâce à l'optimisation de Wave pour une accessibilité améliorée.",
          objectivesKasa:
            "L'objectif était de moderniser la plateforme existante en utilisant React pour optimiser l'expérience utilisateur sur diverses tailles d'écran. J'ai amélioré l'interactivité du site en intégrant des animations CSS tout en introduisant des éléments avancés, tels que la création d'un carrousel pour afficher les images de propriété, la mise en œuvre d'une fonction de réduction pour améliorer l'UX, et la gestion dynamique des listes de propriétés en fonction des données internes. De plus, j'ai utilisé Sass pour améliorer la gestion des styles.",
          objectivesArgent:
            "En tant que membre de l'équipe d'Argent Bank, j'ai joué un rôle clé dans la mise en œuvre de l'authentification des utilisateurs en utilisant JWT et Axios pour des appels API sécurisés. J'ai dirigé la gestion des données via Redux, permettant aux utilisateurs d'accéder et de modifier leurs informations après la connexion. Nous avons utilisé Swagger pour une conception et une documentation efficaces de l'API, améliorant la sécurité, les performances et l'expérience utilisateur dans l'application Argent Bank. J'ai également défini des routes de transaction dans l'éditeur Swagger, simplifiant la gestion future. De plus, j'ai optimisé les images pour de meilleures performances de l'application et créé des composants réutilisables pour de bonnes pratiques de développement.",
          objectives724:
            "Le projet 724 Events m'a été attribué avec plusieurs problèmes techniques à résoudre. Mon travail consistait à identifier et à corriger ces bugs pour améliorer la stabilité et les performances du site. Pour ce faire, j'ai utilisé des tests unitaires Jest pour cibler les problèmes et m'assurer que les corrections étaient efficaces.",
        },
      },
    },
    // Ajoute d'autres langues si nécessaire
  },
  lng: "fr", // Langue par défaut
  fallbackLng: "en", // Langue de repli si la traduction n'est pas disponible
  detection: {
    order: [
      "navigator",
      "cookie",
      "localStorage",
      "htmlTag",
      "path",
      "subdomain",
    ],
  },
  interpolation: {
    escapeValue: false, // Ne pas échapper les valeurs HTML
  },
});
console.log("i18n initialized with language:", i18n.language);

export default i18n;
