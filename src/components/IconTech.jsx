import React from "react";

const IconTech = (props) => {
  const { src, name, bgc, isChecked } = props;
  return (
    <div
      className={`flex h-[4rem] w-[4rem] cursor-help items-center justify-center rounded-2xl bg-bgIcon lg:h-[4.5rem] lg:w-[4.5rem] ${isChecked ? `${bgc}` : "bg-bgIcon"}`}
    >
      <img src={src} alt={name} title={name} className="size-10" />
    </div>
  );
};

export default IconTech;
