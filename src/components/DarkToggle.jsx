import React, { useState } from "react";

const DarkToggle = () => {
  const [toggleDark, setToggleDark] = useState(false);

  const toggleDarkMode = () => {
    setToggleDark(!toggleDark);

    toggleDark
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  };

  return (
    <div className="checkbox-wrapper-54 fixed inset-x-0 top-3 z-50 flex justify-center">
      <label className="relative inline-block h-[2em] w-[3.5em]">
        <input type="checkbox" className="hidden" onChange={toggleDarkMode} />
        {/* Slider */}
        <span className="slider duration-400 absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-full bg-gray-200 transition"></span>
      </label>
    </div>
  );
};

export default DarkToggle;
