import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Security from "@/components/Security";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-background selection:bg-surface-tint/30 selection:text-white">
      <Navbar />
      <main className="pt-24 pb-12">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Security />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
