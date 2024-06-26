"use client";
import { testimonials } from "./index";
import { Testimonials } from "../types/testimonial";

const Testimonial = () => {
  const renderStars = (rating: number) => {
    const stars = [];

    // full star icons
    for (let i = 1; i <= rating; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          &#9733;
        </span>
      );
    }

    // empty star icons for remaining stars
    for (let i = rating + 1; i <= 5; i++) {
      stars.push(
        <span key={i} className="text-gray-300">
          &#9733;
        </span>
      );
    }

    return stars;
  };
  return (
    <section className="lg:py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            What our clients say about us
          </h3>
          <p className="mt-3 text-gray-600">
            Hear from our satisfied clients about their experiences working with
            us. We strive to deliver exceptional results.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item: Testimonials, idx: number) => (
              <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                <figure>
                  <div className="flex items-center gap-x-4">
                    <img
                      src={item.avatar}
                      className="w-16 h-16 rounded-full"
                      alt={`${item.name}'s avatar`}
                    />
                    <div>
                      <span className="block text-gray-800 font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-gray-600 text-sm mt-0.5">
                        {renderStars(item.rating)}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 text-gray-700">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="border-y py-14"></div> */}
    </section>
  );
};

export default Testimonial;
