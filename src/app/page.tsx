'use client'

import { HeroSection } from '@/components/sections/HeroSection'
import { StatsBar } from '@/components/sections/StatsBar'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { QHSESection } from '@/components/sections/QHSESection'
import { MachinerySection } from '@/components/sections/MachinerySection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { CTASection } from '@/components/sections/CTASection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUs />
      <QHSESection />
      <MachinerySection />
      <CertificationsSection />
      <CTASection />
      <ContactSection />
    </>
  )
}
