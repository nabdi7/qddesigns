"use client";
import React from "react";
import stats from "./index";
import { motion } from "framer-motion";

const Stats = () => (
  <section className="custom-screen text-gray-600 gap-20 py-10 pb-32 md:gap-28 lg:py-20">
    <div className="max-w-3xl xl:mx-auto xl:text-center">
      <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
        Get your site to the top of Google Search
      </h3>
      <p className="mt-3">
        We optimize your site for top Google rankings with effective SEO
        strategies.
      </p>
    </div>
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },

        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <div className="mt-12">
        <ul className="flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
          {stats.map((item, idx) => (
            <li key={idx} className="sm:max-w-[15rem]">
              <h4 className="text-4xl text-green-100 font-semibold">
                {item.data}
              </h4>
              <p className="mt-3 font-medium">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  </section>
);

export default Stats;
