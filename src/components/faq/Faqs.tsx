"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "How long should a web design project take?",
    answer:
      "The duration of a web design project can vary depending on its complexity and scope. Typically, a simple brochure-style website with a few pages may take around 4-6 weeks to complete. More complex websites with custom designs, advanced features, and e-commerce functionality could take several more weeks. To get a more accurate estimate for your specific project, please reach out to us for a personalized consultation.",
  },
  {
    question: "How long should a logo design take?",
    answer:
      "The time required for logo design can vary depending on factors like design complexity, revisions, and client feedback. Simple logo designs may take a few days, while more intricate or custom designs might take up to a couple of weeks. We work closely with our clients to ensure the logo design meets their expectations and brand identity.",
  },
  {
    question: "How long does it take a build a WordPress website?",
    answer:
      "The development time for a WordPress website depends on various factors, including the design complexity, the number of pages, features, and integrations required. A basic WordPress website could be completed in a few weeks, while a more comprehensive and customized site may take a few months. We aim to deliver high-quality websites within a reasonable timeframe, and our team is dedicated to meeting project milestones efficiently. In general it could take 4-6 weeks.",
  },
  {
    question: "What is the process of website development?",
    answer:
      "Our website development process typically follows these stages: 1. Discovery and Planning: We discuss your requirements, goals, and target audience to create a project plan. 2. Design and Prototyping: Our designers create wireframes and mockups for your approval. 3. Development: Our developers build the website, implementing all the features and functionalities. 4. Testing: We rigorously test the website for functionality, responsiveness, and compatibility. 5. Launch: We deploy the website and ensure a smooth go-live. 6. Post-Launch Support: We provide ongoing support and maintenance as needed to keep your website running smoothly.",
  },
  {
    question: "Do you provide website maintenance services?",
    answer:
      "Yes, we offer website maintenance packages to ensure your website runs smoothly and stays up to date.",
  },
  {
    question: "My question isn't in this list!",
    answer:
      "Please reach out to us at info@qualitydesigns.site with your question and we'll get back to you shortly.",
  },
];

const Faqs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className=" py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Frequently Asked Questions
            </h3>
            <div className="mt-3 max-w-xl">
              <p>
                Answered all frequently asked questions, Still confused? feel
                free to contact us.
              </p>
            </div>
          </div>
          <div className="mt-16 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <button
                  className="w-full text-left text-lg  text-gray-700 font-medium"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </button>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-500">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
