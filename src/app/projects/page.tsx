import React from 'react'
import { Metadata } from "next";
import Projects from '@/components/projects/ProjectsPage'
import Cta from '@/components/cta/Cta'


export const metadata: Metadata = {
  title: "Web Design, Development, and Branding Projects | QD Web Designs",
  description: "Explore the portfolio of web design, web development, logo design, branding, and app development projects created by QD Web Designs, a digital agency in Seattle.",
  keywords: "web design projects, web development projects, logo design projects, branding projects, app development projects, digital agency portfolio",
  openGraph: {
    title: "Web Design, Development, and Branding Projects | QD Web Designs",
    description: "Explore the portfolio of web design, web development, logo design, branding, and app development projects created by QD Web Designs, a digital agency in Seattle.",
    type: "website",
    siteName: "QD Web Designs",
    url: "https://www.qdwebdesigns.com/projects",
    images: [
      {
        url: `/og.jpg`,
        width: 1200,
        height: 630,
        alt: "QD Web Designs Projects Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design, Development, and Branding Projects | QD Web Designs",
    description: "Explore the portfolio of web design, web development, logo design, branding, and app development projects created by QD Web Designs, a digital agency in Seattle.",
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
      <Projects />
      <Cta />
    </div>
  )
}

export default page