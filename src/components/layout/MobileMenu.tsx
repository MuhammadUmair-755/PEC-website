'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { buttonVariants } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export function MobileMenu() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-inherit transition-colors hover:bg-muted lg:hidden" aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-white">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-left">
            <Image
              src="/assets/images/pec-logo.png"
              alt="PEC Logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full"
            />
            <div>
              <span className="text-xl font-bold text-brand">Pyramid</span>{' '}
              <span className="text-xl font-bold text-accent">Engineering</span>
            </div>
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-lg px-4 py-3 text-base font-medium transition-colors',
                  isActive
                    ? 'border-l-4 border-accent bg-accent/10 text-accent'
                    : 'text-charcoal hover:bg-surface'
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants(),
              'mt-4 w-full bg-accent text-white hover:bg-accent-hover'
            )}
          >
            Get a Quote
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
