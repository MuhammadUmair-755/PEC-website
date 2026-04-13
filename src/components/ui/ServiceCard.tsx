'use client'

import Link from 'next/link'
import Image from 'next/image'
import { cn, getIcon } from '@/lib/utils'
import type { Service } from '@/types/service'

interface ServiceCardProps {
  service: Service
  variant?: 'carousel' | 'grid'
}

export function ServiceCard({ service, variant = 'grid' }: ServiceCardProps) {
  const IconComponent = getIcon(service.icon)

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xl border border-border-light bg-white transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1',
        variant === 'carousel' ? 'min-w-0' : ''
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
        <div className="absolute bottom-3 left-3 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-white shadow-lg">
          <IconComponent className="h-6 w-6" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-brand group-hover:text-accent transition-colors">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-text line-clamp-3">
          {service.shortDesc}
        </p>
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent">
          Learn More
          <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
