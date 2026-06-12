import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Footer from '@/components/layout/Footer';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}
