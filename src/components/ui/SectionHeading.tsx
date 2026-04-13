import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  badge?: string
  title: string
  highlight?: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (!highlight) return title
    const parts = title.split(highlight)
    return (
      <>
        {parts[0]}
        <span className="text-accent">{highlight}</span>
        {parts[1] ?? ''}
      </>
    )
  }

  return (
    <div className={cn('mb-12', centered && 'text-center')}>
      {badge && (
        <span
          className={cn(
            'mb-3 inline-block rounded-full px-4 py-1.5 text-sm font-semibold uppercase tracking-wider',
            light
              ? 'bg-white/10 text-white/80'
              : 'bg-accent/10 text-accent'
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          'text-4xl tracking-wide sm:text-5xl lg:text-6xl',
          light ? 'text-white' : 'text-brand'
        )}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-lg',
            light ? 'text-white/70' : 'text-muted-text',
            centered && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'mt-4 h-1 w-16 rounded-full bg-accent',
          centered && 'mx-auto'
        )}
      />
    </div>
  )
}
