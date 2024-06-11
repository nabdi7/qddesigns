import React from "react";
import Image from "next/image";
import Button from "../button/Button";

const About = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20">
      <div className="custom-screen text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            We help you get more website traffic to your site.
          </h2>
          <p className="mt-3 text-gray-600">
            QD Web Designs brings you the freshest, up-to-date website traffic
            trends. An easy way to find out the most popular and engaging
            content to help you grow.
          </p>
        </div>
      </div>
      <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
        <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Simple, powerful ways to increase website users
          </h2>
          <p className="text-gray-600">
            Split is a new, revolutionary & cost-effective way to grow your
            website &apos;s traffic. It&apos;s a super-simple, one-time fee that
            will make your site rank higher on Google and bring in more
            visitors. We&apos;re so confident, we offer a 100% money back
            guarantee.
          </p>
          <div className="pt-1">
            <Button
              type="button"
              title="Try it out"
              variant="btn_white"
              shape="rectangle"
              href="/getquote"

              // className="inline-flex items-center gap-x-2 font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 "
            />

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg> */}
          </div>
        </div>
        <div className="flex-none w-full md:max-w-xl">
          <Image
            src="/cta-img.svg"
            alt="hero"
            width={500}
            height={500}
            className="w-full shadow-lg rounded-lg border"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col md:flex-row z-20 xl:w-full h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className=" justify-center items-center">
          <Image
            src="/untitled2.png"
            alt="hero"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl lg:text35xl font-bold">
            We solve the hardest parts of your business
          </h1>
          <p className="regular-16 mt-6 text-gray-30 ">
            We explore your specifications to provide tailored website solutions
            that align with your requirements and budget.
          </p>
          <ul className="mt-6 space-y-2 text-gray-600 text-lg">
            <li>✔️ Thorough understanding of your prerequisites</li>
            <li>✔️ Research and analysis of your business</li>
            <li>✔️ Effective Solutions</li>
            <li>✔️ Budget-friendly</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
