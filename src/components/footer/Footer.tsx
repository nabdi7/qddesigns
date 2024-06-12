import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerNavs = [
    {
      label: "Company",
      items: [
        {
          href: "javascript:void()",
          name: "Partners",
        },
        {
          href: "javascript:void()",
          name: "Blog",
        },
        {
          href: "javascript:void()",
          name: "Team",
        },
        {
          href: "javascript:void()",
          name: "Careers",
        },
      ],
    },
    {
      label: "Resources",
      items: [
        {
          href: "javascript:void()",
          name: "contact",
        },
        {
          href: "javascript:void()",
          name: "Support",
        },
        {
          href: "javascript:void()",
          name: "Docs",
        },
        {
          href: "javascript:void()",
          name: "Pricing",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          href: "javascript:void()",
          name: "Terms",
        },
        {
          href: "javascript:void()",
          name: "License",
        },
        {
          href: "javascript:void()",
          name: "Privacy",
        },
        {
          href: "javascript:void()",
          name: "About US",
        },
      ],
    },
  ];
  return (
    <footer className="max-container mb-5 py-20 ">
      <div className="padding-container flex w-full flex-col gap-12 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="flex flex-col items-start md:flex-row md:items-start md:gap-8">
          <Link href="/" className="mb-4 md:mb-0 md:mr-12">
            <Image src="/logo.png" alt="logo" width={150} height={150} />
          </Link>

          <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
            <div className="flex flex-col gap-2">
              <h4 className="bold-18">Our Guidelines</h4>
              <ul className="regular-14 flex flex-col gap-1 text-gray-30">
                <li>
                  <Link href="/about" className="hover:text-green-50">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/packages" className="hover:text-green-50">
                    Packages
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-green-50">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-green-50">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="bold-18">Get in Touch</h4>
              <p>info@qualitydesigns.site</p>
              {/* <p>11235 1st Ave S, Seattle, WA</p> */}
              <p>206 883 3462</p>
              <ul className="flex gap-2 mt-2">
                <li>
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/facebook-icon.png"
                      alt="Facebook"
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/twitter-icon.png"
                      alt="Twitter"
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/instagram-icon.png"
                      alt="Instagram"
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/linkedin-icon.png"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="bold-18">Subscribe</h4>
              <p>Dont miss any updates</p>
              <form className="flex flex-col items-start">
                <input
                  type="email"
                  id="subscribe"
                  placeholder="Enter email"
                  className="mb-2 p-2 border rounded"
                />
                <button
                  type="submit"
                  className="p-2 bg-black text-white rounded"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20 w-full my-4" />

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
