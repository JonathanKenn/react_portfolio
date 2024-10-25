import React from "react";
import Location from "../components/Location";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div
      className="home min-h-screen overflow-x-hidden px-12 py-6 lg:px-20 dark:bg-secondary"
      id="home"
    >
      <div className="flex justify-between text-xs lg:text-sm dark:text-primary">
        <p>Portfolio</p>
        <p>&copy; Code by Joo</p>
      </div>

      <div className="mx-auto mt-20 max-w-xl text-center lg:mt-24 dark:text-primary">
        <p className="text-base font-medium lg:text-xl">Jonathan Kenn</p>
        <h1 className="mb-12 mt-4 bg-gradient-to-r from-secondary to-gradient bg-clip-text text-5xl font-semibold leading-[1.1] text-transparent lg:text-7xl dark:to-primary">
          Frontend Web Developer
        </h1>
        <p className="text-lg font-light lg:text-xl">
          Bringing creativity and code together for impactful results
        </p>
      </div>

      {/* Location */}
      <Location />

      <Navbar />
    </div>
  );
};

export default HomePage;
