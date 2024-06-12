import React from "react";
import Image from "next/image";
import Button from "../button/Button";
import About2 from "./About2";

const About = () => {
  return (
    <>
      <About2 />
      <section className=" flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20">
        <div className="custom-screen flex flex-col gap-x-12 justify-between xl:flex-row lg:flex-row md:flex-row md:items-center">
        <div className="flex-none w-full md:max-w-xl ">
            <Image
              src="/untitled2.png"
              alt="hero"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
          <div className="flex-none max-w-2xl mt-12 space-y-3 md:mt-0">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              We solve the hardest parts of your business.
            </h2>
            <p className="text-gray-600">
              We explore your specifications to provide tailored website
              solutions that align with your requirements and budget.
            </p>
            <ul className="mt-6 space-y-2  text-gray-600">
              <li>✔️ Thorough understanding of your prerequisites</li>
              <li>✔️ Research and analysis of your business</li>
              <li>✔️ Effective Solutions</li>
              <li>✔️ Budget-friendly</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
