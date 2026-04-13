export type ProjectCategory = 'tuff-paver' | 'drainage' | 'road' | 'pcc' | 'sewerage'

export interface Project {
  id: string
  title: string
  client: string
  workOrderNo: string
  year: number
  costMillions: number
  location: string
  category: ProjectCategory
  image: string
  images: string[]
  description: string
}
