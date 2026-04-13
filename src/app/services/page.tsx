import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { ServicesGrid } from './ServicesGrid'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore our comprehensive road and civil construction services including road construction, tuff paver, drainage, sewerage, PCC works, and more across Punjab, Pakistan.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive road and civil construction services delivered with quality and precision."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
        ]}
        backgroundImage="/assets/images/Khushab 3.png"
      />
      <ServicesGrid />
    </>
  )
}
