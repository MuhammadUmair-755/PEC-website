import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { ProjectsGrid } from './ProjectsGrid'

export const metadata: Metadata = {
  title: 'Our Projects',
  description:
    'Browse our completed road and civil construction projects across Punjab, Pakistan — from tuff paver installations to drainage systems and PCC pathways.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="A portfolio of quality infrastructure projects delivered across Punjab."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
        ]}
        backgroundImage="/assets/images/Khushab 10.png"
      />
      <ProjectsGrid />
    </>
  )
}
