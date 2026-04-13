import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services } from '@/data/services'
import { PageHero } from '@/components/ui/PageHero'
import { ServiceDetail } from './ServiceDetail'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return { title: 'Service Not Found' }
  return {
    title: service.title,
    description: service.shortDesc,
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) notFound()

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.shortDesc}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
        backgroundImage={service.image}
      />
      <ServiceDetail service={service} />
    </>
  )
}
