import React from 'react'
import { Metadata } from "next";
import Services from '@/components/services/Services'
import Cta from '@/components/cta/Cta'


export const metadata: Metadata = {
  title: "Services | QD Web Designs",
  description: "Services from QD Web Designs, a digital agency specializing in web development, web design, logo design, branding, and app development.",
};

const page = () => {
  return (
    <div>
      <Services />
      <Cta />
    </div>
  )
}

export default page