import Services from "../components/Services";
import TestimonialSection from "../components/TestimonialSection";
import Navbar from "@/components/Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Services />
       <TestimonialSection />
    </main>
  );
}
