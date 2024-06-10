import React from "react";

const Cta = () => {
  return (
    <section className="bg-gray-500 p-10 text-center rounded-lg shadow-lg max-w-5xl w-full mx-auto my-10 px-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Do you have any projects?</h2>
      <p className="text-lg mb-6 text-gray-700">Lets discuss your project and find the best solution for your digital success</p>
      <button className="bg-red-500 text-white py-3 px-6 rounded-md transition duration-300 hover:bg-red-700">
        Contact us
      </button>
    </section>
  );
};

export default Cta;
