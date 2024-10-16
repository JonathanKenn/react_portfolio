import React, { useState, useEffect } from "react";

const DarkToggle = () => {
  const [toggleDark, setToggleDark] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setToggleDark(!toggleDark);

    if (toggleDark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  // useEffect to initialize theme based on localStorage or system preferences
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setToggleDark(true); // Ensure the toggle reflects the correct state
    } else {
      document.documentElement.classList.remove("dark");
      setToggleDark(false); // Ensure the toggle reflects the correct state
    }
  }, []); // Run this effect only once when the component mounts

  return (
    <div className="checkbox-wrapper-54 fixed inset-x-0 top-3 z-50 flex justify-center">
      <label className="relative inline-block h-[2em] w-[3.5em]">
        <input
          type="checkbox"
          className="hidden"
          onChange={toggleDarkMode}
          checked={toggleDark}
        />
        {/* Slider */}
        <span className="slider duration-400 absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-full bg-gray-200 transition"></span>
      </label>
    </div>
  );
};

export default DarkToggle;
