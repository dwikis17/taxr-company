import Image from "next/image";
import Hero from "./ui/shared/hero";
import Navbar from "./ui/shared/navbar";
import HowWorks from "./ui/shared/how-works";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <HowWorks />

    </main>
  );
}
