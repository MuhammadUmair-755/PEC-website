'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'
import type { Service } from '@/types/service'

interface ServiceDetailProps {
  service: Service
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const relatedProjects = projects
    .filter((p) => {
      if (service.slug.includes('tuff-paver')) return p.category === 'tuff-paver' || p.category === 'sewerage'
      if (service.slug.includes('drainage')) return p.category === 'drainage'
      if (service.slug.includes('road')) return p.category === 'road'
      if (service.slug.includes('pcc')) return p.category === 'pcc'
      return true
    })
    .slice(0, 3)

  return (
    <>
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading badge="Service Details" title={service.title} />
              <p className="text-muted-text leading-relaxed">{service.fullDesc}</p>
              <div className="mt-8 space-y-3">
                <h3 className="text-lg font-semibold text-brand">Key Features</h3>
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <span className="text-charcoal">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className={cn(buttonVariants(), 'mt-8 bg-accent text-white hover:bg-accent-hover')}
              >
                Request This Service
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Related Work"
              title="Related Projects"
              centered
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
