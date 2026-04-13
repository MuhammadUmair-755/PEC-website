'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { buttonVariants } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import { PHONE_PRIMARY } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function CTASection() {
  return (
    <section className="bg-accent">
      <motion.div
        className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl tracking-wide text-white sm:text-5xl lg:text-6xl">
          Ready to Start Your Project?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Contact us today for government and private sector civil works.
          From road construction to sewerage systems — we deliver on time, every time.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'bg-dark px-8 text-base font-semibold text-white hover:bg-brand'
            )}
          >
            Request a Tender
          </Link>
          <a
            href={`tel:${PHONE_PRIMARY}`}
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'border-white/40 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10'
            )}
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Us Now
          </a>
        </div>
      </motion.div>
    </section>
  )
}
