import React from 'react'
import { Metadata } from "next";
import Contact from '@/components/contact/Contact'

export const metadata: Metadata = {
  title: "Contact QD Web Designs - Seattle-Based Digital Agency",
  description: "Get in touch with QD Web Designs, a digital agency in Seattle specializing in web development, web design, logo design, branding, and app development.",
  keywords: "contact digital agency, web design agency contact, web development agency contact, Seattle digital agency contact",
  openGraph: {
    title: "Contact QD Web Designs - Seattle-Based Digital Agency",
    description: "Get in touch with QD Web Designs, a digital agency in Seattle specializing in web development, web design, logo design, branding, and app development.",
    type: "website",
    siteName: "QD Web Designs",
    url: "https://www.qdwebdesigns.com/contact",
    images: [
      {
        url: `/og.jpg`,
        width: 1200,
        height: 630,
        alt: "QD Web Designs Contact Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact QD Web Designs - Seattle-Based Digital Agency",
    description: "Get in touch with QD Web Designs, a digital agency in Seattle specializing in web development, web design, logo design, branding, and app development.",
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
      <Contact />
    </div>
  )
}

export default page