import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Domains from "@/components/Domains";
import Events from "@/components/Events";
import Achievements from "@/components/Achievements";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Domains />
      <Events />
      <Achievements />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
