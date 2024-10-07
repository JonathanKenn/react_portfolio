import React from "react";

const Contact = () => {
  return (
    <div
      className="bg-gradient-to-bl from-[#171716] to-[#1E1D1A] px-10 pb-32 pt-12 text-white lg:flex lg:px-36 lg:pb-32 lg:pt-24"
      id="contact"
    >
      <div className="lg:w-1/3">
        <div className="mb-2 h-[0.138rem] w-4/5 bg-gradient-to-l from-secondary to-primary"></div>
        <div className="mb-10 w-4/5 lg:mb-0">
          <h1 className="mb-3 text-2xl font-semibold lg:text-4xl">Contact</h1>
          <p className="font-extralight">
            feel free to drop me a message. I’d love to hear from you.
          </p>
          <div className="mt-7 hidden justify-center lg:flex">
            <img
              src="img/mailman.png"
              alt="mailman"
              className="w-72 text-center"
            />
          </div>
        </div>
      </div>
      <div className="lg:ml-20 lg:w-2/3">
        <form autoComplete="off">
          <div className="mb-7">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-white"
            >
              Name
            </label>

            <div className="mt-2 rounded-lg bg-gradient-to-l from-secondary to-[#EFE9D6] p-[0.05rem]">
              <input
                type="text"
                name="name"
                id="name"
                className="w-full rounded-lg bg-[#2A2925] py-3 pl-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#EFE9D6] sm:text-sm sm:leading-6"
                placeholder="Your Name"
              />
            </div>
          </div>
          <div className="mb-7">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Email
            </label>

            <div className="mt-2 rounded-lg bg-gradient-to-l from-secondary to-[#EFE9D6] p-[0.05rem]">
              <input
                type="email"
                name="email"
                id="email"
                className="w-full rounded-lg bg-[#2A2925] py-3 pl-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#EFE9D6] sm:text-sm sm:leading-6"
                placeholder="Your email"
              />
            </div>
          </div>
          <div className="mb-7">
            <label
              htmlFor="message"
              className="block text-sm font-medium leading-6 text-white"
            >
              Message
            </label>

            <div className="mt-2 h-[8.85rem] rounded-lg bg-gradient-to-l from-secondary to-[#EFE9D6] p-[0.05rem]">
              <textarea
                name="message"
                id="message"
                className="w-full resize-none rounded-lg bg-[#2A2925] px-3 pb-20 pt-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#EFE9D6] sm:text-sm sm:leading-6"
                placeholder="Your message"
              />
            </div>
          </div>
          <div className="flex lg:justify-end">
            <div className="mt-2 inline-block rounded-lg bg-gradient-to-b from-secondary to-[#EFE9D6] p-[0.05rem]">
              <button
                type="submit"
                className="hover:from-bg-[#2A2925] group relative overflow-hidden rounded-lg bg-[#2A2925] px-7 py-2.5 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-[#2A2925] hover:to-[#2A2925] hover:ring-2 hover:ring-[#2A2925] hover:ring-offset-2 lg:px-10 lg:py-3"
              >
                <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
                <span className="relative text-sm">Submit</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
