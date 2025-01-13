import React, { useState } from "react";
import CardPopup from "./CardPopup";
import techIcons from "../data/techIcons";
import myProject from "../data/projectData";

const CardProject = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {myProject.map((project, index) => {
        return (
          <div
            key={index}
            className="relative mb-9 overflow-hidden rounded-2xl bg-gradient-to-br from-secondary from-10% to-[#EFE9D6] to-50% p-[0.138rem] dark:from-[#EFE9D6] dark:to-bgIcon"
          >
            <div className="rounded-2xl bg-primary dark:bg-secondary dark:text-primary">
              <img
                src={project.img}
                alt={project.name}
                className="w-full object-cover lg:rounded-t-2xl"
              />
              <div className="flex items-end">
                <div className="z-10 ml-0 flex w-full flex-col justify-between gap-y-5 px-4 py-3 lg:px-8 lg:py-5">
                  <div>
                    <h1 className="mb-1 text-lg font-semibold uppercase">
                      {project.name}
                    </h1>
                    <p className="h-9 text-sm italic">{project.desc}</p>
                  </div>
                  <div className="h-[0.1rem] bg-gradient-to-r from-gradient2 to-primary"></div>
                  <div className="flex gap-4">
                    {project.tech.map((tech, i) => (
                      <div
                        key={i}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#777264,#FBFFF4] from-25% via-primary via-60% to-gradient2 p-[0.08rem] 2xl:h-[3rem] 2xl:w-[3rem] dark:from-[#FBFFF4,#191815] dark:via-secondary dark:to-primary"
                      >
                        <div className="flex size-full items-center justify-center rounded-[0.65rem] bg-primary dark:bg-secondary">
                          {/* Perbaiki dengan mengambil .src dan .alt */}
                          <img
                            src={techIcons[tech]?.src}
                            alt={techIcons[tech]?.alt}
                            className="size-6 2xl:size-7"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-end justify-between">
                    <button
                      onClick={() => handleCardClick(project)}
                      type="button"
                      className="group relative overflow-hidden rounded-lg bg-gradient2 px-3 py-2 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-gradient2 hover:to-[#928E83] hover:ring-2 hover:ring-gradient2 hover:ring-offset-2 lg:px-5 lg:py-2.5"
                    >
                      <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
                      <span className="relative text-xs 2xl:text-sm">
                        View Details
                      </span>
                    </button>
                    <p className="text-xs 2xl:text-sm">{project.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {selectedProject && (
        <CardPopup project={selectedProject} btnClicked={closePopup} />
      )}
    </div>
  );
};

export default CardProject;
