'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { getIcon } from '@/lib/utils'

const reasons = [
  {
    icon: 'Shield',
    title: 'PEC Licensed',
    description:
      'Category C2 licensed constructor — License No. C2/4755 — authorized for projects up to PKR 1,000 million.',
  },
  {
    icon: 'FileCheck',
    title: 'Government Approved',
    description:
      'NTN registered (G176871), FBR active taxpayer, and PRA registered — fully compliant with all regulatory requirements.',
  },
  {
    icon: 'Truck',
    title: 'Modern Machinery',
    description:
      'Fleet of excavators, road rollers, dump trucks, concrete mixers, and water bowsers for efficient project execution.',
  },
  {
    icon: 'Award',
    title: 'Quality First',
    description:
      '"Building It Once and Building It Right" — our QHSE philosophy ensures every project meets the highest standards.',
  },
  {
    icon: 'Clock',
    title: 'Timely Delivery',
    description:
      'Proven track record of completing projects within agreed timelines without compromising on quality or safety.',
  },
  {
    icon: 'MapPin',
    title: 'Punjab Coverage',
    description:
      'Operating across Punjab and surrounding regions — from Khushab to Jhelum and beyond, wherever infrastructure is needed.',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="Why PEC"
            title="Why Choose Us"
            highlight="Choose"
            subtitle="What sets Pyramid Engineering & Construction apart from the rest."
            centered
          />
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map((reason) => {
            const Icon = getIcon(reason.icon)
            return (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                className="group rounded-xl border-l-4 border-l-accent bg-surface p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-brand">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-text">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
