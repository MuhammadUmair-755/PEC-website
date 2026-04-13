import type { Machinery } from '@/types/company'
import { getIcon } from '@/lib/utils'

interface MachineCardProps {
  machine: Machinery
}

export function MachineCard({ machine }: MachineCardProps) {
  const IconComponent = getIcon(machine.icon)

  return (
    <div className="group flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-white/10">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
        <IconComponent className="h-8 w-8" />
      </div>
      <h3 className="text-lg font-bold text-white">{machine.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">
        {machine.description}
      </p>
    </div>
  )
}
