import React from 'react'
import { Metadata } from "next";
import Quote from "@/components/quote/Quote"

export const metadata: Metadata = {
  title: "Request a Quote for Web Design, Development, and More | QD Web Designs",
  description: "Get a custom quote from QD Web Designs, a digital agency in Seattle specializing in web development, web design, logo design, branding, and app development services.",
  keywords: "web design quote, web development quote, logo design quote, branding quote, app development quote, digital agency quote",
  openGraph: {
    title: "Request a Quote for Web Design, Development, and More | QD Web Designs",
    description: "Get a custom quote from QD Web Designs, a digital agency in Seattle specializing in web development, web design, logo design, branding, and app development services.",
    type: "website",
    siteName: "QD Web Designs",
    url: "https://www.qdwebdesigns.com/quote",
    images: [
      {
        url: `/og.jpg`,
        width: 1200,
        height: 630,
        alt: "QD Web Designs Quote Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Quote for Web Design, Development, and More | QD Web Designs",
    description: "Get a custom quote from QD Web Designs, a digital agency in Seattle specializing in web development, web design, logo design, branding, and app development services.",
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
      <Quote />
    </div>
  )
}

export default page