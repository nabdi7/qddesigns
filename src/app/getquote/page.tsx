import React from 'react'
import { Metadata } from "next";
import Quote from "@/components/quote/Quote"

export const metadata: Metadata = {
  title: "Get a Quote | QD Web Designs",
  description: "Get a quote from QD Web Designs, a digital agency specializing in web development, web design, logo design, branding, and app development.",
};

const page = () => {
  return (
    <div>
      <Quote />
    </div>
  )
}

export default page