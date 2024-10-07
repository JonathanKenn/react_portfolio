import React from "react";

const SocialIcon = () => {
  const Icon = [
    {
      svg: "img/social/instagram.svg",
      name: "Instagram",
      link: "#",
    },
    {
      svg: "img/social/linkedin.svg",
      name: "linkedin",
      link: "https://www.linkedin.com/in/jonathan-ken-20241b329/",
    },
    {
      svg: "img/social/x.svg",
      name: "x",
      link: "#",
    },
    {
      svg: "img/social/discord.svg",
      name: "discord",
      link: "#",
    },
    {
      svg: "img/social/github.svg",
      name: "github",
      link: "https://github.com/JonathanKenn",
    },
  ];
  return (
    <>
      {Icon.map((icon, index) => {
        return (
          <a
            href={icon.link}
            key={index}
            className="overflow-hidden rounded-full bg-white p-3 transition-all duration-300 ease-out hover:ring-2 hover:ring-gradient2 hover:ring-offset-2"
          >
            <img src={icon.svg} alt={icon.name} className="size-5 lg:size-6" />
          </a>
        );
      })}
    </>
  );
};

export default SocialIcon;
