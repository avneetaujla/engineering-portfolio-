import { publicUrl } from '@/lib/assets'

export type ExperienceItem = {
  id: string
  company: string
  location: string
  role: string
  duration: string
  durationLabel: string
  summary: string
  focusAreas: string[]
  relatedProjectSlugs: string[]
  requiresSanitization: boolean
  logoSrc?: string
  logoAlt?: string
}

export const experiences: ExperienceItem[] = [
  {
    id: 'tmmc',
    company: 'Toyota Motor Manufacturing Canada',
    location: 'Woodstock, ON',
    role: 'Engineering Analyst — Press Shop',
    duration: '8 months',
    durationLabel: 'Jan–Aug 2026 · 8-month co-op',
    summary:
      'Engineering Analyst Co-op in the Press Shop focused on equipment reliability, machine vision, edge-learning inspection, PLC/HMI integration, and production support across transfer robots and blanking/stamping processes.',
    focusAreas: [
      'Machine Vision',
      'Failure Analysis',
      'PLC / HMI Integration',
      'Press Shop Reliability',
    ],
    relatedProjectSlugs: [
      'scrap-detection-vision-system',
      'nachi-valve-failure-investigation',
      'split-detection-camera',
      'blank-line-stencil-vision-system',
      'rav4-hood-cowl-trim-analysis',
    ],
    requiresSanitization: true,
    logoSrc: publicUrl('/tmmc-logo.webp'),
    logoAlt: 'Toyota Motor Manufacturing Canada logo',
  },
  {
    id: 'cargill',
    company: 'Cargill',
    location: 'Plant operations',
    role: 'Engineering Intern — Plant Projects',
    duration: '4 months',
    durationLabel: 'Summer 2025 · 4-month co-op',
    summary:
      'Engineering intern on base capital projects supporting plant safety and efficiency — mechanical design, AutoCAD layouts, cost estimation, contractor bidding, and capital approval for equipment improvements in a livestock/food processing facility.',
    focusAreas: [
      'Mechanical Design',
      'Base Capital Projects',
      'Material Handling',
      'Plant Safety & Ergonomics',
    ],
    relatedProjectSlugs: [
      'gate-restraining-system',
      'product-transfer-conveyor',
    ],
    requiresSanitization: true,
    logoSrc: publicUrl('/cargill-logo.webp'),
    logoAlt: 'Cargill logo',
  },
]
