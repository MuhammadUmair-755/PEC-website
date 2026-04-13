'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
  variant?: 'default' | 'featured' | 'compact'
}

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

export function ProjectCard({ project, variant = 'default' }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className={cn(
        'group relative block overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        variant === 'compact' && 'rounded-lg'
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden',
          variant === 'featured' ? 'h-72' : variant === 'compact' ? 'h-44' : 'h-56'
        )}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
        <Badge
          className={cn(
            'absolute left-3 top-3 border-0 text-xs font-semibold',
            categoryColors[project.category]
          )}
        >
          {categoryLabels[project.category]}
        </Badge>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-sm font-medium text-accent">
            PKR {project.costMillions}M
          </p>
          <h3 className="mt-1 text-lg font-bold leading-tight text-white line-clamp-2">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-white/70">{project.client}</p>
        </div>
      </div>
      {variant !== 'compact' && (
        <div className="p-4">
          <p className="text-sm text-muted-text line-clamp-2">
            {project.description}
          </p>
          <span className="mt-3 inline-flex items-center text-sm font-semibold text-accent transition-colors group-hover:text-accent-hover">
            View Details
            <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      )}
    </Link>
  )
}
