import type { Project, SiteHighlight } from '@/types/project'

/* ------------------------------------------------------------------ */
/*  Site highlight photos — grouped by area, not tied to any project  */
/* ------------------------------------------------------------------ */

export const siteHighlights: SiteHighlight[] = [
  // Khushab
  { src: '/assets/images/Khushab 1.png', location: 'Khushab' },
  { src: '/assets/images/Khushab 2.png', location: 'Khushab' },
  { src: '/assets/images/Khushab 3.png', location: 'Khushab' },
  { src: '/assets/images/Khushab 4.png', location: 'Khushab' },
  { src: '/assets/images/Khushab 5.png', location: 'Khushab' },
  { src: '/assets/images/Khushab 6.png', location: 'Khushab' },
  { src: '/assets/images/Khushab 7.png', location: 'Khushab' },
  { src: '/assets/images/Khushab 8.png', location: 'Khushab' },
  { src: '/assets/images/Khushab 9.png', location: 'Khushab' },
  { src: '/assets/images/Khushab 10.png', location: 'Khushab' },
  { src: '/assets/images/Khushab 11.png', location: 'Khushab' },
  { src: '/assets/images/Khushab 12.png', location: 'Khushab' },
  { src: '/assets/images/Khushab 13.png', location: 'Khushab' },
  { src: '/assets/images/Khushab 14.png', location: 'Khushab' },
  { src: '/assets/images/Mohalla Bhagalan wala Khushab.png', location: 'Khushab' },
  // Kadari Kalan
  { src: '/assets/images/Kadari Kalan 1.png', location: 'Kadari Kalan' },
  { src: '/assets/images/Kadari Kalan 2.png', location: 'Kadari Kalan' },
  // Kotla
  { src: '/assets/images/Kotla 1.png', location: 'Kotla' },
  { src: '/assets/images/Kotla 2.png', location: 'Kotla' },
]

export const highlightLocations = ['All', 'Khushab', 'Kadari Kalan', 'Kotla'] as const

/* ------------------------------------------------------------------ */
/*  Projects                                                          */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    id: 'pcc-tuff-paver-chak-61-64',
    title: 'PCC Slab / Tuff Paver / Drain — Chak No. 61/62/63/64 MB',
    client: 'District Council Khushab',
    workOrderNo: 'DO(I&S) 170',
    year: 2025,
    costMillions: 30.0,
    location: 'Khushab — Lat: 32.308683, Long: 72.343860',
    category: 'tuff-paver',
    description:
      'PCC slab, tuff paver, and drain construction in the area of Chak No. 61/62/63/64 MB, Nara Januabi, Chanki Janubi, Kund Janubi and Waheer Januabi, District Khushab.',
  },
  {
    id: 'tuff-paver-mitha-nalka-hussainabad',
    title: 'Tuff Paver & Drain — Mitha Nalka Wala Chowk to Hussainabad',
    client: 'Municipal Committee Khushab',
    workOrderNo: 'MO(I&S) 7155',
    year: 2025,
    costMillions: 10.0,
    location: 'Khushab — Lat: 32.291537, Long: 72.355961',
    category: 'tuff-paver',
    description:
      'Tuff paver and drain from Mitha Nalka Wala Chowk to Hakima Wala to Muhallah Hussainabad, Khushab.',
  },
  {
    id: 'tuff-paver-khawajgan-badshahwala',
    title: 'Tuff Paver & Drain — Muhallah Khawajgan to Chowk Badshahwala',
    client: 'Municipal Committee Khushab',
    workOrderNo: 'MO(I&S) 7150',
    year: 2025,
    costMillions: 20.0,
    location: 'Khushab — Lat: 32.295870, Long: 72.352387',
    category: 'tuff-paver',
    description:
      'Tuff paver and drain from Muhallah Khawajgan to Chowk Badshahwala via Dekotranwali, District Khushab.',
  },
  {
    id: 'tuff-paver-shoaib-autos-imranabad',
    title: 'Tuff Paver & Drain — Shoaib Autos to Imranabad',
    client: 'Municipal Committee Khushab',
    workOrderNo: 'MO(I&S) 7160',
    year: 2025,
    costMillions: 10.0,
    location: 'Khushab — Lat: 32.307677, Long: 72.342852',
    category: 'tuff-paver',
    description:
      'Tuff paver and drain from Shoaib Autos, Main Sargodha Road to Imranabad, District Khushab.',
  },
  {
    id: 'tuff-paver-pcc-sewerage-mc-khushab',
    title: 'Tuff Paver / PCC Slab / Drain / Nallah & Sewerage — MC Khushab',
    client: 'Municipal Committee Khushab',
    workOrderNo: 'MO(I&S) 7145',
    year: 2025,
    costMillions: 50.0,
    location: 'Mohalla Bhagalan Wala, Khushab — Lat: 32.293086, Long: 72.353192',
    category: 'sewerage',
    description:
      'Tuff paver, PCC slab, drain, pull, nallah and sewerage in the area of Municipal Committee Khushab.',
  },
  {
    id: 'street-construction-budhar-jhelum',
    title: 'Street Construction — Budhar, UC Ladhar',
    client: 'District Council Jhelum',
    workOrderNo: 'DO(I&S) 285',
    year: 2025,
    costMillions: 1.98,
    location: 'Kadari Kalan, Punjab — Lat: 33.222222, Long: 73.602521',
    category: 'road',
    description:
      'Construction of street Budhar, UC Ladhar, Tehsil Dina, District Jhelum.',
  },
  {
    id: 'street-construction-ghadari-jhelum',
    title: 'Street Construction — Village Ghadari, UC Lehri',
    client: 'District Council Jhelum',
    workOrderNo: 'DO(I&S) 293',
    year: 2025,
    costMillions: 3.97,
    location: 'Khushab — Lat: 32.308603, Long: 72.345584',
    category: 'road',
    description:
      'Construction of street, Village Ghadari, UC Lehri, Tehsil Sohawa, District Jhelum.',
  },
  {
    id: 'street-construction-sanaths-jhelum',
    title: 'Street Construction — Village Sanaths',
    client: 'District Council Jhelum',
    workOrderNo: 'DO(I&S) 284',
    year: 2025,
    costMillions: 2.78,
    location: 'Khushab-Sakesar Road, Punjab — Lat: 32.308592, Long: 72.366785',
    category: 'road',
    description:
      'Construction of street, Village Sanaths, Tehsil Dina, District Jhelum.',
  },
  {
    id: 'nullah-construction-chak-dadu',
    title: 'Nullah Construction — Chak Dadu to Bypass',
    client: 'LG & CD Division Rawalpindi',
    workOrderNo: 'AE/LG&CDD 379',
    year: 2025,
    costMillions: 1.77,
    location: 'Sargodha Rd, Khushab — Lat: 32.309053, Long: 72.366572',
    category: 'drainage',
    description:
      'Construction of nullah from Village Chak Dadu to Bypass, UC Madukalas, Tehsil Dina, District Jhelum.',
  },
  {
    id: 'pcc-pathways-kotla-aima',
    title: 'PCC Pathways — Village Kotla Aima',
    client: 'LG & CD Division Rawalpindi',
    workOrderNo: 'AE/LG&CDD 379',
    year: 2025,
    costMillions: 2.77,
    location: 'Kotla Rd, Kotla, Punjab — Lat: 32.973434, Long: 73.715570',
    category: 'pcc',
    description:
      'Construction of PCC pathways in Village Kotla Aima, UC Kala Gujran, Tehsil and District Jhelum.',
  },
]

export const projectCategories = [
  { value: 'all', label: 'All Projects' },
  { value: 'tuff-paver', label: 'Tuff Paver' },
  { value: 'drainage', label: 'Drainage' },
  { value: 'road', label: 'Road Construction' },
  { value: 'pcc', label: 'PCC Works' },
  { value: 'sewerage', label: 'Sewerage' },
] as const
