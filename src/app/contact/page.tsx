import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { ContactContent } from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Pyramid Engineering and Construction for road construction, tuff paver, drainage, and civil works projects in Punjab, Pakistan.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Let's discuss your next project. We're ready to build."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
        backgroundImage="/assets/images/Khushab 6.png"
      />
      <ContactContent />
    </>
  )
}
