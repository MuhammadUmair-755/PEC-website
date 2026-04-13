import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { PageHero } from '@/components/ui/PageHero'
import { ProjectDetail } from './ProjectDetail'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) notFound()

  return (
    <>
      <PageHero
        title={project.title}
        subtitle={`${project.client} — ${project.location}`}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: project.title, href: `/projects/${project.id}` },
        ]}
        backgroundImage={project.image}
      />
      <ProjectDetail project={project} />
    </>
  )
}
