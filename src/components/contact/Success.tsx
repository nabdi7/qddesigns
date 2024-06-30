import React from "react";

const Success = () => {
  return (
    <div className="mt-12 px-4 rounded-md border-l-4 border-green-200 bg-green-100 md:mx-auto">
      <div className="flex justify-between py-3">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 rounded-full text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="self-center ml-3">
            <span className="text-white font-semibold">Success</span>
            <p className="text-white mt-1">
                We&apos;ll get back to you shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
