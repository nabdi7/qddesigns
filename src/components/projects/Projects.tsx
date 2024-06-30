"use client";
import React, { useState } from "react";
import { projects } from "./projectsData";
import Image from "next/image";
import Link from "next/link";

const Projects: React.FC = () => {
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
          <span className="text-green-100 bg-clip-text">
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
                ? "bg-green-100 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index}>
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
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
              </a>
            </div>
            <div className="mt-4 lg:pb-10 pb-5">
              <h4 className="text-lg font-semibold">{project.title}</h4>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        <Link href="/projects" className="btn_white">
          See more
        </Link>
      </div>
    </section>
  );
};

export default Projects;
