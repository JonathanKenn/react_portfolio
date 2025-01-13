import React from "react";
import DarkToggle from "../components/DarkToggle";
import CardProject2 from "../components/CardProject2";
import Footer from "../section/footer";
import { Link } from "react-router-dom";

const MyprojectPage = () => {
  return (
    <div className="bg-primary px-10 pt-8 font-montserrat text-secondary lg:px-36 lg:pt-4 dark:bg-secondary dark:text-primary">
      <DarkToggle />
      <div className="mx-auto mb-14 mt-10">
        <div className="text-center lg:top-20">
          <div className="flex justify-between">
            <p className="text-2xl font-semibold lg:text-4xl">Project</p>
            <Link
              to="/"
              className="flex items-center rounded-2xl px-3 transition-all hover:bg-secondary hover:text-primary dark:bg-primary dark:text-secondary dark:hover:bg-secondary dark:hover:text-primary"
            >
              <div className="rotate-180 text-5xl">&#10162;</div>
              <p className="ml-2 text-lg font-medium">Back</p>
            </Link>
          </div>
          <p className="mt-4 text-start">
            Here are some of the projects I`ve worked on, showcasing my skills
            and creativity in frontend web development and design.
          </p>

          <div className="mx-auto my-6 h-[1px] bg-gradient-to-r from-secondary via-primary to-secondary"></div>
        </div>

        <div className="">
          <CardProject2 />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyprojectPage;
