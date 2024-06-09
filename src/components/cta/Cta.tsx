import React from "react";

const Cta = () => {
  return (
    <section className="bg-blue-600 text-white py-16 rounded-xl">
      <div className="max-container padding-container flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to take your business to the next level?</h2>
        <a href="/contact" className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-200 transition">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Cta;
