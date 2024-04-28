import { useBoolean } from "../../hooks/useBoolean";
import ProjectDialog from "../dialog/ProjectDialog";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ProjectType } from "@/i18n/config";
// import pathImg from '../../images/Imagepath'
import glamLogo from "../../images/portfolio/animal-shelter/glamcodelogo.png";
import lifeLogo from "../../images/portfolio/adventure/lifelogo.png";
import hairLogo from "../../images/portfolio/photography/hairlogo.png";
import ycLogo from "../../images/portfolio/YC/yclogo.png";
import jaytLogo from "../../images/portfolio/jayT/jaytlogo.png";
import placeholder from "../../images/logo.png";
import hmLogo from "../../images/portfolio/hm/howmuch.png";


const Projects = () => {
  const [isOpen, setIsOpen] = useBoolean();
  const [selectedProject, setSelectedProject] = useState<
    ProjectType | undefined
  >();
  const { t } = useTranslation();

  const handleProjectDetails = (project: ProjectType) => {
    setSelectedProject(project);
    setIsOpen.on();
  };

  return (
    <section style={{ backgroundColor:'#b1b1b1'}} className=" px-3 py-5 dark:bg-[#7f7f7f] md:px-0 md:py-10">
      <h2 className="py-10 text-center text-xl font-bold uppercase tracking-widest text-black dark:text-white  ">
        {t("projects.title")}
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {t("projects.projects", { returnObjects: true }).map((item:any) => {
          return (
            <div
              className="align-items: center mb-[30px] inline-block cursor-pointer bg-white p-3 text-center shadow-card transition duration-[0.2] ease-linear hover:scale-[1.01] hover:shadow-card-hover dark:bg-[#6d6d6d]"
              onClick={() => handleProjectDetails(item)}
              key={item.title}
            >
              <img
                className="center relative max-h-[230px]"
                src={
                  item?.images[0] === "glam"
                    ? glamLogo
                    : item?.images[0] === "life"
                    ? lifeLogo
                    : item?.images[0] === "YC"
                    ? ycLogo
                    : item?.images[0] === "jayT"
                    ? jaytLogo
                    : item?.images[0] === "hair"
                    ? hairLogo
                    : item?.images[0] === "hm"
                    ? hmLogo
                    : placeholder
                }
                alt="Profile"
              />
              <span className="mt-3 rounded-b-lg bg-[#696969] px-4 pb-1 pt-2 text-center text-lg text-white">
                {item.startDate}
              </span>
              <p className="font-xxl mt-2 font-bold uppercase tracking-wide dark:text-white">
                {item.title}
              </p>
              <p
                style={{ fontSize: "12px" }}
                className="mt-2 font-bold uppercase tracking-wide dark:text-white"
              >
                {`( ${item.live} )`}
              </p>
              {item.live =="Live"?
              <a
              style={{ fontSize: "14px" }}
                className="mt-2  px-2 pb-1 pt-2 text-center text-lg text-black dark:text-white"
                href="#"
                onClick={() => window.open(item.url, "_blank")}
              >
                Project Url
              </a>
              :null
        }
            </div>
          );
        })}
      </div>
      <ProjectDialog
        open={isOpen}
        onClose={setIsOpen.off}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
