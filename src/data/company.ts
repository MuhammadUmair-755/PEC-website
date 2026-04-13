import type { CompanyInfo, CoreValue, MissionItem, QHSEItem, Certification } from '@/types/company'

export const companyInfo: CompanyInfo = {
  name: 'Pyramid Engineering and Construction',
  shortName: 'PEC',
  tagline: 'Where Strength Meets Engineering',
  description:
    'Pyramid Engineering & Construction is a professional road and civil construction company committed to delivering high-quality, durable, and cost-effective infrastructure solutions. With a strong focus on government and private sector projects, we specialize in road construction, rehabilitation, and allied civil works, following national standards and international best practices. Our company combines experienced technical staff, modern machinery, and efficient project management to ensure timely completion and client satisfaction.',
  vision:
    'To become a trusted and leading construction company by delivering sustainable, safe, and innovative road infrastructure that supports economic growth and community development.',
  address: 'Al Rehman Filling Station, Mianwali Road, Talagang',
  city: 'Talagang, Punjab',
  country: 'Pakistan',
  phones: ['+92 334 1559595', '+92 320 5677929'],
  whatsapp: '923341559595',
  ntn: 'G176871',
  pecLicense: 'C2/4755',
  pecCategory: 'C2',
  pecValidity: '30 June 2026',
  operationalArea: 'Punjab & surrounding regions',
}

export const missionItems: MissionItem[] = [
  { text: 'To deliver high-quality road construction projects within time and budget' },
  { text: 'To maintain safety, quality, and environmental responsibility' },
  { text: 'To build long-term relationships with clients through reliability and transparency' },
  { text: 'To continuously improve through modern technology and skilled manpower' },
]

export const coreValues: CoreValue[] = [
  {
    title: 'Quality Excellence',
    description: 'We maintain the highest standards in every project we undertake, ensuring durable and long-lasting infrastructure.',
    icon: 'Award',
  },
  {
    title: 'Integrity & Transparency',
    description: 'We operate with honesty and openness in all our business dealings and client relationships.',
    icon: 'Shield',
  },
  {
    title: 'Safety First',
    description: 'The safety of our workers, communities, and environment is our top priority on every project site.',
    icon: 'HardHat',
  },
  {
    title: 'Timely Delivery',
    description: 'We are committed to completing projects within the agreed timelines without compromising quality.',
    icon: 'Clock',
  },
  {
    title: 'Customer Satisfaction',
    description: 'We go above and beyond to meet and exceed client expectations on every project.',
    icon: 'ThumbsUp',
  },
  {
    title: 'Team Work',
    description: 'Collaboration and coordination among our teams drive exceptional results on the field.',
    icon: 'Users',
  },
  {
    title: 'Passion',
    description: 'We love what we do — our passion for construction and engineering drives everything we build.',
    icon: 'Heart',
  },
]

export const qhseItems: QHSEItem[] = [
  {
    title: 'Quality',
    tagline: 'Building It Once and Building It Right',
    description:
      '"Building it once and Building It Right" is a philosophy adopted by all employees at PEC. Our quality management program, lead under the QHSE Manager, has been developed and perfected to ensure a commitment to quality. Our commitment to quality and the results of our quality management program are apparent to all employees, clients, design partners and trade contractors.',
    icon: 'CheckCircle',
  },
  {
    title: 'Health & Safety',
    tagline: 'Our People, Our Priority',
    description:
      'The health and safety of our workforce is paramount. We implement comprehensive safety protocols, provide personal protective equipment, and conduct regular safety training to ensure every worker returns home safely at the end of each day.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Environment',
    tagline: 'Our Land, Our Responsibility',
    description:
      'Committed to a strong set of environmental principles, it is our policy to minimize the impact that may be associated with any of our activities. We invest in new technologies that rely less on non-renewable resources. Our Research & Development wing is constantly working on how to minimize environmental impact either by technological advancements or by improving our waste management systems.',
    icon: 'Leaf',
  },
]

export const certifications: Certification[] = [
  {
    id: 'pec-license',
    title: 'PEC Constructor License',
    number: 'C2/4755',
    detail: 'Pakistan Engineering Council — Category C2 — Valid till 30 June 2026',
    image: '/assets/licenses/License.png',
    status: 'active',
  },
  {
    id: 'ntn-fbr',
    title: 'NTN Registration',
    number: 'G176871',
    detail: 'Federal Board of Revenue — Active Taxpayer Status',
    image: '/assets/licenses/FBR.png',
    status: 'active',
  },
  {
    id: 'pra-registration',
    title: 'PRA Registration',
    number: 'G176871-3',
    detail: 'Punjab Revenue Authority — Service Provider — Rawalpindi Commissionerate',
    image: '/assets/licenses/PRA.png',
    status: 'active',
  },
]
