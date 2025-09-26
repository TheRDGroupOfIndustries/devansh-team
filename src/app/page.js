import Footer from "@/components/Footer";
import Services from "../components/Services";
import TestimonialSection from "../components/TestimonialSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Portfolio from "@/components/Portfolio";
import FloatComponent from "@/components/FloatComponent";

export default function Home() {
  return (
    <main>
      <FloatComponent />
      <Services />
      <Portfolio />
       <TestimonialSection />
       <Footer/>
    </main>
  );
}
