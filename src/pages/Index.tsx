
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import ProjectsPreview from "../components/ProjectsPreview";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutPreview />
      <ProjectsPreview />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Index;
