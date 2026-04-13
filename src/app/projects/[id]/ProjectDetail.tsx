'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'
import type { Project } from '@/types/project'
import { Calendar, Building2, FileText, MapPin, Banknote } from 'lucide-react'

const categoryLabels: Record<string, string> = {
  'tuff-paver': 'Tuff Paver',
  drainage: 'Drainage',
  road: 'Road Construction',
  pcc: 'PCC Works',
  sewerage: 'Sewerage',
}

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3)

  return (
    <>
      {/* Gallery */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.images.map((img, i) => (
              <motion.div
                key={img}
                className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Image
                  src={img}
                  alt={`${project.title} — Photo ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionHeading badge="Project Details" title={project.title} />
              <Badge className="mb-6 bg-accent/10 text-accent border-0">
                {categoryLabels[project.category]}
              </Badge>
              <p className="text-lg leading-relaxed text-muted-text">
                {project.description}
              </p>
              <Link
                href="/contact"
                className={cn(buttonVariants(), 'mt-8 bg-accent text-white hover:bg-accent-hover')}
              >
                Start a Similar Project
              </Link>
            </div>

            <div className="rounded-xl border border-border-light bg-surface p-6">
              <h3 className="mb-6 text-lg font-bold text-brand">Project Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-text">
                      Client
                    </p>
                    <p className="font-medium text-charcoal">{project.client}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-text">
                      Work Order No.
                    </p>
                    <p className="font-medium text-charcoal">{project.workOrderNo}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-text">
                      Year Awarded
                    </p>
                    <p className="font-medium text-charcoal">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Banknote className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-text">
                      Project Cost
                    </p>
                    <p className="font-medium text-charcoal">
                      PKR {project.costMillions} Million
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-text">
                      Location
                    </p>
                    <p className="font-medium text-charcoal">{project.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="More Projects"
              title="Related Projects"
              centered
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
