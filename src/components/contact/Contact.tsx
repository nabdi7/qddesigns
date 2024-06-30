"use client";
import emailjs from '@emailjs/browser';
import React, { useState, useRef, FormEvent } from 'react';
import contactMethods, { socials } from "./index";
import Wave from "../waves";
import Success from './Success'; 

interface ContactFormState {
  formSubmitted: boolean;
  contactMessage: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  message: string;
}

const Contact = () => {
  const [{ formSubmitted, contactMessage, user_name, user_email, message }, setState] = useState<ContactFormState>({
    formSubmitted: false,
    contactMessage: "",
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);
  console.log("Service ID:", process.env.NEXT_PUBLIC_APP_SERVICE_ID);
  console.log("Template ID:", process.env.NEXT_PUBLIC_APP_TEMPLATE_ID);
  console.log("User ID:", process.env.NEXT_PUBLIC_APP_USER_ID);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_APP_SERVICE_ID ?? "", process.env.NEXT_PUBLIC_APP_TEMPLATE_ID?? "", formRef.current!, process.env.NEXT_PUBLIC_APP_USER_ID ?? "")
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setState((prevState) => ({
            ...prevState,
            formSubmitted: true,
            contactMessage: "We got your message. Thanks!",
          }));
          setTimeout(() => {
            setState((prevState) => ({
              ...prevState,
              contactMessage: "",
              user_name: "",
              user_phone: "",
              user_email: "",
              message: "",
              formSubmitted: false,
            }));
          }, 1000);
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );
  };

  const servicesItems = [
    "Mobile development",
    "UI/UX Design",
    "Web development",
    "SEO",
  ];

  return (
    <>
      <Wave />
      <section className="py-8 lg:py-14">
        <div className="custom-screen relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Contact Us
          </h3>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        {/* {formSubmitted && <Success />} */}
          <div className="max-w-6xl mx-auto lg:max-w-none gap-12 py-10 lg:py-14">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition"
                  href={method.link}
                >
                  <div className="p-4 md:p-5">
                    <div className="flex">
                      {method.icon}
                      <div className="grow ms-5">
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400">
                          {method.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                          {method.contact || method.link}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="lg:mt-14 mt-8 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
              <div className="order-1 lg:order-2 py-4 lg:py-0">
                <h3 className="font-semibold text-gray-800 text-xl">Message</h3>
                <p className="mt-2 lg:text-lg text-gray-500">
                  Please feel free to call or email us, or use our contact form
                  to get in touch with us.
                </p>
                <p className="mt-1 lg:text-lg text-gray-500">
                  We look forward to hearing from you!
                </p>
                <div className="flex gap-3 mt-4">
                  {socials
                    .filter((method) => method.socialIcon)
                    .map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        className="text-gray-500 hover:text-green-100"
                      >
                        {social.socialIcon}
                      </a>
                    ))}
                </div>
              </div>
              <div className="flex-1 order-2 lg:order-1 mt-12 sm:max-w-lg lg:mt-0">
                <form
                  ref={formRef}
                  onSubmit={sendEmail}
                  className="space-y-5 p-6 bg-white border border-gray-200 shadow-sm rounded-lg"
                >
                  <div>
                    <label className="font-medium">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      value={user_name}
                      onChange={(e) => setState((prevState) => ({ ...prevState, user_name: e.target.value }))}
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-100 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      value={user_email}
                      onChange={(e) => setState((prevState) => ({ ...prevState, user_email: e.target.value }))}
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-100 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium">Services</label>
                    <ul className="grid gap-y-2 gap-x-6 flex-wrap grid-cols-2 mt-3">
                      {servicesItems.map((item, idx) => (
                        <li key={idx} className="flex gap-x-3 text-sm">
                          <div>
                            <input
                              id={`service-${idx}`}
                              type="checkbox"
                              className="checkbox-item peer hidden"
                            />
                            <label
                              htmlFor={`service-${idx}`}
                              className="relative flex w-5 h-5 bg-white peer-checked:bg-green-100 rounded-md border ring-offset-2 ring-green-100 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                            ></label>
                          </div>
                          <label
                            htmlFor={`service-${idx}`}
                            className="cursor-pointer"
                          >
                            {item}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <label className="font-medium">Message</label>
                    <textarea
                      name="message"
                      value={message}
                      onChange={(e) => setState((prevState) => ({ ...prevState, message: e.target.value }))}
                      required
                      className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-green-100 shadow-sm rounded-lg"
                    ></textarea>
                  </div>
                  {formSubmitted && <Success />}
                  <button className="w-full px-4 py-2 text-white font-medium bg-green-100 hover:bg-green-200 active:bg-gray-7000 rounded-lg duration-150">
                    Submit
                  </button>
                  {/* <div className="mt-3 text-center">
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      We&apos;ll get back to you in 1-2 business days.
                    </p>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
