import React from "react";
import Wave from "../waves";
import services from "./index";

const Services = () => {
  return (
    <>
      <Wave />
      <section className="py-8 lg:py-14">
        <div className="custom-screen max-w-3xl relative mx-auto sm:text-center pb-6">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            How We Can Help Your Business
          </h3>
        </div>
        <div className="mt-10">
          {services.map((service, index) => (
            <section
              key={index}
              className={`w-full ${index % 2 === 0 ? 'bg-gray-200' : ''}`}
            >
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-4 lg:py-0 pt-10">
                <div className="flex flex-col items-center w-full lg:w-1/2 text-center lg:py-0 pt-10">
                  <div className="text-6xl mb-4 py-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {service.title}
                  </h2>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-12 text-left lg:py-28 py-14 pb-20">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-x-4 list-disc pl-5 text-gray-600">
                    {service.types.map((type, typeIndex) => (
                      <li key={typeIndex} className="break-words">
                        {type}
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
