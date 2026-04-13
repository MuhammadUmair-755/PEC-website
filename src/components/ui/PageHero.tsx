import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb: { label: string; href: string }[]
  backgroundImage?: string
}

export function PageHero({
  title,
  subtitle,
  breadcrumb,
  backgroundImage = '/assets/images/Khushab 1.png',
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-dark/75" />
      <div className="relative z-10 px-4 py-24 text-center">
        <nav className="mb-6 flex items-center justify-center gap-1 text-sm text-white/60">
          {breadcrumb.map((item, i) => (
            <span key={item.href} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
              {i === breadcrumb.length - 1 ? (
                <span className="text-accent">{item.label}</span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-5xl tracking-wide text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
