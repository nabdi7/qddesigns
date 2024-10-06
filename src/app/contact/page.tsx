import React from 'react'
import { Metadata } from "next";
import Contact from '@/components/contact/Contact'

export const metadata: Metadata = {
  title: "Contact Us | QD Web Designs",
  description: "Contact QD Web Designs, a digital agency specializing in web development, web design, logo design, branding, and app development.",
};

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  )
}

export default page