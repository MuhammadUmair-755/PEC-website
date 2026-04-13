import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { AboutContent } from './AboutContent'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Pyramid Engineering and Construction — our mission, vision, core values, and commitment to quality infrastructure development in Punjab, Pakistan.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Learn about our mission, values, and commitment to quality construction."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
        backgroundImage="/assets/images/Khushab 2.png"
      />
      <AboutContent />
    </>
  )
}
