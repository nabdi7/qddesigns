import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="custom-screen py-28 relative bg-gray-600 my-16 sm:py-32 lg:rounded-lg">
      <div className="relative z-10 max-w-screen-xl mx-auto  md:text-center md:px-8">
        <div className="max-w-xl md:mx-auto">
          <p className="text-white text-3xl font-semibold sm:text-4xl">
          Lets build your website today!
          </p>
          <p className="text-blue-100 mt-3">
            we can help you grow your online business quickly using the best
            tools in the market.
          </p>
        </div>
        <div className="mt-4">
          <Link
            href="/contact"
            className="inline-block py-2 px-4 text-gray-800 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-full"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
