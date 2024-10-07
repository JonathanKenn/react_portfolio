import React, { useState } from "react";
import IconTech from "../components/IconTech";

const TechStack = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const webDevTools = [
    {
      src: "img/language/html-icon.svg",
      name: "HTML",
      bgc: "bg-gradient-to-br from-[#004F0D] via-[#02AF1D] to-[#004F0D]",
    },
    {
      src: "img/language/css-icon.svg",
      name: "CSS",
      bgc: "bg-gradient-to-br from-[#004F0D] via-[#02AF1D] to-[#004F0D]",
    },
    {
      src: "img/language/js.svg",
      name: "JAVASCRIPT",
      bgc: "bg-gradient-to-br from-[#616905] via-[#E3F41B] to-[#616905]",
    },
    {
      src: "img/language/tailwind.svg",
      name: "TAILWIND",
      bgc: "bg-gradient-to-br from-[#004F0D] via-[#02AF1D] to-[#004F0D]",
    },
    {
      src: "img/language/bootstrap.svg",
      name: "BOOTSTRAP",
      bgc: "bg-gradient-to-br from-[#004F0D] via-[#02AF1D] to-[#004F0D]",
    },
    {
      src: "img/language/react-js-icon.svg",
      name: "REACT",
      bgc: "bg-gradient-to-br from-[#4D330B] via-[#D0881D] to-[#4D330B]",
    },
    {
      src: "img/language/php.svg",
      name: "PHP",
      bgc: "bg-gradient-to-br from-[#4D330B] via-[#D0881D] to-[#4D330B]",
    },
    {
      src: "img/language/laravel.svg",
      name: "LARAVEL",
      bgc: "bg-gradient-to-br from-[#4D330B] via-[#D0881D] to-[#4D330B]",
    },
    {
      src: "img/language/mysql-icon.svg",
      name: "MYSQL",
      bgc: "bg-gradient-to-br from-[#4D330B] via-[#D0881D] to-[#4D330B]",
    },
  ];

  // Array untuk Other Languages & Tools
  const otherTools = [
    {
      src: "img/other/python.svg",
      name: "PYTHON",
      bgc: "bg-gradient-to-br from-[#0E0C6D] via-[#2D28F5] to-[#0E0C6D]",
    },
    {
      src: "img/other/dart.svg",
      name: "DART",
      bgc: "bg-gradient-to-br from-[#0E0C6D] via-[#2D28F5] to-[#0E0C6D]",
    },
    {
      src: "img/other/flutter-icon.svg",
      name: "FLUTTER",
      bgc: "bg-gradient-to-br from-[#0E0C6D] via-[#2D28F5] to-[#0E0C6D]",
    },
    {
      src: "img/other/java.svg",
      name: "JAVA",
      bgc: "bg-gradient-to-br from-[#0E0C6D] via-[#2D28F5] to-[#0E0C6D]",
    },
    {
      src: "img/other/ghub.svg",
      name: "GITHUB",
      bgc: "bg-gradient-to-br from-[#616905] via-[#E3F41B] to-[#616905]",
    },
    {
      src: "img/other/cpp.svg",
      name: "C++",
      bgc: "bg-gradient-to-br from-[#0E0C6D] via-[#2D28F5] to-[#0E0C6D]",
    },
    {
      src: "img/other/chtgpt.svg",
      name: "CHATGPT",
      bgc: "bg-gradient-to-br from-[#004F0D] via-[#02AF1D] to-[#004F0D]",
    },
    {
      src: "img/other/photoshop.svg",
      name: "PHOTOSHOP",
      bgc: "bg-gradient-to-br from-[#616905] via-[#E3F41B] to-[#616905]",
    },
    {
      src: "img/other/figma-icon.svg",
      name: "FIGMA",
      bgc: "bg-gradient-to-br from-[#616905] via-[#E3F41B] to-[#616905]",
    },
  ];

  // Fungsi untuk render icon berdasarkan komponen TechIcon
  const renderIcons = (toolsArray) =>
    toolsArray.map((tool, index) => (
      <IconTech
        key={index}
        src={tool.src}
        name={tool.name}
        bgc={tool.bgc}
        isChecked={isChecked}
      />
    ));

  return (
    <div
      className="bg-gradient-to-bl from-[#171716] to-[#1E1D1A] px-10 pb-32 pt-8 text-white lg:px-36 lg:pt-14"
      id="tech"
    >
      <div>
        <div className="flex flex-wrap-reverse">
          <div className="flex flex-col gap-10 lg:w-2/3">
            <p className="pt-6 text-2xl font-light lg:pt-0 lg:text-3xl">
              Web Development
            </p>
            <div className="-mt-2 flex max-w-3xl flex-wrap justify-between gap-8 lg:mt-0 lg:justify-normal">
              {/* Render Web Development Tools */}
              {renderIcons(webDevTools)}
            </div>

            <div className="mt-5 h-[1.5px] bg-gradient-to-r from-primary to-secondary lg:w-1/3"></div>

            <p className="text-2xl font-light lg:pt-0 lg:text-3xl">
              Other Languages & Tools
            </p>
            <div className="-mt-2 flex max-w-3xl flex-wrap justify-between gap-8 lg:mt-0 lg:justify-normal">
              {/* Render Other Tools */}
              {renderIcons(otherTools)}
            </div>
          </div>

          <div className="mt-7 w-full md:w-2/4 lg:mt-0 lg:w-1/3">
            <div className="mb-4 hidden h-0.5 bg-gradient-to-l from-secondary to-primary lg:mb-2 lg:block lg:bg-gradient-to-r"></div>
            <p className="mb-6 text-2xl font-semibold lg:text-right lg:text-4xl">
              Tech Stack
            </p>

            <div className="">
              <div className="mb-2 flex items-center gap-10">
                <p className="text-lg">Good</p>
                <div className="h-3 w-full rounded-full bg-gradient-to-r from-[#007713] to-[#07DA29]"></div>
              </div>
              <div className="mb-2 flex items-center gap-10">
                <p className="text-lg">Intermediate</p>
                <div className="h-3 w-full rounded-full bg-gradient-to-r from-[#8B9616] to-[#EEFF26]"></div>
              </div>
              <div className="mb-2 flex items-center gap-10">
                <p className="text-lg">Basic</p>
                <div className="h-3 w-full rounded-full bg-gradient-to-r from-[#634210] to-[#E9971D]"></div>
              </div>
              <div className="mb-2 flex items-center gap-10">
                <p className="text-lg">Familiar</p>
                <div className="h-3 w-full rounded-full bg-gradient-to-r from-[#14128B] to-[#2B26FF]"></div>
              </div>
            </div>

            <div className="">
              <p className="mt-12 font-extralight lg:text-right">
                Switch on to view skill levels for each language.
              </p>
              <div className="checkbox-wrapper-35 mt-5 flex lg:mt-3 lg:justify-end">
                <div>
                  <input
                    className="switch"
                    type="checkbox"
                    id="switch"
                    name="switch"
                    value="private"
                    onChange={toggleCheckbox}
                  />
                  <label htmlFor="switch">
                    <span className="switch-x-text">This is </span>
                    <span className="switch-x-toggletext">
                      <span className="switch-x-unchecked">
                        <span className="switch-x-hiddenlabel">
                          Unchecked:{" "}
                        </span>
                        Off
                      </span>
                      <span className="switch-x-checked">
                        <span className="switch-x-hiddenlabel">Checked: </span>
                        On
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4 mt-12 h-0.5 bg-gradient-to-l from-secondary to-primary lg:mb-2 lg:hidden lg:bg-gradient-to-r"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
