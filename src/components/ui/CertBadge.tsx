'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { CheckCircle } from 'lucide-react'
import type { Certification } from '@/types/company'

interface CertBadgeProps {
  certification: Certification
}

export function CertBadge({ certification }: CertBadgeProps) {
  return (
    <Dialog>
      <DialogTrigger className="group flex w-full cursor-pointer flex-col items-center rounded-xl border border-border-light bg-white p-6 text-center transition-all duration-300 hover:border-accent hover:shadow-lg">
        <div className="relative mb-4 h-32 w-full overflow-hidden rounded-lg">
          <Image
            src={certification.image}
            alt={certification.title}
            fill
            className="object-contain"
            sizes="300px"
          />
        </div>
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold text-brand">
            {certification.title}
          </h3>
          <Badge className="border-0 bg-success/10 text-success">
            <CheckCircle className="mr-1 h-3 w-3" />
            Active
          </Badge>
        </div>
        <p className="mt-1 font-mono text-sm font-semibold text-accent">
          {certification.number}
        </p>
        <p className="mt-2 text-sm text-muted-text">{certification.detail}</p>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogTitle className="text-brand">{certification.title}</DialogTitle>
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
          <Image
            src={certification.image}
            alt={certification.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 640px"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
