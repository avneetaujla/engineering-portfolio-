export type SkillCategory = {
  id: string
  title: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'engineering-design',
    title: 'Engineering & Design',
    description: 'CAD, analysis, and drafting tools used for mechanical and plant design work.',
    skills: [
      'AutoCAD',
      'SolidWorks',
      'Autodesk Inventor',
      'ABAQUS',
      'GD&T',
      'Revit',
    ],
  },
  {
    id: 'controls-automation',
    title: 'Controls & Automation',
    description: 'Industrial controls platforms and logic programming for automated systems.',
    skills: [
      'TOYOPUC PLC',
      'Allen-Bradley PLC',
      'Ladder Logic',
      'Structured Text (IEC 61131-3)',
      'Arduino',
    ],
  },
  {
    id: 'machine-vision',
    title: 'Machine Vision & Industrial Systems',
    description: 'Vision systems, edge learning, and plant-floor information systems.',
    skills: [
      'Cognex',
      'Machine Vision',
      'Edge-Learning AI',
      'Electronic Data Collection',
      'Andon Systems',
    ],
  },
  {
    id: 'programming-software',
    title: 'Programming & Software',
    description: 'Software tools used for analysis, scripting, and technical documentation.',
    skills: [
      'Python',
      'MATLAB',
      'C',
      'JavaScript',
      'Linux',
      'Microsoft Office',
    ],
  },
]
