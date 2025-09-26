import Services from "../components/Services";
import TestimonialSection from "../components/TestimonialSection";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/About";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <Services />
       <TestimonialSection />
    </main>
  );
}
