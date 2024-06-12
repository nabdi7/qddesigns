import Image from "next/image";
import Landing from "@/components/landing/Landing"
import About from "@/components/about/About";
import Packages from "@/components/packages/Packages";
import Stats from "@/components/stats/Stats";
// import Clients from "@/components/clients/Clients";
import Testimonials from "@/components/testimonial/Testimonial";
import Projects from "@/components/projects";
import Cta from "@/components/cta/Cta"
// import Brands from "@/components/brands";


export default function Home() {
  return (
    <main className="">
      <Landing />
      <About />
      <Packages />
      <Stats />
      {/* <Clients /> */}
      <Testimonials />
      <Projects />
      <Cta />
      {/* <Brands /> */}
    </main>
  );
}
