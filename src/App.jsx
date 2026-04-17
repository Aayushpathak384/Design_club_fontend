import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import DomainsSection from './components/DomainsSection'
import EventsSection from './components/EventsSection'
import TeamSection from './components/TeamSection'
import AchievementsSection from './components/AchievementsSection'
import MembershipSection from './components/MembershipSection'
import GallerySection from './components/GallerySection'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <DomainsSection />
        <EventsSection />
        <AchievementsSection />
        <TeamSection />
        <MembershipSection />
        <GallerySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
