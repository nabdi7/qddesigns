import React from "react";
import plans from "./index";
import Link from "next/link";
import Wave from "../waves";

const Pricing = () => {
  return (
    <>
      <Wave />
      <section className="py-8 lg:py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Pricing plan
            </h3>
            <div className="mt-3 max-w-xl">
              <p>
                Choose the ideal plan to boost your online presence and meet
                your business goals.
              </p>
            </div>
          </div>
          <div className="mt-16 justify-center gap-6 space-y-10 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
            {plans.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${
                  item.isMostPop ? "border-green-100 mt-10" : "border-gray-300"
                }`}
              >
                {item.isMostPop && (
                  <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">
                    Most popular
                  </span>
                )}
                <div className="p-8 space-y-4 border-b">
                  <span className="text-green-100 text-transparent bg-clip-text font-medium">
                    {item.name}
                  </span>
                  <div className="text-gray-800 text-3xl font-semibold">
                    {typeof item.price === "number"
                      ? `$${item.price}`
                      : item.price}
                  </div>
                  <p>{item.desc}</p>
                </div>
                <ul className="p-8 space-y-3">
                  <li className="pb-2 text-gray-800 font-medium">
                    <p>Features</p>
                  </li>
                  {item.features.map((featureItem, idx) => (
                    <li key={idx} className="flex items-center gap-5">
                      {featureItem.isNegative ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-100"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-100"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      )}
                      {featureItem.name}
                    </li>
                  ))}
                  <Link
                    href="/contact"
                    className="w-full text-center btn-primary"
                  >
                    Get Started
                  </Link>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
