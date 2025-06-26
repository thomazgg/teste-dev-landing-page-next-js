// File: src/app/page.tsx
import MenuBar from "@/components/utils/MenuBar";
import Hero from "@/sections/Hero";
import Advantages from "@/sections/Advantages";
import HowItWorks from "@/sections/HowItWorks";
import Testimonials from "@/sections/Testimonials";
import Stats from "@/sections/Stats";
import FAQ from "@/sections/FAQ";
import RegisterWarehouse from "@/sections/RegisterWarehouse";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <MenuBar activePage="/" />
      <Hero />
      <Advantages />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <FAQ />
      <RegisterWarehouse />
      <Footer />
    </>
  );
}