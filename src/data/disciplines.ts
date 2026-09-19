export type Discipline = {
  id: string
  label: string
  index: string
  description: string
}

export const disciplines: Discipline[] = [
  {
    id: 'mechanical-design',
    label: 'Mechanical Design',
    index: '01',
    description: 'Component and system design for industrial and academic applications.',
  },
  {
    id: 'automation',
    label: 'Automation',
    index: '02',
    description: 'Controls, logic, and automated equipment support in manufacturing environments.',
  },
  {
    id: 'machine-vision',
    label: 'Machine Vision',
    index: '03',
    description: 'Camera-based inspection and detection systems for production quality.',
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    index: '04',
    description: 'Press shop and plant-floor engineering within production operations.',
  },
  {
    id: 'failure-analysis',
    label: 'Failure Analysis',
    index: '05',
    description: 'Investigation, diagnosis, and countermeasure development for equipment issues.',
  },
  {
    id: 'industrial-systems',
    label: 'Industrial Systems',
    index: '06',
    description: 'Integrated plant and process systems spanning mechanical and digital layers.',
  },
]
