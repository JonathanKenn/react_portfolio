import React, { useState } from "react";
import CardPopup from "./CardPopup";

const CardProject = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const myProject = [
    {
      name: "Air Jordan",
      img: "img/porto/jordan.png",
      desc: "The history and evolution of Air Jordan Sneakers",
      long_desc:
        "Air Jordan sneakers are more than just shoes; they’ve revolutionized basketball and streetwear. Since the mid-1980s, each model has embodied sport, style, and innovation. The history of Air Jordan mirrors Michael Jordan's legendary career, while the evolution of each sneaker highlights bold designs and technological advancements that still shape fashion and athletic footwear today.",
      date: "July 2024",
      link: "#",
    },
    {
      name: "BMW Car slider",
      img: "img/porto/car.png",
      desc: "Valorant Web Agent Slider Design",
      long_desc:
        "The BMW M3 is a legendary sports sedan that combines thrilling performance with luxury. With its powerful engine and precise handling, it delivers exhilarating acceleration and exceptional cornering capabilities. Inside, high-quality materials and advanced technology create a sophisticated atmosphere. Whether on city streets or winding roads, the BMW M3 exemplifies performance and elegance.",
      date: "July 2024",

      link: "#",
    },
    {
      name: "Air Jordan",
      img: "img/porto/jordan.png",
      desc: "The history and evolution of Air Jordan Sneakers",
      long_desc:
        "Air Jordan sneakers are more than just shoes; they’ve revolutionized basketball and streetwear. Since the mid-1980s, each model has embodied sport, style, and innovation. The history of Air Jordan mirrors Michael Jordan's legendary career, while the evolution of each sneaker highlights bold designs and technological advancements that still shape fashion and athletic footwear today.",
      date: "July 2024",
      link: "#",
    },
    {
      name: "BMW Car slider",
      img: "img/porto/car.png",
      desc: "Valorant Web Agent Slider Design",
      long_desc:
        "The BMW M3 is a legendary sports sedan that combines thrilling performance with luxury. With its powerful engine and precise handling, it delivers exhilarating acceleration and exceptional cornering capabilities. Inside, high-quality materials and advanced technology create a sophisticated atmosphere. Whether on city streets or winding roads, the BMW M3 exemplifies performance and elegance.",
      date: "July 2024",

      link: "#",
    },
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project); // Set the clicked project
  };

  const closePopup = () => {
    setSelectedProject(null); // Close the popup
  };

  return (
    <div>
      {myProject.map((project, index) => {
        return (
          <div
            key={index}
            className="relative mb-9 overflow-hidden rounded-2xl bg-gradient-to-br from-secondary from-10% to-[#EFE9D6] to-50% p-[0.138rem]"
          >
            <div className="block overflow-hidden rounded-2xl bg-primary lg:flex">
              <img
                src={project.img}
                alt={project.name}
                className="object-cover lg:w-3/5 lg:rounded-s-2xl"
              />
              <div className="flex w-full items-end">
                <div className="z-10 ml-0 flex h-[16.5rem] w-full flex-col justify-between px-4 py-3 lg:-ml-8 lg:bg-primary lg:px-8 lg:py-5 lg:shadow-[0px_-0px_20px_0px_#00000017]">
                  <div>
                    <h1 className="mb-1 text-lg font-semibold uppercase">
                      {project.name}
                    </h1>
                    <p className="text-sm italic">{project.desc}</p>
                  </div>
                  <div className="h-[0.1rem] w-1/2 bg-gradient-to-r from-gradient2 to-primary"></div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#777264,#FBFFF4] from-25% via-primary via-60% to-gradient2 p-[0.08rem] lg:h-[3rem] lg:w-[3rem]">
                      <div className="flex size-full items-center justify-center rounded-[0.65rem] bg-primary">
                        <img
                          src="img/language/html-icon.svg"
                          className="size-7"
                        />
                      </div>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#777264,#FBFFF4] from-25% via-primary via-60% to-gradient2 p-[0.08rem] lg:h-[3rem] lg:w-[3rem]">
                      <div className="flex size-full items-center justify-center rounded-[0.65rem] bg-primary">
                        <img
                          src="img/language/css-icon.svg"
                          className="size-7"
                        />
                      </div>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#777264,#FBFFF4] from-25% via-primary via-60% to-gradient2 p-[0.08rem] lg:h-[3rem] lg:w-[3rem]">
                      <div className="flex size-full items-center justify-center rounded-[0.65rem] bg-primary">
                        <img src="img/language/js.svg" className="size-7" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <button
                      onClick={() => handleCardClick(project)}
                      type="button"
                      className="group relative overflow-hidden rounded-lg bg-gradient2 px-3 py-2 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-gradient2 hover:to-[#928E83] hover:ring-2 hover:ring-gradient2 hover:ring-offset-2 lg:px-5 lg:py-2.5"
                    >
                      <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
                      <span className="relative text-sm">View Details</span>
                    </button>
                    <p className="text-sm">{project.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* Render CardPopup conditionally */}
      {selectedProject && (
        <CardPopup project={selectedProject} btnClicked={closePopup} />
      )}
    </div>
  );
};

export default CardProject;
