'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { buttonVariants } from '@/components/ui/button'
import { MobileMenu } from './MobileMenu'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 overflow-hidden transition-all duration-300',
        scrolled
          ? 'bg-white/95 shadow-md backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <span className="text-lg font-black text-white">P</span>
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={cn(
                'text-lg font-bold transition-colors',
                scrolled ? 'text-brand' : 'text-white'
              )}
            >
              Pyramid
            </span>
            <span
              className={cn(
                'text-xs font-semibold uppercase tracking-wider transition-colors',
                scrolled ? 'text-accent' : 'text-accent'
              )}
            >
              Engineering
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200',
                  isActive
                    ? scrolled
                      ? 'bg-accent/10 text-accent'
                      : 'bg-white/15 text-white'
                    : scrolled
                      ? 'text-charcoal hover:bg-accent/5 hover:text-accent'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-accent" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              'hidden bg-accent text-white hover:bg-accent-hover lg:inline-flex'
            )}
          >
            Get a Quote
          </Link>
          <div className={cn(scrolled ? 'text-brand' : 'text-white')}>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
