'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects, projectCategories } from '@/data/projects'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'

const categoryColors: Record<string, string> = {
  'tuff-paver': 'bg-accent text-white',
  drainage: 'bg-blue-600 text-white',
  road: 'bg-brand text-white',
  pcc: 'bg-success text-white',
  sewerage: 'bg-purple-600 text-white',
}

const categoryLabels: Record<string, string> = {
  'tuff-paver': 'Tuff Paver',
  drainage: 'Drainage',
  road: 'Road Construction',
  pcc: 'PCC Works',
  sewerage: 'Sewerage',
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? projects.slice(0, 6)
      : projects.filter((p) => p.category === activeFilter).slice(0, 6)

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="Our Work"
            title="Completed Projects"
            highlight="Projects"
            subtitle="Delivering quality infrastructure across Punjab — from rural roads to municipal sewerage systems."
            centered
          />
        </motion.div>

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all',
                activeFilter === cat.value
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-white text-charcoal hover:bg-accent/10'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Table header (desktop) */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-4 lg:border-b lg:border-border-light lg:pb-3 lg:text-xs lg:font-semibold lg:uppercase lg:tracking-wider lg:text-muted-text">
          <span className="col-span-5">Project</span>
          <span className="col-span-3">Client</span>
          <span className="col-span-2">Category</span>
          <span className="col-span-2 text-right">Cost</span>
        </div>

        {/* Rows */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className="group w-full border-b border-border-light py-4 lg:grid lg:grid-cols-12 lg:items-center lg:gap-4 lg:rounded-lg lg:px-4 transition-colors hover:bg-white/60"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {/* Title */}
                <div className="col-span-5 flex items-center gap-3">
                  <ChevronRight className="hidden h-4 w-4 shrink-0 text-muted-text lg:block" />
                  <div>
                    <p className="font-semibold text-charcoal leading-snug">
                      {project.title}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-text lg:hidden">
                      {project.client}
                    </p>
                  </div>
                </div>

                {/* Client (desktop) */}
                <p className="col-span-3 hidden text-sm text-muted-text lg:block">
                  {project.client}
                </p>

                {/* Category */}
                <div className="col-span-2 mt-2 lg:mt-0">
                  <Badge
                    className={cn(
                      'border-0 text-xs font-semibold',
                      categoryColors[project.category]
                    )}
                  >
                    {categoryLabels[project.category]}
                  </Badge>
                </div>

                {/* Cost */}
                <p className="col-span-2 mt-1 text-sm font-semibold text-brand lg:mt-0 lg:text-right">
                  PKR {project.costMillions}M
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'bg-brand text-white hover:bg-brand-hover'
            )}
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
