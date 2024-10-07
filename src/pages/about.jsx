import React from "react";

const About = () => {
  return (
    <div className="px-10 pb-32 pt-8 lg:px-36 lg:pt-10" id="about">
      <div className="mt-14 block lg:flex">
        <div className="lg:w-1/3">
          <div className="mb-2 h-0.5 w-4/5 bg-gradient-to-r from-secondary to-primary"></div>
          <p className="mb-6 text-2xl font-semibold lg:text-4xl">About</p>
        </div>
        <div className="lg:w-2/3">
          <p className="text-justify text-lg font-medium lg:text-xl lg:leading-8">
            I`am a new frontend developer with a background in modern web
            development using HTML, CSS, JavaScript, Tailwind CSS/Bootstrap and
            React. Although I don`t have formal work experience yet, I have
            built several personal projects that showcase my skills in creating
            responsive and user-friendly web interfaces.
          </p>
        </div>
      </div>
      <div className="font-sm mt-12 block gap-10 text-justify text-base lg:flex lg:text-base">
        <p className="mb-10">
          I started my journey in frontend development as a self-taught learner
          through YouTube. Additionally, I explored various programming
          languages at university, such as Python, Java, C++, and Flutter.
          However, I found that web development is the field I enjoy the most,
          especially because of my passion for design.
        </p>
        <p>
          After grasping the fundamentals of frontend development, I continued
          to learn backend technologies on my own, particularly PHP, Laravel,
          and MySQL. While my understanding of backend development is still
          basic, I am eager to further enhance my skills and explore more
          aspects of web development.
        </p>
      </div>
      <div className="mt-16">
        <div className="mx-auto mb-8 h-[1.5px] w-4/5 bg-gradient-to-r from-primary via-secondary to-primary lg:w-1/3"></div>
        <div className="m-auto flex w-4/5 justify-center gap-8 lg:w-1/4">
          <a href="https://www.fiverr.com/jonathan_ken/develop-a-simple-n-attractive-website-responsive-affordable-and-user-friendly">
            <img
              src="img/fiverr-icon.svg"
              alt="fiverr"
              className="h-9 w-9 grayscale transition-all duration-300 hover:grayscale-0 lg:h-11 lg:w-11"
            />
          </a>
          <a href="https://www.freelancer.com/u/JonathanKenn">
            <img
              src="img/freelancer-icon.svg"
              alt="fiverr"
              className="h-9 w-9 grayscale transition-all duration-300 hover:grayscale-0 lg:h-11 lg:w-11"
            />
          </a>
          <a href="https://www.upwork.com/freelancers/~01c6358114d46478c8?viewMode=1">
            <img
              src="img/upwork-icon.png"
              alt="fiverr"
              className="h-9 w-9 grayscale transition-all duration-300 hover:grayscale-0 lg:h-11 lg:w-11"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
