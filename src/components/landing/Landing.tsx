import React from "react";
import Link from "next/link";
import GradientWrapper from "../background";

const Home = () => {
  return (
    <section>
      <GradientWrapper wrapperClassName="inset-0" className=" text-gray-600">
        <div className="custom-screen mx-auto px-4 py-14  text-gray-600 md:px-8 flex flex-col gap-20 pb-32 md:gap-28 lg:py-20">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-sm text-indigo-600 font-medium">
              We Bring Your Business Ideas to Life
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
              We develop fast, dynamic {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                websites for your Business
              </span>
            </h2>
            <p className="max-w-2xl mx-auto">
              Elevate your brand with our captivating websites and unforgettable
              branding. Turn your vision into reality and set your brand apart.
              Unlock creative excellence today.
            </p>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Get started
              </Link>
              <Link
                href="/about"
                className="btn-third"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </GradientWrapper>
    </section>
  );
};

export default Home;
