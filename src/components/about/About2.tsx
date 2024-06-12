import React from "react";
import Image from "next/image";
import Button from "../button/Button";

const About2 = () => {
  return (
    <>
      <section className=" flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20">
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
        <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between xl:flex-row lg:flex-row md:flex-row md:items-center">
          <div className="flex-none max-w-2xl mt-12 space-y-3 md:mt-0">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Simple, powerful ways to increase website users.
            </h2>
            <p className="text-gray-600">
              QD Web Designs is a new, revolutionary & cost-effective way to
              grow your website &apos;s traffic. It&apos;s a super-simple,
              one-time fee that will make your site rank higher on Google and
              bring in more visitors. We&apos;re so confident, we offer a 100%
              money back guarantee.
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
            </div>
          </div>
          <div className="flex-none w-full md:max-w-xl ">
            <Image
              src="/cta-img.svg"
              alt="hero"
              width={500}
              height={500}
              className="w-full shadow-lg rounded-lg border"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About2;
