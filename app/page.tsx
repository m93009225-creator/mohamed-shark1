import FeaturedItems from "@/components/sections/FeaturedItems";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Categories from "@/components/sections/Categories";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Categories />
      <FeaturedItems />
      <Contact />
    </>
  );
}
