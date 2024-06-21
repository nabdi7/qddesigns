import React from "react";

const AboutPage = () => {
  return (
    <>
      <section className="pt-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
          <div className="sm:hidden lg:block lg:max-w-xl">
            <img
              src="/restaurant.png"
              className="w-full object-cover rounded-xl"
              alt="about page image"
              // width={500}
              // height={500}
            />
          </div>
          <div className="mt-6 gap-12 sm:mt-0 md:flex md:flex-col lg:block">
            <div className="max-w-2xl">
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                About Us
              </h3>
              <p className="mt-3 max-w-xl">
                We are a team of developers, designers, and marketers who are
                dedicated to creating amazing websites for our clients. We
                believe that a website should be more than just a pretty face;
                it should be a powerful tool that helps you achieve your goals.
              </p>
              <p className="mt-3 max-w-xl">
                Whether you need a simple blog, an e-commerce site, or a
                custom-built web application, we have the skills and experience
                to bring your vision to life. Let us help you take your online
                presence to the next level!
              </p>
              <p className="mt-3 max-w-xl">
                We are passionate about what we do, and we are committed to
                providing the best possible service to our clients. We take the
                time to understand your needs and goals, and we work closely
                with you every step of the way to ensure that you are happy with
                the final product.
              </p>
              <p className="mt-3 max-w-xl">
                If you are looking for a team of professionals who are
                dedicated, creative, and reliable, look no further. Contact us
                today to learn more about how we can help you achieve your
                online goals.
              </p>
              <p className="mt-3 max-w-xl">
                We look forward to working with you!{" "}
                <span role="img" aria-label="Smile">
                  😊
                </span>
              </p>
            </div>
            <div className="flex-none mt-6 md:mt-0 lg:mt-6">
              {/* socials icon */}
              <div>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                >
                  Facebook
                </a>
                <span className="mx-2">•</span>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                >
                  Twitter
                </a>
                <span className="mx-2">•</span>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our process */}
      <section className="pt-14">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <div className="mx-auto w-full max-w-3xl">
            <div className="text-center">
              <p className="uppercase text-[#1353fe]">6 easy steps</p>
              <h2 className="text-3xl font-semibold capitalize md:text-5xl">
                How it{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                  works
                </span>
              </h2>
              <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                <p className="text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam,purus sit amet luctus magna fringilla urna
                </p>
              </div>
            </div>
          </div> */}

          <div className="max-w-screen-xl  mx-auto">
            <div className="max-w-3xl mb-10 lg:mb-14">
              <p className="uppercase text-[#1353fe]">6 easy steps</p>
              <h2 className=" font-semibold text-3xl md:text-5xl md:leading-tight">
                Our approach
              </h2>
              <p className="mt-1 text-neutral-400">
                This profound insight guides our comprehensive strategy — from
                meticulous research and strategic planning to the seamless
                execution of brand development and website or product
                deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Image Description"
                />
              </div>

              <div>
                <div className="mb-4">
                  <h3 className="text-blue-500 text-xs font-medium uppercase">
                    Steps
                  </h3>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-500 font-semibold text-xs uppercase rounded-full">
                        1
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="text-blue-500">
                        Market Research and Analysis: {""}
                      </span>
                      Identify your target audience and understand their needs,
                      preferences, and behaviors.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-500 font-semibold text-xs uppercase rounded-full">
                        2
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="text-blue-500">
                        Product Development and Testing: {""}
                      </span>
                      Develop digital products or services that address the
                      needs and preferences of your target audience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-500 font-semibold text-xs uppercase rounded-full">
                        3
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="text-blue-500">
                        Marketing and Promotion: {""}
                      </span>
                      Develop a comprehensive marketing strategy to promote your
                      digital products or services.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-500 font-semibold text-xs uppercase rounded-full">
                        4
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="text-gray-800">
                        Launch and Optimization: {""}
                      </span>
                      Launch your digital products or services to the market,
                      closely monitoring their performance and user feedback.
                    </p>
                  </div>
                </div>

                <a
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-indigo-500 font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                      d="M14.05 2a9 9 0 0 1 8 7.94"
                    ></path>
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                      d="M14.05 6A5 5 0 0 1 18 10"
                    ></path>
                  </svg>
                  Schedule a call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
