import Image from "next/image";
import Landing from "@/components/landing/Landing"
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Clients from "@/components/clients/Clients";
import Testimonial from "@/components/testimonial/Testimonial";
import Cta from "@/components/cta/Cta"

export default function Home() {
  return (
    <main className="">
      <Landing />
      <About />
      <Services />
      <Clients />
      <Testimonial />
      <Cta />
    </main>
  );
}
