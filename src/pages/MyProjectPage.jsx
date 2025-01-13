import React from "react";
import DarkToggle from "../components/DarkToggle";
import CardProject2 from "../components/CardProject2";

const MyprojectPage = () => {
  return (
    <div className="bg-primary px-10 pb-32 pt-8 font-montserrat text-secondary lg:px-36 lg:pt-10 dark:bg-secondary dark:text-primary">
      <DarkToggle />
      <div className="mx-auto mt-10">
        <div className="text-center lg:top-20">
          <p className="text-2xl font-semibold lg:text-4xl">Project</p>
          <p className="mt-4">
            Here are some of the projects I`ve worked on, showcasing my skills
            and creativity in frontend web development and design.
          </p>

          <div className="mx-auto my-6 h-[1px] bg-gradient-to-r from-secondary via-primary to-secondary"></div>
        </div>

        <div className="">
          <CardProject2 />
        </div>
      </div>
    </div>
  );
};

export default MyprojectPage;
