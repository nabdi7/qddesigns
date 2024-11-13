import React from 'react'
import { Metadata } from "next";
import Pricing from '@/components/pricing/Pricing'
import Faqs from '@/components/faq/Faqs'
import Cta from '@/components/cta/Cta'

export const metadata: Metadata = {
  title: "Pricing for Web Design, Development, and More | QD Web Designs",
  description: "Explore the pricing for QD Web Designs' services, including web development, web design, logo design, branding, and app development.",
  keywords: "web design pricing, web development pricing, logo design pricing, branding pricing, app development pricing, digital agency pricing",
  openGraph: {
    title: "Pricing for Web Design, Development, and More | QD Web Designs",
    description: "Explore the pricing for QD Web Designs' services, including web development, web design, logo design, branding, and app development.",
    type: "website",
    siteName: "QD Web Designs",
    url: "https://www.qdwebdesigns.com/pricing",
    images: [
      {
        url: `/og.jpg`,
        width: 1200,
        height: 630,
        alt: "QD Web Designs Pricing Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing for Web Design, Development, and More | QD Web Designs",
    description: "Explore the pricing for QD Web Designs' services, including web development, web design, logo design, branding, and app development.",
    images: [`/og.png`],
    creator: "@qualitydesigns",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
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