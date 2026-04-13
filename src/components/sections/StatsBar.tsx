'use client'

import { motion } from 'framer-motion'
import { StatCard } from '@/components/ui/StatCard'
import { stats } from '@/data/stats'

export function StatsBar() {
  return (
    <section className="bg-brand">
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-white/10 sm:divide-y-0 sm:divide-x lg:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <StatCard value={stat.value} suffix={stat.suffix} label={stat.label} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
