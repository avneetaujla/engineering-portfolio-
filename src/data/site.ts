export const siteConfig = {
  name: 'Avneet Aujla',
  fullName: 'Avneet Aujla',
  title: 'Avneet Aujla | Mechanical Engineering Portfolio',
  description:
    'Mechanical engineering portfolio — design, analysis, automation, systems integration, and implementation across professional and academic work.',
  positioning: {
    discipline: 'Mechanical Engineering',
    focus: ['Mechanical Design', 'Systems', 'Automation', 'Analysis'],
    tagline: 'Mechanical engineering from concept and analysis through implementation.',
    support:
      'Fourth-year Mechanical Engineering student at the University of Guelph with 12 months of professional engineering experience at Toyota Motor Manufacturing Canada and Cargill, applying mechanical design, analysis, automation, systems integration, and hands-on implementation to real engineering problems.',
  },
  education: {
    program: 'Mechanical Engineering',
    institution: 'University of Guelph',
    status: 'Fourth-year student',
    term: 'Currently in 3B',
  },
  contact: {
    email: 'aaujla02@uoguelph.ca',
    linkedin: 'https://www.linkedin.com/in/avneetaujla',
    resumePath: '/resume.pdf',
    resumePreviewPath: '/resume-preview.png',
  },
  confidentiality: {
    notice:
      'Industrial work is presented in sanitized form. Proprietary drawings, process data, internal documentation, and confidential details are excluded.',
  },
} as const

export type NavItem = {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'About', href: '/about' },
  { label: 'Resume', href: '/resume' },
]
