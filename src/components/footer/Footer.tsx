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
      link: "https://maps.app.goo.gl/JPdcCHaH6RSksVcp7",
    },
  ];
  const contactIcons = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-gray-800 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
            clip-rule="evenodd"
          />
        </svg>
      ),
      url: "www.facebook.com",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-gray-800 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
            clip-rule="evenodd"
          />
        </svg>
      ),
      url: "www.Instagram.com",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
            clip-rule="evenodd"
          />
        </svg>
      ),
      url: "www.Twitter.com",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
            clip-rule="evenodd"
          />
          <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
        </svg>
      ),
      url: "www.Linkedln.com",
    },
  ];
  return (
    <footer className="max-container mb-5 lg:py-28 py-14 ">
      <div className="custom-screen flex w-full flex-col max-w-screen-xl">
        <div className="grid grid-cols-1 gap-8  py-6 lg:py-8 lg:grid-cols-4 md:grid-cols-2">
          <div className="space-y-4">
            <Link href="/" className="md:mr-12">
              <Image src="/logo.png" alt="logo" width={150} height={150} />
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
                <Link href="/packages" className="hover:text-green-100">
                  Packages
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
                    className="hover:underline hover:text-green-100"
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
            <p className="text-gray-30">Dont miss any updates</p>
            <form className="flex flex-col items-start">
              <input
                type="email"
                id="subscribe"
                placeholder="Enter email"
                className="mb-2 p-2 border border-gray-300 rounded focus:border-green-100 focus:outline-none"
              />
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
