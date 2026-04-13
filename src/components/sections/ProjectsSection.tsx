'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { buttonVariants } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects, projectCategories } from '@/data/projects'
import { cn } from '@/lib/utils'

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

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
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
