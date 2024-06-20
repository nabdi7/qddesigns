import React from "react";

const AboutPage = () => {
  return (
    <>
      <section className="pt-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
          <div className="sm:hidden lg:block lg:max-w-xl">
            <img
              src="/restaurant.png"
              className="rounded-lg"
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
          <div className="mx-auto w-full max-w-3xl">
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
          </div>
        </div>
      </section>

    </>
  );
};

export default AboutPage;
