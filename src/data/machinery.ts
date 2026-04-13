import type { Machinery } from '@/types/company'

export const machinery: Machinery[] = [
  {
    id: 'excavators',
    name: 'Excavators',
    description:
      'Heavy-duty hydraulic excavators for earthmoving, trenching, demolition, and material handling on construction sites.',
    icon: 'Truck',
  },
  {
    id: 'road-rollers',
    name: 'Road Rollers',
    description:
      'Vibratory and static road rollers for compacting soil, gravel, asphalt, and other materials to achieve required density.',
    icon: 'Cylinder',
  },
  {
    id: 'dump-trucks',
    name: 'Dump Trucks / Trolleys',
    description:
      'Fleet of dump trucks and trolleys for efficient hauling of earth, aggregate, asphalt, and construction materials.',
    icon: 'Container',
  },
  {
    id: 'concrete-mixers',
    name: 'Concrete Mixers',
    description:
      'Reliable concrete mixing equipment for producing consistent, quality-controlled concrete for slabs, pathways, and structures.',
    icon: 'Cog',
  },
  {
    id: 'water-bowsers',
    name: 'Water Bowsers',
    description:
      'Water bowsers for dust suppression, soil compaction moisture control, and concrete curing on active construction sites.',
    icon: 'Droplets',
  },
]
