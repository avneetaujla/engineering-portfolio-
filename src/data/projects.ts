import { publicUrl } from '@/lib/assets'

export type ProjectCategory =
  | 'Industry — Toyota Motor Manufacturing Canada'
  | 'Industry — Cargill'
  | 'University — Design'

export type ProjectMediaKind =
  | 'photograph'
  | 'diagram'
  | 'cad'
  | 'chart'
  | 'video'
  | 'illustration'

export type ProjectMedia = {
  id: string
  kind: ProjectMediaKind
  title: string
  description: string
  technicalLabel?: string
  /** Set when an approved asset is available. Leave null for placeholder. */
  src: string | null
  alt: string
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2' | '3/4' | '9/16'
  /** CSS object-position when the image is cropped (e.g. 'top', 'center top'). */
  objectPosition?: string
  /** When true, asset is withheld for confidentiality. */
  confidential: boolean
}

export type ProjectMetric = {
  label: string
  value: string
  note?: string
  /** Metrics must be approved; placeholder until provided. */
  isPlaceholder: boolean
}

export type ProjectFlowStep = {
  label: string
  detail?: string
  phase?: string
}

export type Project = {
  id: string
  number: string
  slug: string
  title: string
  /** Optional secondary title for course/challenge naming. */
  subtitle?: string
  category: ProjectCategory
  companyOrCourse: string
  date: string
  featured: boolean
  /** Optional transferable discipline labels for cards/metadata. */
  disciplineLabel?: string
  summary: string
  problem: string
  engineeringChallenge: string
  approach: string
  contribution: string
  engineeringMethods: string[]
  tools: string[]
  solution: string
  results: string
  lessons: string
  metrics: ProjectMetric[]
  /** Label for the summary metric column (Impact, Project Scale, etc.). */
  summaryMetricLabel?: string
  /** Optional verified signal shown on project index cards. */
  cardMetric?: {
    value: string
    label: string
  }
  media: ProjectMedia[]
  /**
   * Optional sanitized process / investigation flow for industrial case studies.
   */
  sanitizedFlow?: Array<string | ProjectFlowStep>
  flowTitle?: string
  /**
   * Optional downloadable resources (reports, drawings, manuals).
   */
  resources?: Array<{
    label: string
    href: string
  }>
  /**
   * When true, case study pages emphasize sanitized / generalized content
   * and hide any media marked confidential.
   */
  requiresSanitization: boolean
  tags: string[]
}

function mediaPlaceholder(
  projectId: string,
  title: string,
  technicalLabel: string,
): ProjectMedia {
  return {
    id: `${projectId}-hero`,
    kind: 'photograph',
    title,
    description: 'Approved visual asset placeholder.',
    technicalLabel,
    src: null,
    alt: `${title} — image asset placeholder`,
    aspectRatio: '16/9',
    confidential: false,
  }
}

export const projects: Project[] = [
  {
    id: 'tmmc-scrap-detection',
    number: '01',
    slug: 'scrap-detection-vision-system',
    disciplineLabel: 'Machine Vision · Automation · Machine Learning',
    title: 'Scrap Detection Vision System',
    category: 'Industry — Toyota Motor Manufacturing Canada',
    companyOrCourse: 'TMMC Woodstock — Press Shop',
    date: 'Jan–Aug 2026',
    featured: true,
    summary:
      'Machine-vision system developed to classify scrap-flow conditions as acceptable or abnormal using machine learning trained on approximately 500 production images.',
    problem:
      'Scrap is a natural byproduct of stamping and must clear through the intended scrap-flow path. When scrap fails to clear and accumulates in the die, it can interfere with the stamping process and contribute to die or part damage.',
    engineeringChallenge:
      'Detect abnormal scrap accumulation early enough to intervene. A fixed visual rule was insufficient because scrap-flow scenes were not visually identical from cycle to cycle.',
    approach:
      'Used a VIKS camera and Raspberry Pi vision platform to monitor the scrap-flow area and developed a machine-learning classification model on roughly 500 production images covering good and bad conditions, with intentional process variation so the model learned the accumulation condition rather than memorizing a single scene.',
    contribution:
      'Developed the scrap build-up vision application during the first half of the Press Shop co-op, including image collection strategy, machine-learning model development, and testing under changing operating conditions.',
    engineeringMethods: [
      'Machine Vision',
      'Machine Learning',
      'Image-Data Development',
      'Testing / Iteration',
      'System Integration',
    ],
    tools: ['VIKS Camera', 'Raspberry Pi', 'Machine Learning'],
    solution:
      'A vision system monitors the scrap-flow region and classifies the observed condition as acceptable or abnormal, providing an automated means to identify scrap build-up before it becomes severe.',
    results:
      'The application established an automated classification path for scrap-flow conditions. Work emphasized that model quality depends on training-image diversity and consistent physical imaging conditions as much as model tuning.',
    lessons:
      'One of the biggest lessons from this project was that the machine-learning model was only as useful as the image data feeding it. Building reliable classification meant paying as much attention to the physical imaging conditions and training coverage as to the model itself.',
    metrics: [
      {
        label: 'Training images',
        value: '~500',
        note: 'Good and bad scrap-flow conditions with intentional process variation.',
        isPlaceholder: false,
      },
    ],
    summaryMetricLabel: 'Dataset scale',
    cardMetric: {
      value: '~500',
      label: 'Training images',
    },
    media: [
      mediaPlaceholder(
        'tmmc-scrap-detection',
        'Scrap Detection Vision System',
        'TMMC / MACHINE VISION · MACHINE LEARNING',
      ),
    ],
    flowTitle: 'Vision system architecture',
    sanitizedFlow: [
      { label: 'Scrap-flow condition', phase: 'Live', detail: 'Process monitoring' },
      { label: 'VIKS Camera', phase: 'Live', detail: 'Image acquisition' },
      { label: 'Raspberry Pi vision system', phase: 'Live', detail: 'Vision compute platform' },
      { label: 'Acceptable / abnormal classification', phase: 'Live' },
      { label: 'System response', phase: 'Live', detail: 'Identify condition for intervention' },
      { label: '~500 image dataset', phase: 'Development', detail: 'Machine-learning training / refinement' },
    ],
    requiresSanitization: true,
    tags: ['Machine Vision', 'Automation', 'Machine Learning'],
  },
  {
    id: 'tmmc-nachi-valve',
    number: '02',
    slug: 'nachi-valve-failure-investigation',
    disciplineLabel: 'Failure Analysis · Reliability',
    title: 'Nachi Valve Failure Investigation & Countermeasures',
    category: 'Industry — Toyota Motor Manufacturing Canada',
    companyOrCourse: 'TMMC Woodstock — Press Shop',
    date: 'Jan–Aug 2026',
    featured: true,
    summary:
      'Root-cause investigation and countermeasures for recurring pneumatic valve failures on Nachi part-transfer robots — equipment reliability work spanning sequence analysis, contamination and lubrication findings, and targeted circuit protection.',
    problem:
      'Repeated pneumatic valve failures on Nachi part-transfer robots prevented reliable vacuum hold and blow-off release of stamped panels during die-to-die transfer. Failures caused unplanned downtime; on one robot alone, valve issues accumulated approximately 1.5 hours of downtime per month. Ten robots in the shop used the same valve arrangement, so systemic risk was significant.',
    engineeringChallenge:
      'Move beyond replace-on-fail thinking. Potential causes spanned component reliability, air condition, contamination, pressure/flow, installation, cycle times, electrical actuation, environment, and maintenance practices. The valve had to be understood as part of the full transfer sequence rather than an isolated failed part.',
    approach:
      'Mapped the transfer sequence (approach → vacuum → secure → transfer → blow-off → release) and treated repeated failures as evidence of an underlying process condition. Investigation identified debris and lubrication issues affecting the valve: factory lubrication was being washed out, and fibre material from existing upstream filtration was reaching the valve. Particular attention was given to the pilot circuit because the pilot spool controls actuations and functions of the three-position SMC VEX valve and is highly sensitive to debris.',
    contribution:
      'Led early-term reliability investigation on the Nachi transfer-robot valve failures, defining the problem systemically and supporting countermeasure development for contamination and lubrication control on the pneumatic circuit.',
    engineeringMethods: [
      'Failure Analysis',
      'Root-Cause Investigation',
      'System Analysis',
      'Countermeasure Development',
    ],
    tools: ['Pneumatic Systems', 'System Analysis'],
    solution:
      'Countermeasures focused on protecting the valve from debris and restoring proper lubrication: a filter was added on the pilot line feeding the pilot spool; upstream filtration ahead of the valve was changed out; and a lubricator was added downstream of the valve after it was observed that factory lubrication was being washed out while fibre from the prior upstream filter was entering the valve. The pilot-line filter specifically protects the sensitive pilot spool that governs valve actuations and functions.',
    results:
      'The investigation reframed recurring valve failures as a systems and contamination problem rather than a consumable replacement cycle. Countermeasures targeted pilot-circuit cleanliness, upstream filtration quality, and downstream lubrication to reduce conditions that drove repeated failures and associated downtime.',
    lessons:
      'The key lesson from this investigation was that repeatedly replacing a failed component does not solve a recurring failure. Understanding the valve’s role in the full transfer sequence and testing multiple failure mechanisms made it possible to address the conditions driving the problem instead of only treating the symptom.',
    metrics: [
      {
        label: 'Downtime (single robot)',
        value: '~1.5 hr / month',
        note: 'Accumulated downtime attributed to valve failures on one transfer robot — not plant-wide.',
        isPlaceholder: false,
      },
      {
        label: 'Robots with same / similar arrangement',
        value: '10',
        note: 'Additional robots using the same valve arrangement — broader reliability relevance, not identical failure rates claimed.',
        isPlaceholder: false,
      },
    ],
    summaryMetricLabel: 'Impact / scale',
    cardMetric: {
      value: '~1.5 hr / month',
      label: 'Downtime',
    },
    media: [
      mediaPlaceholder(
        'tmmc-nachi-valve',
        'Nachi Valve Failure Investigation',
        'TMMC / FAILURE ANALYSIS · RELIABILITY',
      ),
    ],
    flowTitle: 'Root-cause investigation',
    sanitizedFlow: [
      { label: 'Recurring valve failure', phase: 'Symptom' },
      { label: 'Sequence / failure review', phase: 'Investigate', detail: 'Transfer vacuum and blow-off cycle' },
      {
        label: 'Potential causes reviewed',
        phase: 'Investigate',
        detail: 'Debris, lubrication washout, filtration fibre, pilot-spool sensitivity',
      },
      { label: 'Contamination / lubrication findings', phase: 'Root cause' },
      { label: 'Countermeasures', phase: 'Response', detail: 'Pilot-line filter, upstream filtration, lubricator' },
      { label: 'Verification focus', phase: 'Verify', detail: 'Cleanliness and lubrication conditions' },
    ],
    requiresSanitization: true,
    tags: ['Failure Analysis', 'Reliability', 'Root-Cause Investigation'],
  },
  {
    id: 'tmmc-split-detection',
    number: '03',
    slug: 'split-detection-camera',
    disciplineLabel: 'Systems Integration · Machine Vision · Controls',
    title: 'Automated Split Detection System',
    subtitle: 'In-Press Cognex Vision System',
    category: 'Industry — Toyota Motor Manufacturing Canada',
    companyOrCourse: 'TMMC Woodstock — Press Shop',
    date: 'Jan–Aug 2026',
    featured: false,
    summary:
      'Led development of an in-press Cognex vision system on Draw Press 1 to detect split / tear-off panel conditions through mechanical, vision, PLC, HMI, and network integration.',
    problem:
      'Two major sheet-metal tear-off / split events left damaged panels in the die. Stacked material caused die damage requiring 35+ hours of repair and 3 missed production runs, and created downstream weld-shop shortage risk. The Press Shop needed automated detection of a split condition at Draw Press 1 before the next stamping cycle continued.',
    engineeringChallenge:
      'Install and stabilize a Cognex IS8912 camera on the press ram — a high-vibration, high-force, low-light environment with restricted access, moving cables, contamination risk, and limited acquisition time. The large-die press environment left little room for installation error. Image capture had to synchronize with the press sequence; a laboratory-capable camera could still fail in production without mechanical, lighting, trigger, controls, and network integration.',
    approach:
      'Followed an iterative path: concept development and feasibility trial; Cognex Edge Learning model training on defective and acceptable panel images; production installation on the press ram; camera positioning and mounting; dedicated lighting; cable management for moving equipment; industrial network / remote IP access; angle-based image triggering; press and robot PLC signal integration; HMI lighting control; validation on 25+ test panels; and PLC cycle-stop integration for automatic line protection. Worked closely with maintenance to move from trial to installation.',
    contribution:
      'Acted as project lead for the automated split detection vision system during the second half of the co-op, owning concept feasibility through production installation across mechanical, vision, networking, PLC, and HMI scopes.',
    engineeringMethods: [
      'Systems Integration',
      'Feasibility Trialing',
      'Press-Ram Mechanical Installation',
      'Cognex Edge Learning',
      'PLC / HMI Integration',
      'Validation Testing',
    ],
    tools: [
      'Cognex IS8912',
      'Cognex Edge Learning',
      'PLC Logic',
      'HMI',
      'Industrial Networking',
    ],
    solution:
      'An in-line Cognex IS8912 vision system mounted on the press ram captures the panel at a defined cycle point via angle-based triggering, classifies split/no-split with Cognex Edge Learning, and returns the result for production response. Dedicated lighting, rigid mounting, cable routing for motion, remote network access, and HMI lighting controls support repeatable operation. PLC cycle-stop integration was being implemented to automatically prevent the next cycle following a detected split.',
    results:
      'Initial trial confirmed usable images and that the split condition was classifiable. The system progressed through permanent production installation with mechanical, lighting, networking, trigger, PLC, and HMI integration. During validation testing across 25+ test panels, the system achieved 100% split detection with 0 false positives in the validation set. PLC cycle-stop integration for automatic line protection remained in progress.',
    lessons:
      'The biggest challenge was not simply getting the camera to recognize a split; it was making the entire inspection system work within the press sequence. Camera mounting, lighting, trigger timing, PLC signals, HMI controls, networking, and vision all had to work together for the detection system to be useful in production.',
    metrics: [
      {
        label: 'Die repair',
        value: '35+ hr',
        note: 'Repair work following tear-off / split events that left material in the die.',
        isPlaceholder: false,
      },
      {
        label: 'Missed production runs',
        value: '3',
        note: 'Production runs missed after the tear-off events.',
        isPlaceholder: false,
      },
      {
        label: 'Validation test panels',
        value: '25+',
        note: 'Test-panel validation set — not unlimited production performance.',
        isPlaceholder: false,
      },
      {
        label: 'Split detection (validation)',
        value: '100%',
        note: 'All tested split conditions detected during validation.',
        isPlaceholder: false,
      },
      {
        label: 'False positives (validation)',
        value: '0',
        note: 'No false positives during the validation set.',
        isPlaceholder: false,
      },
    ],
    summaryMetricLabel: 'Impact / validation',
    cardMetric: {
      value: '35+ hr',
      label: 'Die repair',
    },
    media: [
      mediaPlaceholder(
        'tmmc-split-detection',
        'Automated Split Detection System',
        'TMMC / SYSTEMS INTEGRATION · MACHINE VISION',
      ),
    ],
    flowTitle: 'System architecture',
    sanitizedFlow: [
      { label: 'Panel / draw operation', phase: 'Process' },
      { label: 'Press angle / sequence', phase: 'Sequence' },
      { label: 'PLC trigger logic', phase: 'Controls' },
      { label: 'Cognex IS8912', phase: 'Vision', detail: 'Press-ram mounted' },
      { label: 'Edge-learning inspection', phase: 'Inspect', detail: 'Split / no-split' },
      { label: 'Pass / split detected', phase: 'Decision' },
      { label: 'Detection output', phase: 'Output', detail: 'Cycle-stop integration in progress at term end' },
    ],
    requiresSanitization: true,
    tags: ['Systems Integration', 'Machine Vision', 'Controls'],
  },
  {
    id: 'tmmc-blank-stencil',
    number: '04',
    slug: 'blank-line-stencil-vision-system',
    disciplineLabel: 'Controls · Machine Vision · Automation',
    title: 'Blank-Line Stencil Vision System',
    category: 'Industry — Toyota Motor Manufacturing Canada',
    companyOrCourse: 'TMMC Woodstock — Press Shop',
    date: 'Jan–Aug 2026',
    featured: false,
    summary:
      'Improved blank-line stencil inspection reliability by replacing a single shared vision program with manufacturer-specific programs and using the part number in PLC logic to select the correct program automatically.',
    problem:
      'Certain incoming aluminum coils contain stencil markings that must be identified and scrapped rather than continuing into production. An automated camera system already existed, but a shared vision setup could miss certain stencil conditions. Missed stencils forced line stops and manual removal — about five minutes of downtime per occurrence.',
    engineeringChallenge:
      'Different parts could require different stencil-inspection criteria because of manufacturer-specific stencil characteristics. The control system needed to use the available part number to select and activate the corresponding manufacturer-specific vision program before inspection, while keeping the normal pass / scrap sequence intact.',
    approach:
      'Analyzed manufacturer variation as a primary inspection variable and replaced the single broad program with separate manufacturer-specific vision programs. Updated PLC logic so the incoming part number determines which program loads automatically before stencil inspection, avoiding manual selection error.',
    contribution:
      'Owned the stencil-detection reliability improvement: problem analysis, part-number-driven vision-program selection logic, and PLC integration for automatic program switching on the aluminum blanking process.',
    engineeringMethods: [
      'Controls Logic',
      'Vision Program Architecture',
      'Manufacturer-Specific Inspection',
      'PLC Integration',
      'Automation Reliability',
    ],
    tools: ['PLC Logic', 'Machine Vision', 'Industrial Cameras'],
    solution:
      'Available part-number information is used by PLC logic to select the corresponding manufacturer-specific vision program; the camera then inspects using parameters tuned for that stencil family. The architecture reduces over-broad classification and removes reliance on operators to choose the correct program.',
    results:
      'Separated inspection problems into narrower, manufacturer-tuned programs and automated program selection through the PLC using the part number. The change made the improvement more reliable than algorithm tuning alone would have been under a single shared program.',
    lessons:
      'The key improvement was using the part number already available to the control system to automatically select the correct stencil-inspection program. Connecting part information directly to PLC-based vision-program selection reduced dependence on a shared inspection setup and made the stencil check more robust.',
    metrics: [
      {
        label: 'Missed-stencil downtime',
        value: '~5 min / event',
        note: 'Approximate line downtime when a stencil was missed and required manual removal.',
        isPlaceholder: false,
      },
    ],
    summaryMetricLabel: 'Process impact',
    cardMetric: {
      value: '~5 min / event',
      label: 'Missed-stencil downtime',
    },
    media: [
      mediaPlaceholder(
        'tmmc-blank-stencil',
        'Blank-Line Stencil Vision System',
        'TMMC / CONTROLS · MACHINE VISION',
      ),
    ],
    flowTitle: 'Control logic flow',
    sanitizedFlow: [
      { label: 'Part number available', phase: 'Input' },
      { label: 'PLC program-selection logic', phase: 'Control' },
      { label: 'Manufacturer-specific vision program selected', phase: 'Decision' },
      { label: 'Stencil inspection', phase: 'Inspect' },
      { label: 'Pass / scrap decision', phase: 'Output' },
    ],
    requiresSanitization: true,
    tags: ['Controls', 'Machine Vision', 'Automation'],
  },
  {
    id: 'tmmc-rav4-hood-cowl',
    number: '05',
    slug: 'rav4-hood-cowl-trim-analysis',
    disciplineLabel: 'Analysis · Quality Methods',
    title: 'RAV4 Hood Cowl Trim Analysis',
    category: 'Industry — Toyota Motor Manufacturing Canada',
    companyOrCourse: 'Toyota Motor Manufacturing Canada — Woodstock Press Shop',
    date: 'Jan–Aug 2026',
    featured: false,
    summary:
      'Quality method for identifying early indicators of split risk on the RAV4 hood cowl stretch flange by inspecting the trimmed edge under magnification, adapted from a Japan-plant approach for Woodstock use.',
    problem:
      'Splits in the stretch flange area of the new RAV4 hood cowl could be difficult for team members to detect during normal processing. A condition that was not clearly visible earlier could become more serious during downstream hemming and potentially result in split outflow.',
    engineeringChallenge:
      'Identify evidence of an unstable flange condition before a final split occurs — using a practical, repeatable inspection method rather than waiting for a completed split that conventional visual checks might miss.',
    approach:
      'Studied a magnification-based trimmed-edge inspection method used at a Toyota facility in Japan. The trimmed edge includes burnished and fractured regions from the cutting process; the condition and transition between those regions provide trim-quality information. Adapted the method for the Woodstock process, then trained QC on inspection area, image interpretation, acceptance characteristics, risk indicators, and when to escalate or consider die adjustment. Established a structured approach for inspecting the last-off panel during a run.',
    contribution:
      'Adapted the Japan-plant trim-edge inspection concept for Woodstock application and worked with Quality Control to define a repeatable last-off panel inspection method, acceptance criteria, and escalation guidance.',
    engineeringMethods: [
      'Trim Edge Magnification Inspection',
      'Quality Method Adaptation',
      'QC Training & Standardization',
      'Process Risk Identification',
    ],
    tools: ['Microscope', 'Quality Control Procedures', 'Technical Training'],
    solution:
      'A human inspection method using magnification of the trimmed flange edge. A smooth, relatively linear transition between burnished and fractured regions is treated as desirable. Warning characteristics include cavities, irregular or wavy fracture transition, and inconsistent edge appearance — conditions that can indicate increased split risk before a full split is visible.',
    results:
      'Delivered a practical QC procedure for last-off panel inspection with clear acceptance and risk criteria. The approach provided earlier signal of unstable trim conditions without requiring a new automated device for this specific check.',
    lessons:
      'Automation is not automatically the best solution. In some cases a well-designed human inspection method — with repeatable procedure, clear criteria, and training — can be more practical and effective than installing another automated system.',
    metrics: [],
    media: [
      {
        id: 'tmmc-rav4-hood-cowl-hero',
        kind: 'photograph',
        title: 'RAV4 Hood Cowl Area',
        description: 'Annotated view of the RAV4 hood highlighting the cowl / stretch-flange inspection region.',
        technicalLabel: 'TOYOTA MOTOR MANUFACTURING CANADA / HOOD COWL',
        src: publicUrl('/projects/rav4-hood-cowl-hero.jpg'),
        alt: 'Red Toyota RAV4 hood with annotated dashed lines marking the cowl flange inspection area near the windshield',
        aspectRatio: '16/9',
        objectPosition: 'center top',
        confidential: false,
      },
      {
        id: 'tmmc-rav4-hood-cowl-bad-trim',
        kind: 'photograph',
        title: 'Bad Trim Example',
        description: 'Magnified trimmed-edge condition showing irregular transition characteristics associated with elevated split risk.',
        technicalLabel: 'TOYOTA MOTOR MANUFACTURING CANADA / BAD TRIM',
        src: publicUrl('/projects/rav4-hood-cowl-bad-trim.jpg'),
        alt: 'Handheld microscope display at 600X showing a bad trim edge condition on the RAV4 hood cowl flange',
        aspectRatio: '3/2',
        confidential: false,
      },
      {
        id: 'tmmc-rav4-hood-cowl-good-trim',
        kind: 'photograph',
        title: 'Good Trim Example',
        description: 'Magnified trimmed-edge condition showing a more consistent burnished-to-fracture transition associated with acceptable trim quality.',
        technicalLabel: 'TOYOTA MOTOR MANUFACTURING CANADA / GOOD TRIM',
        src: publicUrl('/projects/rav4-hood-cowl-good-trim.jpg'),
        alt: 'Handheld microscope display at 600X showing a good trim edge condition on the RAV4 hood cowl flange',
        aspectRatio: '3/2',
        confidential: false,
      },
    ],
    sanitizedFlow: [
      { label: 'Japan-plant method study', phase: 'Learn' },
      { label: 'Woodstock process adaptation', phase: 'Adapt' },
      { label: 'Magnified trim-edge inspection', phase: 'Inspect' },
      { label: 'Acceptance & risk criteria', phase: 'Standardize' },
      { label: 'QC training & escalation', phase: 'Deploy' },
    ],
    flowTitle: 'Inspection method adaptation',
    requiresSanitization: true,
    tags: ['Analysis', 'Quality', 'Process Engineering'],
  },
  {
    id: 'cargill-gate-restraining',
    number: '06',
    slug: 'gate-restraining-system',
    disciplineLabel: 'Mechanical Design · Project Engineering',
    title: 'Gate Restraining System',
    category: 'Industry — Cargill',
    companyOrCourse: 'Cargill — Plant Project Engineering',
    date: 'Summer 2025',
    featured: false,
    summary:
      'Iterative mechanical design of a barn gate restraining system — adding a practical rollout gate-extension / holding arrangement so small barn gates stay open more safely and easily during cattle loading and unloading, delivered as a base capital plant improvement.',
    problem:
      'Small barn gates used in livestock operations needed a more reliable way to hold them open so employees could work more safely during cattle loading and unloading. The existing arrangement increased injury risk and was awkward for operators.',
    engineeringChallenge:
      'Deliver a durable, usable restraining mechanism within base-capital budget limits and existing plant constraints. An initial concept held the gates securely with a deployable extension, but supplier quoting showed the design was too costly to justify.',
    approach:
      'Started from the existing gate condition with a basic AutoCAD concept, then iterated after cost and practicality feedback by reducing part count and simplifying the mechanism. Balanced trade-offs among cost, durability, and usability while considering forces cattle apply on the gate and ergonomic requirements. Incorporated operator and supervisor feedback so the revised sliding-extension concept addressed practical use, not only theoretical minimum cost.',
    contribution:
      'Owned mechanical concept development and iterative redesign for the barn gate restraining system, producing equipment layouts and part designs used for internal approval and contractor bidding references.',
    engineeringMethods: [
      'Iterative Mechanical Design',
      'Cost–Durability–Usability Trade-offs',
      'Ergonomic & Force Considerations',
      'Operator Feedback Integration',
    ],
    tools: ['AutoCAD', 'Technical Documentation', 'Cost Quoting'],
    solution:
      'A simplified, lower-part-count sliding gate-extension design that holds gates open securely, lets operators slide the extension into position when needed, and meets durability and usability standards at a cost appropriate for a base capital project.',
    results:
      'Final iteration was both cost-effective and practical for employees. The project improved operator safety for cattle loading/unloading workflows and demonstrated how plant feedback and budget constraints reshape a workable mechanical solution.',
    lessons:
      'A theoretically cheaper design is not successful if operators cannot use it safely. Site feedback and quote reality often force redesigns that pure calculation alone would miss.',
    metrics: [],
    media: [
      {
        id: 'cargill-gate-restraining-before-after',
        kind: 'diagram',
        title: 'Gate Restraining System — Before / After',
        description:
          'Conceptual before/after illustration based on site condition and design-development photographs.',
        technicalLabel: 'CARGILL / MECHANICAL DESIGN',
        src: publicUrl('/projects/cargill-gate-restraining/before-after.png'),
        alt: 'Conceptual before and after engineering illustration of the gate restraining system',
        aspectRatio: '16/9',
        confidential: false,
      },
    ],
    requiresSanitization: true,
    tags: ['Mechanical Design', 'CAD', 'Project Engineering'],
  },
  {
    id: 'cargill-product-transfer',
    number: '07',
    slug: 'product-transfer-conveyor',
    disciplineLabel: 'Mechanical Design · Systems Implementation',
    title: 'Product Transfer Conveyor',
    category: 'Industry — Cargill',
    companyOrCourse: 'Cargill — Plant Project Engineering',
    date: 'Summer 2025',
    featured: false,
    summary:
      'Led design and project delivery of a new production-floor conveyor addition to improve product flow and material handling — from concept and design reviews through costing, bidding, corporate approval, and installation coordination.',
    problem:
      'Plant material handling needed improved product flow on the production floor. Product backups and diversion onto a conveyor path affected both efficiency and employee safety, creating a clear need for a new conveyor system addition.',
    engineeringChallenge:
      'Design a conveyor that handles expected loads safely in constrained plant space while meeting corporate safety codes for guarding, remaining maintainable, and staying within budget and schedule for a base capital project.',
    approach:
      'Developed concepts in AutoCAD with attention to mechanical components, motor capacity, material flow, and layout constraints. Evaluated alternatives for cost, efficiency, and safety. Incorporated maintenance and supervisor feedback on access and ergonomics into frame layout. Managed contractor site/virtual reviews for quoting, assisted with a bid event, reviewed proposals for technical and financial fit, and supported corporate approval and installation coordination.',
    contribution:
      'Led the conveyor project largely independently from concept through completion — including design, bid-package preparation, contractor selection support, capital approval, and installation coordination — with supervisor guidance as needed. Selected to present the project to senior leadership at Cargill Protein North America Headquarters in Wichita, Kansas.',
    engineeringMethods: [
      'Concept Development & Design Synthesis',
      'Safety Guarding Integration',
      'Alternative Evaluation',
      'Bid Package & Contractor Coordination',
      'Capital Project Delivery',
    ],
    tools: ['AutoCAD', 'Cost Estimation', 'Bid Documentation', 'Project Scheduling'],
    solution:
      'A new conveyor system addition designed for expected plant loads, equipped with safety guarding aligned to corporate requirements, and adjusted for maintenance access and ergonomics based on operations feedback. Project controls included schedules, contractor reviews, and structured proposal evaluation for approval.',
    results:
      'Moved the conveyor from concept through corporate approval and installation coordination. Presented the completed project at Cargill Protein North America Headquarters in Wichita, Kansas. The system was intended to reduce product backups, improve material flow, divert product onto the conveyor path, and support safer, more efficient floor operations with less bottleneck-related wasted energy.',
    lessons:
      'Load capacity alone does not define a good plant design — maintenance access, ergonomics, safety review, and contractor/budget realities determine whether a design can be approved and operated. Communication must be tailored: managers focus on cost and timeline; supervisors on safety and usability; contractors on clear drawings and specs.',
    metrics: [],
    media: [
      {
        id: 'cargill-product-transfer-hero',
        kind: 'photograph',
        title: 'Product Transfer Conveyor',
        description:
          'Internship showcase poster for the Product Transfer Conveyor project at Cargill, with proprietary content redacted.',
        technicalLabel: 'CARGILL / CONVEYOR',
        src: publicUrl('/projects/product-transfer-conveyor-hero.jpg'),
        alt: 'Avneet Aujla presenting a Cargill Product Transfer Conveyor internship poster with project content redacted',
        aspectRatio: '3/2',
        objectPosition: 'center 35%',
        confidential: false,
      },
      {
        id: 'cargill-product-transfer-wichita',
        kind: 'photograph',
        title: 'Wichita HQ Presentation',
        description:
          'Poster station at Cargill Protein North America Headquarters in Wichita, Kansas, where the Product Transfer Conveyor project was presented to senior leadership. Proprietary poster content redacted.',
        technicalLabel: 'CARGILL / WICHITA HQ',
        src: publicUrl('/projects/product-transfer-conveyor-wichita-presentation.jpg'),
        alt: 'Product Transfer Conveyor presentation poster and name card at Cargill Protein North America Headquarters in Wichita, Kansas',
        aspectRatio: '3/4',
        objectPosition: 'center 30%',
        confidential: false,
      },
    ],
    flowTitle: 'Capital project delivery',
    sanitizedFlow: [
      { label: 'Existing product flow', phase: 'Need' },
      { label: 'Transfer requirement', phase: 'Define' },
      { label: 'Conveyor design', phase: 'Design', detail: 'Layout, guarding, access' },
      { label: 'Installation / integration', phase: 'Deliver' },
      { label: 'Commissioning / operation', phase: 'Operate' },
    ],
    requiresSanitization: true,
    tags: ['Mechanical Design', 'Project Engineering', 'Implementation'],
  },
  {
    id: 'uog-automated-wheelchair',
    number: '08',
    slug: 'automated-wheelchair',
    disciplineLabel: 'Mechanical Design · Mechatronics',
    title: 'Automated Wheelchair Competition Robot',
    subtitle: 'Teddy Bear Wheelchair Challenge (TBWC)',
    category: 'University — Design',
    companyOrCourse: 'University of Guelph — ENG*1100',
    date: 'Fall 2023',
    featured: true,
    summary:
      'Netherlands-themed Teddy Bear Wheelchair (TBWC) for ENG*1100: a single-motor competition robot that navigates a course and launches a ball using chassis motion, developed by Section 2 Team 01.',
    problem:
      'Design and build a Teddy Bear Wheelchair capable of completing ENG*1100 performance tasks — including ramp dribble navigation and free-kick ball launching — while meeting mass, safety, aesthetics, and reliability expectations for a five-person team competition.',
    engineeringChallenge:
      'Deliver mobility and launching with a deliberately minimal drivetrain. The team constrained the design to a single motor so the launching mechanism depended on chassis motion rather than a second actuator, then had to keep mass under 1200 g, remain tip-stable with the teddy bear secured, and score consistently on timed course and shooting tasks.',
    approach:
      'Over a seven-week development cycle, Section 2 Team 01 (Netherlands) iterated the chassis, launcher placement, and wheel layout — moving from a four-wheel to a three-wheel foundation to reduce drag and mass. The launcher used a mousetrap triggered by string tension wound from a rear-axle pulley as the chassis moved. Arduino timing controlled forward/reverse course segments. Subsystems were revised repeatedly for performance, weight, and cost; aesthetics used Dutch flag colors and flower motifs on a chassis shell.',
    contribution:
      'Primary responsibility: mechanical design of the automated wheelchair within a five-person Netherlands TBWC team (Section 2, Team 01) — chassis architecture, launching integration with vehicle motion, and mechanical packaging for competition tasks.',
    engineeringMethods: [
      'Mechanical Design',
      'Single-Motor System Integration',
      'Centre-of-Mass & Tipping Analysis',
      'Arduino Motion Timing',
      'Iterative Prototyping',
      'Competition Performance Testing',
    ],
    tools: ['Mechanical Design', 'Arduino', 'Prototyping'],
    solution:
      'Final TBWC used a three-wheel rolling chassis (narrow front axle, wide rear axle), a slightly elevated and angled mousetrap launcher driven by string wound from chassis motion, and a Netherlands-themed shell that enclosed and secured the teddy bear. Electronics were organized on the chassis with Arduino-controlled motor timing for ramp traversal and free-kick positioning. The launcher was offset to the left to clear the teddy bear and improve shot path.',
    results:
      'On contest day the TBWC completed ramp dribble runs in 8.43 s and 8.58 s (consistently under 9 s), measured 1138 g (under the 1200 g target), passed tipping/safety checks with the teddy bear secured, and scored 20 free-kick points (attempts: 10, 3, 4). The first free-kick attempt cleared the wall into the net; the second failed when the launcher string came undone; the third cleared the wall but missed the net after a quick recalibration. Estimated production cost for a single TBWC unit was $173.85 per the team cost analysis.',
    lessons:
      'String calibration for the mousetrap launcher was the main operational weak point and needs a more durable, less adjustment-heavy solution (the report suggests fishing line). An extra tensioning pulley was abandoned because it added axle drag and hurt speed. Loose tires created drag until the three-wheel layout and a tight pulley rubber band improved rolling. Wiring faults on the breadboard forced full disassembly late in the build. After prototype review, the team changed day-to-day messaging from MS Teams to Instagram for faster coordination while keeping Teams for formal scheduling.',
    metrics: [
      {
        label: 'Ramp dribble times',
        value: '8.43 s / 8.58 s',
        note: 'Two contest runs, both under 9 seconds.',
        isPlaceholder: false,
      },
      {
        label: 'Measured mass',
        value: '1138 g',
        note: 'Under the 1200 g competition target.',
        isPlaceholder: false,
      },
      {
        label: 'Free-kick points',
        value: '20',
        note: 'Attempt scores: 10, 3, and 4.',
        isPlaceholder: false,
      },
      {
        label: 'Unit production cost',
        value: '$173.85',
        note: 'Team estimate for a single TBWC unit.',
        isPlaceholder: false,
      },
    ],
    summaryMetricLabel: 'Performance',
    media: [
      {
        id: 'uog-automated-wheelchair-hero',
        kind: 'photograph',
        title: 'TBWC Mechanical Prototype',
        description: 'Isolated view of the TBWC chassis, drivetrain, and launcher structure.',
        technicalLabel: 'ENG*1100 / TBWC',
        src: publicUrl('/projects/tbwc-project-hero.png'),
        alt: 'TBWC perforated-metal chassis prototype with wheels, motor, battery pack, and twine launcher arm on a dark background',
        aspectRatio: '16/9',
        confidential: false,
      },
      {
        id: 'uog-automated-wheelchair-video',
        kind: 'video',
        title: 'TBWC Competition Video',
        description: 'Demonstration demonstration of the TBWC on the performance course.',
        technicalLabel: 'ENG*1100 / VIDEO',
        src: publicUrl('/projects/tbwc-competition-demo.mp4'),
        alt: 'Video of the Teddy Bear Wheelchair competition run',
        aspectRatio: '9/16',
        confidential: false,
      },
    ],
    resources: [
      {
        label: 'ENG*1100 Final Design Report (PDF)',
        href: publicUrl('/projects/tbwc-eng1100-final-report.pdf'),
      },
    ],
    requiresSanitization: false,
    tags: ['Mechanical Design', 'Mechatronics', 'Prototyping'],
  },
  {
    id: 'uog-f1-kinder',
    number: '09',
    slug: 'f1-kinder-toy-product-design',
    disciplineLabel: 'Product Development · DFMA',
    title: 'Blueprint 1 — F1 Kinder Toy',
    category: 'University — Design',
    companyOrCourse: 'University of Guelph — ENGG*2100',
    date: 'Winter 2025',
    featured: true,
    summary:
      'Team design of Blueprint 1, a Formula 1–inspired wind-up toy car sized to ship inside a Kinder Surprise Egg and assemble tool-free for children aged 7+.',
    problem:
      'Design a self-powered F1-inspired toy that fits within a Kinder-style egg package, uses no batteries, satisfies manufacturing and assembly constraints, and achieves the required travel performance.',
    engineeringChallenge:
      'Satisfy hard course constraints while delivering reliable motion: pack all parts into a 10 cm egg; keep at least 75% of toy weight 3D-printed; convert stored potential energy to kinetic energy after a trigger with no user input; forbid adhesives, tools, commercial toy parts, and removable pins; meet a 2.5 m travel requirement for a running toy; and complete tool-free assembly in under two minutes.',
    approach:
      'Group 63 (Blueprint) began with individual concept sketches and initially explored sports-themed projectile toys (soccer kicker, cricket thrower, tennis launcher). Accuracy and consistency risks led the team to select an F1-inspired wind-up race car. The drivetrain used a 3D-printed spiral spring and gear train to the rear axle, held by a sliding pin until release. Designs were modeled in SolidWorks, evaluated with decision matrices, and refined through repeated 3D-print prototypes focused on packaging size, spring energy, traction, and aesthetics.',
    contribution:
      'Documented contributions on the ENGG*2100 final report include the Executive Summary, Introduction, Design Evaluation, Assembly Instructions, and Project Management sections — covering problem framing, concept tradeoffs, the seven-step snap-fit assembly process, schedule/budget tracking, and redesign mitigations.',
    engineeringMethods: [
      'Concept Generation',
      'Decision Matrices',
      'SolidWorks Modeling',
      '3D-Print Prototyping',
      'Iterative Design Testing',
      'Tool-Free Snap-Fit Assembly Design',
    ],
    tools: ['SolidWorks', '3D Printing (PLA)', 'Prototyping'],
    solution:
      'Blueprint 1 is a wind-up F1-style car with an exposed spiral spring and gear train, snap-fit PLA body halves, front/rear wings, and rubber bands on the wheels for traction. Users wind the mechanism, then slide the pin to release stored energy. Assembly uses seven snap-fit steps with no adhesives or fasteners. The finished prototype used PLA filament (about 70 g print mass), rubber bands, and blue metallic paint for a motorsports appearance.',
    results:
      'The final design met the course’s functional, dimensional, and performance objectives, including consistent travel beyond the 2.5 m running-toy requirement after spring and traction revisions. Singular-toy production materials for the prototype totaled approximately $2.30 (PLA, rubber bands, and paint). Development spending across prototypes was about $11.96. The instruction sheet documents a seven-step tool-free build sequence.',
    lessons:
      'Early prints were too large for the egg and required nearly a 50% size reduction. An intermediate prototype underperformed on distance until the spiral spring was enlarged and rear-tire friction was increased with elastic bands. Projectile concepts were dropped due to accuracy and safety concerns. Team scheduling conflicts were resolved with a shared availability calendar, which improved coordination through the final delivery.',
    metrics: [
      {
        label: 'Travel requirement',
        value: '≥ 2.5 m',
        note: 'Running-toy performance criterion met after spring/traction redesign.',
        isPlaceholder: false,
      },
      {
        label: 'PLA print mass',
        value: '70.05 g',
        note: 'Final printed component mass from the course report.',
        isPlaceholder: false,
      },
      {
        label: 'Prototype unit cost',
        value: '~$2.30',
        note: 'Filament, rubber bands, and paint for a single toy.',
        isPlaceholder: false,
      },
      {
        label: 'Assembly steps',
        value: '7',
        note: 'Tool-free snap-fit sequence; team target under 2 minutes.',
        isPlaceholder: false,
      },
    ],
    summaryMetricLabel: 'Design target',
    cardMetric: {
      value: '≥ 2.5 m',
      label: 'Travel target',
    },
    media: [
      {
        id: 'uog-f1-kinder-hero',
        kind: 'illustration',
        title: 'BP1 Instruction Sheet',
        description: 'Blueprint 1 instruction sheet for the F1 Kinder toy.',
        technicalLabel: 'ENGG*2100 / BP1',
        src: publicUrl('/projects/f1-kinder-toy-instruction-sheet.png'),
        alt: 'Blueprint 1 instruction sheet showing F1 Kinder toy assembly steps',
        aspectRatio: '16/9',
        confidential: false,
      },
      {
        id: 'uog-f1-kinder-video',
        kind: 'video',
        title: 'Blueprint 1 Demonstration',
        description: 'Operating demonstration of the wind-up F1 Kinder toy.',
        technicalLabel: 'ENGG*2100 / DEMO',
        src: publicUrl('/projects/f1-kinder-toy-demo.mp4'),
        alt: 'Video demonstration of the Blueprint 1 F1 Kinder toy in operation',
        aspectRatio: '16/9',
        confidential: false,
      },
    ],
    resources: [
      {
        label: 'ENGG*2100 Final Report (PDF)',
        href: publicUrl('/projects/f1-kinder-engg2100-final-report.pdf'),
      },
    ],
    requiresSanitization: false,
    tags: ['Product Development', 'Mechanical Design', 'DFMA'],
  },
  {
    id: 'uog-mech-special-effects',
    number: '10',
    slug: 'mechanical-special-effects-highway-chase',
    disciplineLabel: 'Mechanism Design · Prototyping',
    title: 'Mechanical Special Effects — Highway Chase',
    category: 'University — Design',
    companyOrCourse: 'University of Guelph — Machine Design',
    date: 'Machine Design course',
    featured: false,
    summary:
      'Team design and fabrication of a fully mechanical dual-belt special-effects machine that creates the illusion of a high-speed highway chase for film or theatre, driven by a single motor with shafts, chain drive, and bevel gears.',
    problem:
      'Film and theatre productions often need the illusion of vehicle motion without physically moving a car, reducing risk and cost. The Machine Design project required a mechanically driven special-effects machine — motor as the only electrical component — within a maximum disassembled envelope of 32" × 34.5" × 27.5", using at least one shaft, with SolidWorks modelling, stress analysis, and kinematic analysis completed before fabrication.',
    engineeringChallenge:
      'Produce convincing synchronized motion of a roadway belt and a background skyline belt while keeping power transmission mechanically simple and stable. Early single-background concepts lacked realism; belt-pulley drive risked slip under motor torque on a small pulley; and the model vehicle needed secure restraint during belt movement.',
    approach:
      'Expanded from a rotating background-only concept to a dual-belt system: lower belt as roadway under a stationary model car, upper belt as repeating skyline/streetlight scenery. Replaced planned belt-pulley drive with a chain-and-sprocket reduction for positive engagement and consistent speed. Transferred power to the vertical background belt through bevel gears (90° direction change). Secured the model car with zip ties after fishing-line support proved unstable. Completed shaft/sprocket/roller stress analysis, kinematics, torque–speed motor characterization, SolidWorks assembly, drawings, and prototype testing.',
    contribution:
      'Team responsibilities included report writing and SolidWorks modelling (with Agusto Tavares on SolidWorks; Rehan Mohammed Feroz on kinematics and stress analysis; Sonny Piergentili on torque–speed curve, stress analysis, and AI/ML details).',
    engineeringMethods: [
      'Concept Selection & Iteration',
      'SolidWorks Modelling',
      'Shaft / Sprocket / Roller Stress Analysis',
      'Kinematic & Gear Reduction Analysis',
      'Torque–Speed Characterization',
      'Prototype Fabrication & Testing',
    ],
    tools: ['SolidWorks', 'Excel Analysis', 'Chain Drive', 'Bevel Gears', 'Prototyping'],
    solution:
      'A wooden-frame mechanism driven by a 12V DC motor: small motor sprocket chains to a larger sprocket on the main ground-belt drum shaft (bearings in side panels), with a free drum at the opposite end. Bevel gears drive an upper drum for the painted background belt. Critical rotating hazards (chain, sprockets, bevel gears) were covered with aluminum sheet metal. High-risk shafting used AISI 1030 cold-rolled steel with a conservative factor of safety greater than 2.0.',
    results:
      'Prototype testing confirmed both belts moved reliably, the chain delivered enough torque under two toy cars, bevel gears engaged without slip, and the scene created the intended highway-chase illusion with a stationary vehicle. Belts initially ran faster than desired (scenery hard to read); friction pads were added on driven shafts to reduce speed. Chain–sprocket reduction from an approximate 5000 rpm motor speed with an 8-tooth to 45-tooth sprocket pair produced about 889 rpm at the roller shaft. The system met main project constraints with the motor operating within safe torque levels.',
    lessons:
      'Positive chain engagement outperformed a belt drive for torque transfer without slip at higher speeds. Dual-belt layering was essential for a convincing chase effect. Future work should add adjustable belt and chain tensioning, CNC-machined structure for accuracy, modular interchangeable scenery belts, and a motor speed controller for finer ground/background balance.',
    metrics: [
      {
        label: 'Sprocket reduction',
        value: '8 → 45 teeth',
        note: 'Chain drive from motor sprocket to roller sprocket (~5000 rpm → ~889 rpm).',
        isPlaceholder: false,
      },
      {
        label: 'Envelope limit',
        value: '32" × 34.5" × 27.5"',
        note: 'Maximum disassembled size constraint.',
        isPlaceholder: false,
      },
      {
        label: 'Shaft material',
        value: 'AISI 1030 CR',
        note: 'Cold-rolled steel; design factor of safety > 2.0.',
        isPlaceholder: false,
      },
    ],
    media: [
      {
        id: 'uog-mech-special-effects-hero',
        kind: 'cad',
        title: 'SolidWorks Assembly — Front Elevation',
        description: 'CAD render of the dual-belt special-effects mechanism frame, chain drive, and bevel gear path.',
        technicalLabel: 'UOG / MACHINE DESIGN',
        src: publicUrl('/projects/mechanical-special-effects-hero.png'),
        alt: 'SolidWorks front elevation of the mechanical special-effects highway chase machine with wooden frame, belt, chain drive, and bevel gears',
        aspectRatio: '16/9',
        confidential: false,
      },
      {
        id: 'uog-mech-special-effects-testing',
        kind: 'video',
        title: 'Initial Post-Assembly Testing',
        description: 'First startup after assembly — verifying belt motion, chain drive, and overall mechanism operation.',
        technicalLabel: 'UOG / INITIAL TEST',
        src: publicUrl('/projects/mech-sfx-initial-testing.mp4'),
        alt: 'Video of initial testing of the mechanical special-effects machine after assembly',
        aspectRatio: '9/16',
        confidential: false,
      },
      {
        id: 'uog-mech-special-effects-final',
        kind: 'video',
        title: 'Final Assembly — Slow Motion',
        description: 'Completed highway-chase special-effects mechanism shown in slow motion.',
        technicalLabel: 'UOG / FINAL SLOW-MO',
        src: publicUrl('/projects/mech-sfx-final-slowmo.mp4'),
        alt: 'Slow-motion video of the finished mechanical special-effects highway chase machine',
        aspectRatio: '16/9',
        confidential: false,
      },
    ],
    resources: [
      {
        label: 'Machine Design Final Report (PDF)',
        href: publicUrl('/projects/mechanical-special-effects-final-report.pdf'),
      },
    ],
    requiresSanitization: false,
    tags: ['Mechanism Design', 'Prototyping', 'Testing'],
  },
]

export const featuredProjectSlugs = [
  'nachi-valve-failure-investigation',
  'scrap-detection-vision-system',
  'automated-wheelchair',
  'f1-kinder-toy-product-design',
] as const

export function getFeaturedProjects(): Project[] {
  return featuredProjectSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p))
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category)
}

export function getPublicMedia(project: Project): ProjectMedia[] {
  return project.media.filter((m) => !m.confidential && Boolean(m.src))
}
