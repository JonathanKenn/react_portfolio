import React from "react";
import CardProject from "../components/CardProject";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div
      id="project"
      className="px-10 pb-32 pt-8 lg:px-36 lg:pt-10 dark:bg-secondary"
    >
      <div className="mt-10 block lg:flex lg:items-start">
        <div
          className="lg:sticky lg:top-20 lg:w-1/3 dark:text-primary"
          data-aos="fade-right"
        >
          <div className="mb-2 h-[0.138rem] w-4/5 bg-gradient-to-r from-secondary to-primary dark:from-primary"></div>
          <p className="text-2xl font-semibold lg:text-4xl">Project</p>
          <p className="mb-6 mt-4 w-4/5 text-justify">
            Here are some of the projects I`ve worked on, showcasing my skills
            and creativity in frontend web development and design.
          </p>
          <Link
            to="/MyProject"
            className="button-19 mb-10 bg-[#7d7b75] px-4 py-2 text-sm font-medium text-white after:bg-secondary lg:px-6 lg:py-2.5 lg:text-base dark:bg-gradient2 dark:text-secondary dark:after:bg-primary"
          >
            Explore More
          </Link>
        </div>

        <div className="lg:w-2/3" data-aos="fade-left">
          <CardProject />
        </div>
      </div>
    </div>
  );
};

export default Project;
