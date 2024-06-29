import React from "react";
import Wave from "../waves";

const services = [
  {
    title: "Website Development",
    description:
      "We build responsive, user-friendly websites that drive engagement and conversions. Our web development services ensure your site is fast, secure, and optimized for the best user experience.",
    icon: "💻",
    types: ["Custom Website", "CMS Development", "E-commerce Development", "Website Maintenance"],
  },
  {
    title: "App Development",
    description:
      "Transform your ideas into functional, user-centric mobile and web applications. Our app development services include design, development, and maintenance to ensure your app performs seamlessly across all devices.",
    icon: "📱",
    types: ["iOS Development", "Android Development", "Cross-Platform Development", "Progressive Web Apps"],
  },
  {
    title: "Branding",
    description:
      "Our branding service empowers businesses to develop a distinctive identity that resonates with their target audience and sets them apart from the competition. We craft captivating logos, sensory color palettes, and compelling brand narratives that create a lasting impact on customers. With our comprehensive brand guidelines, your brand identity remains consistent across all platforms, leaving a memorable impression.",
    icon: "🎨",
    types: [
      "Logo Design",
      "Brand Strategy Consulting",
      "Brand Identity Design",
      "User Interface Design",
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Our digital marketing strategies help you reach a larger audience and increase conversions. We use a variety of tactics including SEO, PPC, content marketing, and social media marketing to drive traffic and engagement.",
    icon: "📈",
    types: ["SEO", "PPC", "Content Marketing", "Social Media Marketing"],
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your website's visibility on search engines with our expert SEO services. We conduct comprehensive keyword research, optimize your content, and build quality backlinks to increase your rankings.",
    icon: "🔍",
    types: ["Keyword Research", "On-Page SEO", "Off-Page SEO", "Technical SEO"],
  },
  {
    title: "Quality Assurance",
    description:
      "Ensure the highest quality for your software with our quality assurance services. We provide comprehensive testing, including manual and automated testing, to identify and fix issues before they impact your users.",
    icon: "✔️",
    types: ["Manual Testing", "Automated Testing", "Performance Testing", "Security Testing"],
  },
  {
    title: "Graphic Design",
    description:
      "Our creative designers will provide visually stunning graphics that captivate your audience. From social media graphics to print design, we cover all your graphic design needs.",
    icon: "🖌️",
    types: [
      "Social Media Graphics",
      "Print Design",
      "Illustrations",
      "Infographics",
    ],
  },
  {
    title: "Animation",
    description:
      "Bring your ideas to life with our animation services. We create engaging animations for various purposes, including explainer videos, product demos, and marketing campaigns.",
    icon: "🎥",
    types: [
      "2D Animation",
      "3D Animation",
      "Motion Graphics",
      "Explainer Videos",
    ],
  },
];


const Services = () => {
  return (
    <>
      <Wave />
      <section className="custom-screen py-8 lg:py-14">
        <div className="max-w-3xl xl:mx-auto xl:text-center md:text-center md:mx-auto pb-6">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            How We Can Help Your Business
          </h3>
        </div>
        <div className="mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center mb-16 pb-6"
            >
              <div className="flex flex-col items-center w-full lg:w-1/2 text-center pb-6">
                <div className="text-6xl mb-4 pb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {service.title}
                </h2>
              </div>
              <div className="w-full lg:w-1/2 lg:pl-12 text-left">
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
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
