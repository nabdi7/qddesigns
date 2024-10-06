import React from 'react'
import { Metadata } from "next";
import About from '@/components/about/AboutPage'
import Cta from '@/components/cta/Cta'

export const metadata: Metadata = {
  title: "About Us | QD Web Designs",
  description: "Learn more about QD Web Designs, a digital agency specializing in web development, web design, logo design, branding, and app development.",
};

const page = () => {
  return (
    <div>
      <About />
      <Cta />
    </div>
  )
}

export default page