'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function LeadershipSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Leadership"
          title="Meet Our Team Leaders"
          highlight="Leaders"
          centered
        />
        <motion.div
          className="grid gap-10 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* CEO */}
          <motion.div
            variants={itemVariants}
            className="group overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm ring-2 ring-accent/20 transition-all duration-300 hover:border-accent hover:shadow-xl cursor-pointer"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/assets/images/Awais-CEO.jpg"
                alt="Rana Muhammad Awais — CEO"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-brand">Rana Muhammad Awais</h3>
              <p className="mt-1 text-sm font-semibold text-accent">Cheif Executive Officer</p>
            </div>
          </motion.div>

          {/* Managing Director */}
          <motion.div
            variants={itemVariants}
            className="group overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm transition-all duration-300 hover:border-accent hover:shadow-xl cursor-pointer"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/assets/images/Waqasat-Manager.jpg"
                alt="Engineer Waqasat Ali — Managing Director"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-brand">Engineer Waqasat Ali</h3>
              <p className="mt-1 text-sm font-semibold text-accent">Managing Director</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
