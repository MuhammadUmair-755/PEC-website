'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { buttonVariants } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/images/Khushab 1.png"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/assets/video/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-sm lg:mt-10">
            PEC Licensed C2/4755 &bull; Est. 2024
          </span>
        </motion.div>

        <motion.h1
          className="mt-8 text-5xl leading-none tracking-wide text-white sm:text-6xl md:text-7xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Where Strength{' '}
          <span className="text-accent">Meets Engineering</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-white/70 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Professional road and civil construction company delivering high-quality,
          durable, and cost-effective infrastructure solutions across Punjab, Pakistan.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'bg-accent px-8 text-base font-semibold text-white hover:bg-accent-hover'
            )}
          >
            View Our Projects
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'border-white/30 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/70 hover:text-base'
            )}
          >
            Request a Tender
          </Link>
        </motion.div>
      </div>

      {/* Scroll down arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8 text-white/50" />
      </motion.div>
    </section>
  )
}
