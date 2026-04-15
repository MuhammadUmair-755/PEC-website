'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { LeadershipSection } from '@/components/sections/LeadershipSection'
import { companyInfo, coreValues, missionItems, qhseItems } from '@/data/company'
import { CheckCircle } from 'lucide-react'
import { getIcon } from '@/lib/utils'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function AboutContent() {
  return (
    <>
      {/* Company Story */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                badge="Our Story"
                title="Who We Are"
                subtitle={companyInfo.description}
              />
              <p className="mt-4 text-muted-text">{companyInfo.vision}</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-accent">10+</p>
                  <p className="text-sm text-muted-text">Projects Completed</p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-accent">130M+</p>
                  <p className="text-sm text-muted-text">PKR Project Value</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/assets/images/Khushab 1.png"
                alt="PEC construction site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <LeadershipSection />

      {/* Mission */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Mission"
            title="What Drives Us"
            centered
          />
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {missionItems.map((item) => (
              <motion.div
                key={item.text}
                variants={itemVariants}
                className="flex items-start gap-3 rounded-lg bg-surface p-5"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <p className="text-charcoal">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Core Values"
            title="What We Stand For"
            highlight="Stand For"
            centered
          />
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {coreValues.map((val) => {
              const Icon = getIcon(val.icon)
              return (
                <motion.div
                  key={val.title}
                  variants={itemVariants}
                  className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand">{val.title}</h3>
                  <p className="mt-2 text-sm text-muted-text">{val.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* QHSE */}
      <section className="bg-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="QHSE"
            title="Quality, Health, Safety & Environment"
            centered
            light
          />
          <motion.div
            className="grid gap-8 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {qhseItems.map((item) => {
              const Icon = getIcon(item.icon)
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="rounded-xl border border-white/10 bg-white/5 p-8"
                >
                  <Icon className="mb-4 h-10 w-10 text-accent" />
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm italic text-accent">
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

      {/* Timeline */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Timeline" title="Our Journey" centered />
          <div className="space-y-8">
            {[
              { year: '2024', event: 'Pyramid Engineering and Construction founded in Talagang, Punjab' },
              { year: '2024', event: 'Pakistan Engineering Council (PEC) License obtained — Category C2, License No. C2/4755' },
              { year: '2025', event: 'First major projects awarded — Khushab and Jhelum district works totaling PKR 130M+' },
              { year: '2025', event: 'Expanded operations to 10+ concurrent projects across Punjab' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  {i < 3 && <div className="mt-2 h-full w-0.5 bg-border-light" />}
                </div>
                <div className="pb-8">
                  <span className="text-sm font-bold text-accent">{item.year}</span>
                  <p className="mt-1 text-charcoal">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
