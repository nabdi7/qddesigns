import React from 'react'
import { Metadata } from "next";
import Pricing from '@/components/pricing/Pricing'
import Faqs from '@/components/faq/Faqs'
import Cta from '@/components/cta/Cta'

export const metadata: Metadata = {
  title: "Pricing | QD Web Designs",
  description: "Pricing for QD Web Designs, a digital agency specializing in web development, web design, logo design, branding, and app development.",
};

const page = () => {
  return (
    <div>
      <Pricing />
      <Faqs />
      <Cta />
    </div>
  )
}

export default page