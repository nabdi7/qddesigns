import React from "react";

const Cta = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[50px]">
      <div className="">
        <div className="flex w-full justify-start sm:justify-center">
          <div className="w-full sm:w-10/12 lg:w-8/12 text-left sm:text-center">
            <h2 className="bold-32 lg:bold-32 text-blue-500 mb-3">Ready to take the next step?</h2>
            <a href="/application.pdf" target="_blank" className="bg-blue-500 text-white py-3 px-6 rounded-full mt-5 inline-block transition transform hover:scale-105 hover:bg-blue-600">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
