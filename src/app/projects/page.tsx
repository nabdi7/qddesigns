import React from 'react'
import { Metadata } from "next";
import Projects from '@/components/projects/ProjectsPage'
import Cta from '@/components/cta/Cta'

export const metadata: Metadata = {
  title: "Projects | QD Web Designs",
  description: "Projects from QD Web Designs, a digital agency specializing in web development, web design, logo design, branding, and app development.",
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