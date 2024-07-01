import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  // socials icons
  const contactMethods = [
    {
      contact: "+1 (206) 883-3462",
      link: "tel:+12068833462",
    },
    {
      contact: "info@qualitydesigns.site",
      link: "mailto:info@qualitydesigns.site",
    },
    {
      contact: "11235 1st Ave S, Seattle, WA",
      link: "https://maps.app.goo.gl/Wn6aLpr8tDrAtX9d8",
    },
  ];
  const contactIcons = [
    {
      // facebook
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="flex-shrink-0 text-gray-30 hover:text-green-100"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      url: "https://www.facebook.com/people/QD-Web-Designs/61550453621801/?mibextid=LQQJ4d",
    },
    {
      // instagram
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="flex-shrink-0 text-gray-30 hover:text-green-100"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      url: "https://www.instagram.com/qd_designs/",
    },
    {
      // twitter
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="flex-shrink-0 text-gray-30 hover:text-green-100"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
      url: "https://www.x.com/qd_designs/",
    },
    {
      // linkedin
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="flex-shrink-0 text-gray-30 hover:text-green-100"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      url: "https://www.linkedin.com/company/quality-designs-llc/",
    },
  ];
  return (
    <footer className="max-container mb-5 lg:py-28 py-14 ">
      <div className="custom-screen flex w-full flex-col max-w-screen-xl">
        <div className="grid grid-cols-1 gap-8  py-6 lg:py-8 lg:grid-cols-4 md:grid-cols-2">
          <div className="space-y-4">
            <Link href="/" className="md:mr-12">
              <Image src="https://res.cloudinary.com/dlehxkdtn/image/upload/logo_oy2wnc.png" alt="logo" width={150} height={100} />
            </Link>
          </div>
          <div className="space-y-4">
            <h2 className="text-md font-semibold text-gray-900 uppercase">
              Our Guidelines
            </h2>
            <ul className="regular-16 flex flex-col gap-1 text-gray-30 space-y-3">
              <li>
                <Link href="/about" className="hover:text-green-100">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-green-100">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-100">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-green-100">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 pt-2">
            <h2 className="text-md font-semibold text-gray-900 uppercase">
              Get in Touch
            </h2>
            <ul className="flex flex-col gap-1 text-gray-30 space-y-3">
              {contactMethods.map((method, index) => (
                <li key={index} className="flex items-center">
                  <a
                    href={method.link}
                    className="hover:underline hover:text-green-100"
                  >
                    {method.contact}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-row space-x-3">
              {contactIcons.map((method, index) => (
                <li key={index} className=" items-center">
                  <a
                    href={method.url}
                  >
                    {method.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 pt-2">
            <h2 className="text-md font-semibold text-gray-900 uppercase">
              Subscribe
            </h2>
            <p className="text-gray-30">Don&apos;t miss any updates</p>
            <form className="flex flex-col items-start">
              <div className="relative  mb-2">
                <input
                  type="email"
                  id="subscribe"
                  required
                  placeholder="Enter your email"
                  className="w-full p-2 pl-10 border border-gray-300 rounded focus:border-green-100 focus:outline-none"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border bg-gray-20 w-full my-6" />

        {/* Copyright */}
        <div className="regular-14 w-full text-center text-gray-30">
          <p className="inline">
            ©{new Date().getFullYear()} QD Web Designs | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
