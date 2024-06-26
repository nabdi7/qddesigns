import React from "react";
import Image from "next/image"; 
import Link from "next/link";

const About3 = () => {
  return (
    <>
      <section className=" flex flex-col gap-20 pb-32 md:gap-28 lg:py-20">
        <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between xl:flex-row lg:flex-row md:flex-col-reverse md:items-center">
          <div className="flex-none max-w-2xl mt-12 space-y-3 md:mt-12 md:max-w-4xl lg:max-w-2xl">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Simple, effective ways to increase website traffic.
            </h2>
            <p className="text-gray-600">
              QD Web Designs offers a streamlined and affordable solution to
              increase your website&apos;s traffic. Our straightforward approach
              guarantees higher Google rankings and attracts more visitors.
              We&apos;re so confident in our service that we offer a 100% money back guarantee.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="btn_white"
              >
                Try it out
              </Link>
            </div>
          </div>
          <div className="flex-none w-full lg:max-w-xl md:max-w-3xl ">
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

export default About3;