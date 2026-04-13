'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { qhseItems } from '@/data/company'
import { getIcon } from '@/lib/utils'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function QHSESection() {
  return (
    <section className="bg-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="Our Standards"
            title="Quality, Health, Safety & Environment"
            highlight="Quality"
            subtitle="Our commitment to QHSE standards drives every project we deliver."
            centered
            light
          />
        </motion.div>

        <motion.div
          className="grid gap-8 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {qhseItems.map((item) => {
            const Icon = getIcon(item.icon)
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold italic text-accent">
                  &ldquo;{item.tagline}&rdquo;
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
