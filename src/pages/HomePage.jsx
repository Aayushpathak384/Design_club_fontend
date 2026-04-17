import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import DomainsSection from '../components/DomainsSection'
import EventsSection from '../components/EventsSection'
import FacultySection from '../components/FacultySection'
import TeamSection from '../components/TeamSection'
import AchievementsSection from '../components/AchievementsSection'
import MembershipSection from '../components/MembershipSection'
import GallerySection from '../components/GallerySection'
import TestimonialsSection from '../components/TestimonialsSection'
import CTASection from '../components/CTASection'

function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <DomainsSection />
      <EventsSection />
      <FacultySection />
      <TeamSection />
      <AchievementsSection />
      <MembershipSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}

export default HomePage
