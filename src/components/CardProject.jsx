import React, { useState } from "react";
import CardPopup from "./CardPopup";
import techIcons from "../data/techIcons";

const CardProject = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const myProject = [
    {
      name: "MovieRadar (In Development)",
      img: "img/porto/movieradar.png",
      desc: "A web platform for exploring movies and TV shows",
      long_desc:
        "MovieRadar is an application designed to provide a user-friendly experience similar to IMDb, offering comprehensive information about films and TV shows. Utilizing the TMDB API, it allows users to discover trending titles, read reviews, and receive recommendations based on their preferences. This project is built for learning purposes by using data from the TMDB API.",
      tech: ["react", "tailwind"],
      date: "October 2024",
      link: "https://movieradar.vercel.app/",
    },
    {
      name: "Air Jordan",
      img: "img/porto/jordan.png",
      desc: "The history and evolution of Air Jordan Sneakers",
      long_desc:
        "Air Jordan sneakers are more than just shoes; they’ve revolutionized basketball and streetwear. Since the mid-1980s, each model has embodied sport, style, and innovation. The history of Air Jordan mirrors Michael Jordan's legendary career, while the evolution of each sneaker highlights bold designs and technological advancements that still shape fashion and athletic footwear today.",
      tech: ["html", "css", "js"],
      date: "July 2024",
      link: "https://jonathankenn.github.io/jordan_shoes/",
    },
    {
      name: "BMW Car slider",
      img: "img/porto/car.png",
      desc: "Valorant Web Agent Slider Design",
      long_desc:
        "The BMW M3 is a legendary sports sedan that combines thrilling performance with luxury. With its powerful engine and precise handling, it delivers exhilarating acceleration and exceptional cornering capabilities. Inside, high-quality materials and advanced technology create a sophisticated atmosphere. Whether on city streets or winding roads, the BMW M3 exemplifies performance and elegance.",
      tech: ["html", "css", "js"],
      date: "July 2024",
      link: "https://jonathankenn.github.io/bmw_slider/",
    },

    {
      name: "Simple Portfolio Website",
      img: "img/porto/simpleporto.png", // Ganti dengan path gambar proyek yang relevan
      desc: "Portfolio Website Design (Dummy)",
      long_desc:
        "This is a simple and clean portfolio website designed using HTML, CSS, and JavaScript. The site is a demo version, so the content is still lorem ipsum placeholders and not the final real content. The project showcases how a professional portfolio could look, with sections for projects, skills, and contact information. The minimalist design and responsive layout make it easy to navigate on both desktop and mobile devices.",
      tech: ["html", "tailwind", "js"], // Teknologi yang digunakan
      date: "January 2024", // Tanggal proyek
      link: "https://jonathankenn.github.io/tailwindCSS_porto/", // Link ke project atau website live
    },
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      {myProject.map((project, index) => {
        return (
          <div
            key={index}
            className="relative mb-9 overflow-hidden rounded-2xl bg-gradient-to-br from-secondary from-10% to-[#EFE9D6] to-50% p-[0.138rem] dark:from-[#EFE9D6] dark:to-bgIcon"
          >
            <div className="block overflow-hidden rounded-2xl bg-primary lg:flex dark:bg-secondary dark:text-primary">
              <img
                src={project.img}
                alt={project.name}
                className="object-cover lg:w-3/5 lg:rounded-s-2xl"
              />
              <div className="flex w-full items-end">
                <div className="z-10 ml-0 flex h-[16.5rem] w-full flex-col justify-between px-4 py-3 lg:-ml-8 lg:bg-primary lg:px-8 lg:py-5 lg:shadow-[0px_-0px_20px_0px_#00000017] dark:bg-secondary dark:shadow-[0px_-0px_20px_0px_#ffffff25]">
                  <div>
                    <h1 className="mb-1 text-lg font-semibold uppercase">
                      {project.name}
                    </h1>
                    <p className="text-sm italic">{project.desc}</p>
                  </div>
                  <div className="h-[0.1rem] w-1/2 bg-gradient-to-r from-gradient2 to-primary"></div>
                  <div className="flex gap-4">
                    {project.tech.map((tech, i) => (
                      <div
                        key={i}
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#777264,#FBFFF4] from-25% via-primary via-60% to-gradient2 p-[0.08rem] lg:h-[3rem] lg:w-[3rem] dark:from-[#FBFFF4,#191815] dark:via-secondary dark:to-primary"
                      >
                        <div className="flex size-full items-center justify-center rounded-[0.65rem] bg-primary dark:bg-secondary">
                          {/* Perbaiki dengan mengambil .src dan .alt */}
                          <img
                            src={techIcons[tech]?.src}
                            alt={techIcons[tech]?.alt}
                            className="size-7"
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
      {selectedProject && (
        <CardPopup project={selectedProject} btnClicked={closePopup} />
      )}
    </div>
  );
};

export default CardProject;
