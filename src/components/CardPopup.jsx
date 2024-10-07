import React from "react";

const CardPopup = ({ project, btnClicked }) => {
  return (
    <div className="py-30 fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-65"
        onClick={btnClicked}
      ></div>

      {/* Popup content */}
      <div className="relative z-10 mx-2 w-full max-w-xl rounded-xl bg-primary p-1 shadow-lg">
        <div className="overflow-hidden rounded-2xl p-[0.138rem]">
          <img src={project.img} alt={project.name} className="w-full" />

          <div className="z-10 flex flex-col justify-between px-7 py-5">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold uppercase">
                {project.name}
              </h1>
              <p className="text-xs">{project.date}</p>
            </div>

            <p className="text-justify text-sm italic">{project.long_desc}</p>

            <div className="my-6 h-[0.1rem] w-full bg-gradient-to-r from-primary via-gradient2 to-primary"></div>

            <div className="flex flex-wrap items-center justify-between">
              <div className="mb-7 flex gap-4 lg:mb-0">
                <div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-xl bg-gradient-to-br from-[#777264,#FBFFF4] from-25% via-primary via-60% to-gradient2 p-[0.08rem] lg:size-11">
                  <div className="flex size-full items-center justify-center rounded-[0.65rem] bg-primary">
                    <img src="img/language/html-icon.svg" className="size-6" />
                  </div>
                </div>
                <div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-xl bg-gradient-to-br from-[#777264,#FBFFF4] from-25% via-primary via-60% to-gradient2 p-[0.08rem] lg:size-11">
                  <div className="flex size-full items-center justify-center rounded-[0.65rem] bg-primary">
                    <img src="img/language/css-icon.svg" className="size-6" />
                  </div>
                </div>
                <div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-xl bg-gradient-to-br from-[#777264,#FBFFF4] from-25% via-primary via-60% to-gradient2 p-[0.08rem] lg:size-11">
                  <div className="flex size-full items-center justify-center rounded-[0.65rem] bg-primary">
                    <img src="img/language/js.svg" className="size-6" />
                  </div>
                </div>
              </div>

              <a
                href={project.link}
                className="group relative overflow-hidden rounded-lg bg-gradient2 px-5 py-2.5 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-gradient2 hover:to-[#928E83] hover:ring-2 hover:ring-gradient2 hover:ring-offset-2"
              >
                <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
                <span className="relative">Visit Site</span>
              </a>
            </div>
          </div>

          {/* Render PopUpProject conditionally */}
          <div className="absolute -top-5 right-1 flex w-full justify-center lg:-right-5 lg:-top-4 lg:justify-end">
            <button
              className="rounded-full border border-gradient2 bg-secondary px-4 py-2 text-white hover:bg-bgIcon"
              onClick={btnClicked}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPopup;