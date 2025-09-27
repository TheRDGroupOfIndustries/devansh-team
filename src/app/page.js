import AboutSection from "@/components/About";
import FloatComponent from "@/components/FloatComponent";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import TestimonialSection from "@/components/TestimonialSection";
import Contact from "@/components/Contacts";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FloatComponent />
  <Services />
  <Portfolio />
      <TestimonialSection />
      <Contact />
      {/* <ContactClient /> */}
      <Footer />
    </main>
  );
}
