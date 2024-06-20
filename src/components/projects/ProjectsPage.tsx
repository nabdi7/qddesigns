"use client"
import React, { useState } from "react";
import { projects } from "./AllProjects";
import Image from "next/image";

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="custom-screen text-gray-600 gap-20 py-14 pb-32 md:gap-28 lg:py-20">
      <div className="max-w-3xl xl:mx-auto xl:text-center md:text-center md:mx-auto">
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          A glimpse into our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
            projects
          </span>
        </h3>
        <p className="mt-3">
          A look at some of the amazing websites that we&apos;ve built recently.
        </p>
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        {["All", "Websites", "Apps"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? "bg-gradient-to-r from-[#4F46E5] to-[#E114E5] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {/* change to custome-screen later */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index}>
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
              {/* <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              /> */}
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold">{project.title}</h4>
              <p className="mt-2 text-gray-600">{project.description}</p>
              {/* <p className="mt-2 text-sm text-gray-500">{project.category}</p> */}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ProjectsPage;
