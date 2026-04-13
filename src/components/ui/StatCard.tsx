'use client'

import { CounterAnimation } from '@/components/animations/CounterAnimation'

interface StatCardProps {
  value: number
  suffix: string
  label: string
}

export function StatCard({ value, suffix, label }: StatCardProps) {
  return (
    <div className="flex flex-col items-center px-4 py-6 text-center">
      <div className="text-3xl font-bold text-accent sm:text-4xl lg:text-5xl">
        <CounterAnimation end={value} suffix={suffix} />
      </div>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/70">
        {label}
      </p>
    </div>
  )
}
