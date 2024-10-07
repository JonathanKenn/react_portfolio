import React from "react";
import CardProject from "../components/CardProject";

const Project = () => {
  return (
    <div className="px-10 pb-32 pt-8 lg:px-36 lg:pt-10" id="project">
      <div className="mt-10 block lg:flex">
        <div className="lg:w-1/3">
          <div className="sticky top-20">
            <div className="mb-2 h-[0.138rem] w-4/5 bg-gradient-to-r from-secondary to-primary"></div>
            <p className="text-2xl font-semibold lg:text-4xl">Project</p>
            <p className="mb-6 mt-4 w-4/5 text-justify">
              Here are some of the projects I`ve worked on, showcasing my skills
              and creativity in frontend web development and design.
            </p>
            <button className="button-19 mb-10 px-4 py-2 text-sm font-medium text-white lg:px-6 lg:py-2.5 lg:text-base">
              Explore More
            </button>
          </div>
        </div>

        <div className="lg:w-2/3">
          <CardProject />
        </div>
      </div>
    </div>
  );
};

export default Project;
