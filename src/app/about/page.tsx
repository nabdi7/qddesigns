import React from 'react'
import { Metadata } from "next";
import About from '@/components/about/AboutPage'
import Cta from '@/components/cta/Cta'

export const metadata: Metadata = {
  title: "About QD Web Designs - A Seattle-Based Digital Agency",
  description: "Learn more about QD Web Designs, a digital agency in Seattle specializing in web development, web design, logo design, branding, and app development.",
  keywords: "web design agency, web development agency, Seattle digital agency, logo design, branding, app development",
  openGraph: {
    title: "About QD Web Designs - A Seattle-Based Digital Agency",
    description: "Learn more about QD Web Designs, a digital agency in Seattle specializing in web development, web design, logo design, branding, and app development.",
    type: "website",
    siteName: "QD Web Designs",
    url: "https://www.qdwebdesigns.com/about",
    images: [
      {
        url: `/og.jpg`,
        width: 1200,
        height: 630,
        alt: "QD Web Designs About Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About QD Web Designs - A Seattle-Based Digital Agency",
    description: "Learn more about QD Web Designs, a digital agency in Seattle specializing in web development, web design, logo design, branding, and app development.",
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
      <About />
      <Cta />
    </div>
  )
}

export default page