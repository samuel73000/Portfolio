import "../../scss/Projects.scss";
import ComponentProject from "../../components/Component-project";
import propsProject from "../../Data/PropsProject";
import { useTranslation } from "react-i18next";
function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects">
      <h2 className="title-projects">{t("Project.titleProjects")}</h2>
      <div className="border"></div>
      <p className="p-projects">
      {t("Project.pProjects")}
      </p>

      <div className="container-projects">
        <ComponentProject
          img={propsProject.img[0]}
          title={propsProject.title[0]}
          p={t("PropsModal.pBookie")}
          a={propsProject.a[0]}
          client={t("PropsModal.clientBookie")}
          presentation={t("PropsModal.presentationBookie")}
          objectives={t("PropsModal.objectivesBookie")}
          git={propsProject.git[0]}
          tech1={propsProject.tech[0]}
          tech2={propsProject.tech[1]}
          banner={propsProject.banner[0]}
          alt={propsProject.alt[0]}
        />
        

        <ComponentProject
          img={propsProject.img[1]}
          title={propsProject.title[1]}
          p={t("PropsModal.pOhMyFood")}
          a={propsProject.a[1]}
          client={t("PropsModal.clientOhMyFood")}
          presentation={t("PropsModal.presentationOhMyFood")}
          objectives={t("PropsModal.objectivesOhMyFood")}
          git={propsProject.git[1]}
          tech1={propsProject.tech[0]}
          tech2={propsProject.tech[4]}
          banner={propsProject.banner[1]}
          alt={propsProject.alt[1]}
        />

        <ComponentProject
          img={propsProject.img[2]}
          title={propsProject.title[2]}
          p={t("PropsModal.pNina")}
          a={propsProject.a[2]}
          client={t("PropsModal.clientNina")}
          presentation={t("PropsModal.presentationNina")}
          objectives={t("PropsModal.objectivesNina")}
          git={propsProject.git[2]}
          tech1={propsProject.tech[0]}
          tech2={propsProject.tech[1]}
          tech3={propsProject.tech[2]}
          banner={propsProject.banner[2]}
          alt={propsProject.alt[2]}
        />

        <ComponentProject
          img={propsProject.img[3]}
          title={propsProject.title[3]}
          p={t("PropsModal.pKasa")}
          a={propsProject.a[3]}
          client={t("PropsModal.clientKasa")}
          presentation={t("PropsModal.presentationKasa")}
          objectives={t("PropsModal.objectivesKasa")}
          git={propsProject.git[3]}
          tech1={propsProject.tech[3]}
          tech2={propsProject.tech[4]}
          banner={propsProject.banner[3]}
          alt={propsProject.alt[3]}
        />

        <ComponentProject
          img={propsProject.img[4]}
          title={propsProject.title[4]}
          p={t("PropsModal.pArgent")}
          a={propsProject.a[4]}
          client={t("PropsModal.clientArgent")}
          presentation={t("PropsModal.presentationArgent")}
          objectives={t("PropsModal.objectivesArgent")}
          git={propsProject.git[4]}
          tech1={propsProject.tech[3]}
          tech2={propsProject.tech[4]}
          tech3={propsProject.tech[6]}
          banner={propsProject.banner[4]}
          alt={propsProject.alt[4]}
        />

        <ComponentProject
          img={propsProject.img[5]}
          title={propsProject.title[5]}
          p={t("PropsModal.p724")}
          a={propsProject.a[5]}
          client={t("PropsModal.client724")}
          presentation={t("PropsModal.presentation724")}
          objectives={t("PropsModal.objectives724")}
          git={propsProject.git[5]}
          tech1={propsProject.tech[3]}
          tech2={propsProject.tech[4]}
          tech3={propsProject.tech[5]}
          banner={propsProject.banner[5]}
          alt={propsProject.alt[5]}
        />
      </div>
    </section>
  );
}

export default Projects;
