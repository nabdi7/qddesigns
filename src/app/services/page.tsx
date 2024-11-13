import React from 'react'
import { Metadata } from "next";
import Services from '@/components/services/Services'
import Cta from '@/components/cta/Cta'


export const metadata: Metadata = {
  title: "Web Design, Development, Branding, and More | Services by QD Web Designs",
  description: "Explore the full range of services offered by QD Web Designs, a digital agency in Seattle specializing in web development, web design, logo design, branding, and app development.",
  keywords: "web design services, web development services, logo design services, branding services, app development services, digital agency services",
  openGraph: {
    title: "Web Design, Development, Branding, and More | Services by QD Web Designs",
    description: "Explore the full range of services offered by QD Web Designs, a digital agency in Seattle specializing in web development, web design, logo design, branding, and app development.",
    type: "website",
    siteName: "QD Web Designs",
    url: "https://www.qdwebdesigns.com/services",
    images: [
      {
        url: `/og.jpg`,
        width: 1200,
        height: 630,
        alt: "QD Web Designs Services Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design, Development, Branding, and More | Services by QD Web Designs",
    description: "Explore the full range of services offered by QD Web Designs, a digital agency in Seattle specializing in web development, web design, logo design, branding, and app development.",
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
      <Services />
      <Cta />
    </div>
  )
}

export default page