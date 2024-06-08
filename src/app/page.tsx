import Image from "next/image";
import Landing from "@/components/landing/Landing"
import Cta from "@/components/cta/Cta"

export default function Home() {
  return (
    <main className="">
      <Landing />
      <h1>Welcome page</h1>
      <Cta />
    </main>
  );
}
