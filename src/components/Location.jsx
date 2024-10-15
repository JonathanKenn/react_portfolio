import React, { useState } from "react";

const Location = () => {
  // State untuk menyimpan apakah panel sedang terbuka atau tertutup
  const [isOpen, setIsOpen] = useState(true);

  // Fungsi untuk toggle panel
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-20">
      <div
        className={`absolute ${
          isOpen
            ? "-translate-x-[8.3rem] lg:-translate-x-[12.5rem]"
            : "-translate-x-12 lg:-translate-x-20"
        } bottom-28 flex cursor-pointer items-center rounded-r-full bg-secondary py-3 pl-4 pr-3 text-white transition-transform duration-500 ease-in-out lg:gap-2 lg:py-4 lg:pl-8 lg:pr-4 dark:bg-primary`}
        onClick={togglePanel} // Tambahkan event onClick untuk toggle
      >
        <p className="max-w-20 text-xs transition-all lg:max-w-24 lg:text-base dark:font-medium dark:text-secondary">
          Located in Indonesia
        </p>

        <div className="flex items-center justify-center rounded-full bg-primary lg:size-14 dark:bg-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-secondary lg:size-11 dark:text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-32 right-0 rotate-90">
        <p className="text-xs lg:text-base dark:text-primary">
          Scroll Down &rarr;
        </p>
      </div>
    </div>
  );
};

export default Location;
