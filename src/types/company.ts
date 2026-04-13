export interface CompanyInfo {
  name: string
  shortName: string
  tagline: string
  description: string
  vision: string
  address: string
  city: string
  country: string
  phones: string[]
  whatsapp: string
  ntn: string
  pecLicense: string
  pecCategory: string
  pecValidity: string
  operationalArea: string
}

export interface CoreValue {
  title: string
  description: string
  icon: string
}

export interface MissionItem {
  text: string
}

export interface QHSEItem {
  title: string
  tagline: string
  description: string
  icon: string
}

export interface Certification {
  id: string
  title: string
  number: string
  detail: string
  image: string
  status: 'active' | 'expired'
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export interface Machinery {
  id: string
  name: string
  description: string
  icon: string
}
