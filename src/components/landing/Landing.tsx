import React from "react";
import Image from "next/image";
import Button from "../button/Button";

const Home = () => {
  return (
    <section>
      <div className="custom-screen mx-auto px-4 py-20  text-gray-600 md:px-8 flex flex-col gap-20  pb-32 md:gap-28 lg:py-20">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-indigo-600 font-medium">
            We Bring Your Business Ideas to Life
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Design your projects faster with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              the largest figma UI kit
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Elevate your brand with our captivating websites and unforgettable
            branding. Turn your vision into reality and set your brand apart.
            Unlock creative excellence today.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a
              href="javascript:void(0)"
              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Get started
            </a>
            <a
              href="javascript:void(0)"
              className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
