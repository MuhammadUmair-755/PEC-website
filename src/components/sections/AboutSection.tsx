'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { companyInfo, coreValues } from '@/data/company'
import { Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

export function AboutSection() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/assets/images/Khushab 1.png"
                alt="PEC construction site with excavator"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-accent p-5 text-white shadow-xl lg:block">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm font-medium">Projects Delivered</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              badge="About Us"
              title="Pyramid Engineering & Construction"
              subtitle={companyInfo.description}
            />

            <div className="mt-6 flex flex-wrap gap-2">
              {coreValues.slice(0, 4).map((val) => (
                <Badge
                  key={val.title}
                  variant="secondary"
                  className="bg-brand/10 px-3 py-1.5 text-sm font-medium text-brand"
                >
                  {val.title}
                </Badge>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-lg border border-border-light bg-white p-4">
              <Shield className="h-8 w-8 shrink-0 text-success" />
              <div>
                <p className="text-sm font-semibold text-brand">
                  PEC Licensed Constructor
                </p>
                <p className="text-sm text-muted-text">
                  License No. {companyInfo.pecLicense} — Category {companyInfo.pecCategory} — Valid till {companyInfo.pecValidity}
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className={cn(
                buttonVariants(),
                'mt-8 bg-brand text-white hover:bg-brand-hover'
              )}
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
