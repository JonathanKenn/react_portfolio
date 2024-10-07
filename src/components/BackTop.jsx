import React, { useState, useEffect } from "react";

const BackToTop = () => {
  // State untuk mengatur visibilitas tombol
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fungsi untuk memantau posisi scroll
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Tambahkan event listener untuk scroll
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup event listener ketika komponen unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <a
          href="#home"
          className="fixed bottom-5 right-5 z-50 hidden h-14 w-14 items-center justify-center rounded-full border bg-gradient-to-b from-gradient to-gradient2 backdrop-blur-lg hover:animate-pulse lg:flex"
        >
          <span className="mt-2 block h-5 w-5 rotate-45 border-l-2 border-t-2 border-white"></span>
        </a>
      )}
    </>
  );
};

export default BackToTop;
