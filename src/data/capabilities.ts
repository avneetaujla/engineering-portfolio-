export type Capability = {
  id: string
  label: string
  index: string
  description: string
  tools: string[]
}

export const homepageCapabilities: Capability[] = [
  {
    id: 'mechanical-design',
    label: 'Mechanical Design',
    index: '01',
    description: 'CAD, mechanism design, GD&T awareness, and design iteration.',
    tools: ['AutoCAD', 'SolidWorks', 'Inventor', 'GD&T'],
  },
  {
    id: 'analysis-validation',
    label: 'Analysis & Validation',
    index: '02',
    description: 'Failure analysis, root-cause investigation, testing, and computation.',
    tools: ['ABAQUS', 'MATLAB', 'Root Cause'],
  },
  {
    id: 'automation-mechatronics',
    label: 'Automation & Mechatronics',
    index: '03',
    description: 'Controls, sensors, machine vision, and embedded motion systems.',
    tools: ['PLC', 'Machine Vision', 'Arduino'],
  },
  {
    id: 'systems-integration',
    label: 'Systems Integration',
    index: '04',
    description: 'Connecting mechanical systems with vision, PLC, and HMI layers.',
    tools: ['PLC / HMI', 'Industrial Networking'],
  },
  {
    id: 'product-development',
    label: 'Product Development',
    index: '05',
    description: 'Concept development, prototyping, packaging constraints, and DFMA.',
    tools: ['SolidWorks', '3D Printing', 'Prototyping'],
  },
  {
    id: 'manufacturing-implementation',
    label: 'Manufacturing & Implementation',
    index: '06',
    description: 'Production support, installation coordination, and equipment improvement.',
    tools: ['Process Support', 'Project Delivery'],
  },
]
