'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/ui/SectionHeading'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import {
  projects,
  projectCategories,
  siteHighlights,
  highlightLocations,
} from '@/data/projects'
import { cn } from '@/lib/utils'
import type { Project } from '@/types/project'
import {
  Building2,
  FileText,
  Calendar,
  Banknote,
  MapPin,
  ChevronRight,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Category helpers                                                  */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Info row used inside the modal                                    */
/* ------------------------------------------------------------------ */

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-text">
          {label}
        </p>
        <p className="font-medium text-charcoal">{value}</p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeLocation, setActiveLocation] = useState<string>('All')

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  const filteredHighlights =
    activeLocation === 'All'
      ? siteHighlights
      : siteHighlights.filter((h) => h.location === activeLocation)

  return (
    <>
      {/* ── Projects list ──────────────────────────────────────── */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter bar */}
          <div className="mb-10 flex flex-wrap gap-2">
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
                <motion.button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group w-full text-left border-b border-border-light py-4 transition-colors hover:bg-white/60 lg:grid lg:grid-cols-12 lg:items-center lg:gap-4 lg:rounded-lg lg:px-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  {/* Title */}
                  <div className="col-span-5 flex items-center gap-3">
                    <ChevronRight className="hidden h-4 w-4 shrink-0 text-muted-text transition-transform group-hover:translate-x-0.5 group-hover:text-accent lg:block" />
                    <div>
                      <p className="font-semibold text-charcoal group-hover:text-accent transition-colors leading-snug">
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
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-muted-text">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>

      {/* ── Project detail modal ───────────────────────────────── */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null)
        }}
      >
        {selectedProject && (
          <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold text-brand leading-snug">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Details for {selectedProject.title}
              </DialogDescription>
            </DialogHeader>

            <Badge
              className={cn(
                'w-fit border-0 text-xs font-semibold',
                categoryColors[selectedProject.category]
              )}
            >
              {categoryLabels[selectedProject.category]}
            </Badge>

            <p className="text-sm leading-relaxed text-muted-text">
              {selectedProject.description}
            </p>

            <div className="space-y-4 rounded-xl border border-border-light bg-surface p-4">
              <InfoRow
                icon={Building2}
                label="Client"
                value={selectedProject.client}
              />
              <InfoRow
                icon={FileText}
                label="Work Order No."
                value={selectedProject.workOrderNo}
              />
              <InfoRow
                icon={Calendar}
                label="Year Awarded"
                value={String(selectedProject.year)}
              />
              <InfoRow
                icon={Banknote}
                label="Project Cost"
                value={`PKR ${selectedProject.costMillions} Million`}
              />
              <InfoRow
                icon={MapPin}
                label="Location"
                value={selectedProject.location}
              />
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* ── Site Highlights gallery ────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Gallery"
            title="Site Highlights"
            highlight="Highlights"
            subtitle="Browse photos from our active project sites across Punjab."
            centered
          />

          {/* Location filter */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {highlightLocations.map((loc) => (
              <button
                key={loc}
                onClick={() => setActiveLocation(loc)}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-medium transition-all',
                  activeLocation === loc
                    ? 'bg-brand text-white shadow-md'
                    : 'bg-surface text-charcoal hover:bg-brand/10'
                )}
              >
                {loc}
              </button>
            ))}
          </div>

          {/* Image grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLocation}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredHighlights.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Image
                    src={photo.src}
                    alt={`Site photo — ${photo.location}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand opacity-0 transition-opacity group-hover:opacity-100">
                    {photo.location}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
