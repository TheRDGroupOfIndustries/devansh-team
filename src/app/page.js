import Footer from "@/components/Footer";
import Services from "../components/Services";
import TestimonialSection from "../components/TestimonialSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Services />
       <TestimonialSection />
       <Footer/>
    </main>
  );
}
