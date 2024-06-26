"use client";
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
          Our{" "}
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
      {/* change to custom-screen later */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="relative">
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden relative">
              {/* <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              /> */}
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="w-full h-56 object-cover"
                />
                {/* eye icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600 absolute bottom-2 right-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth={2}
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth={2}
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </a>
            </div>
            <div className="mt-4 lg:pb-10 pb-5">
              <h4 className="text-lg font-semibold">{project.title}</h4>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
