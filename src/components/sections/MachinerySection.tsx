'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MachineCard } from '@/components/ui/MachineCard'
import { machinery } from '@/data/machinery'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function MachinerySection() {
  return (
    <section className="bg-brand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="Equipment"
            title="Our Equipment Fleet"
            subtitle="Modern machinery and equipment for efficient project execution."
            centered
            light
          />
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {machinery.map((machine) => (
            <motion.div key={machine.id} variants={itemVariants}>
              <MachineCard machine={machine} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
