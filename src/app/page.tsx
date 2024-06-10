import Image from "next/image";
import Landing from "@/components/landing/Landing"
import About from "@/components/about/About";
import Services from "@/components/services/Services";
// import Stats from "@/components/stats/Stats";
// import Clients from "@/components/clients/Clients";
import Cta from "@/components/cta/Cta"
import Testimonials from "@/components/testimonial/Testimonial";
// import Brands from "@/components/brands";


export default function Home() {
  return (
    <main className="">
      <Landing />
      <About />
      <Services />
      {/* <Stats /> */}
      {/* <Clients /> */}
      <Testimonials />
      <Cta />
      {/* <Brands /> */}
    </main>
  );
}
