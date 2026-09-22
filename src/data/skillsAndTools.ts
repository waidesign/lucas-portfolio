export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface ToolItem {
  name: string;
  category: "Design & Prototyping" | "Code & AI-Assisted" | "Motion & Video" | "CMS & Web";
  proficiency: "Daily Core" | "Advanced" | "Proficient";
  highlight?: boolean;
}

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
  deliverables: string;
}

export const skillsData: SkillCategory[] = [
  {
    title: "UI/UX Product Design",
    description: "Structuring complex workflows into logical, accessible, and delightful interfaces.",
    skills: [
      "User Research & Discovery",
      "Information Architecture",
      "Wireframing & Prototyping",
      "Design Systems & Token Libraries",
      "Usability Testing & Heuristics",
      "Conversion Rate Optimization (CRO)",
      "Accessibility (WCAG AA Compliance)",
    ],
  },
  {
    title: "Motion & Micro-Interactions",
    description: "Bringing interfaces to life with kinetic logic, feedback states, and cinematic timing.",
    skills: [
      "Micro-interaction Choreography",
      "Lottie / JSON Animation Export",
      "Interactive Product Tours",
      "Perceived Latency Reduction",
      "Motion Handoff Specifications",
      "Video Storytelling & Explainer Reels",
    ],
  },
  {
    title: "Design-to-Code & AI Engineering",
    description: "Bridging the gap between Figma mockups and production-grade frontend implementation.",
    skills: [
      "Figma Tokens to Tailwind CSS",
      "React Component Architecture",
      "Motion Animation Integration",
      "AI-Assisted Workflow (Cursor, v0, Figma AI)",
      "Developer Handoff Fidelity",
      "Responsive Layout Engineering",
    ],
  },
];

export const toolsData: ToolItem[] = [
  { name: "Figma", category: "Design & Prototyping", proficiency: "Daily Core", highlight: true },
  { name: "FigJam", category: "Design & Prototyping", proficiency: "Daily Core" },
  { name: "Figma AI", category: "Design & Prototyping", proficiency: "Daily Core", highlight: true },
  { name: "After Effects", category: "Motion & Video", proficiency: "Daily Core", highlight: true },
  { name: "Premiere Pro", category: "Motion & Video", proficiency: "Advanced" },
  { name: "Photoshop", category: "Motion & Video", proficiency: "Advanced" },
  { name: "Illustrator", category: "Motion & Video", proficiency: "Advanced" },
  { name: "Cursor", category: "Code & AI-Assisted", proficiency: "Daily Core", highlight: true },
  { name: "v0.dev", category: "Code & AI-Assisted", proficiency: "Daily Core" },
  { name: "VS Code", category: "Code & AI-Assisted", proficiency: "Advanced" },
  { name: "Framer", category: "CMS & Web", proficiency: "Advanced", highlight: true },
  { name: "Webflow", category: "CMS & Web", proficiency: "Proficient" },
  { name: "WordPress", category: "CMS & Web", proficiency: "Proficient" },
];

export const processStages: ProcessStage[] = [
  {
    step: "01",
    title: "Discover",
    description: "Deconstruct the business problem, interview stakeholders, audit existing analytics, and identify user friction points.",
    deliverables: "Problem statement, competitive benchmark, user personas.",
  },
  {
    step: "02",
    title: "Define",
    description: "Map the information architecture, user journeys, and success metrics before opening a high-fidelity canvas.",
    deliverables: "User flow diagrams, content hierarchy, conversion hypotheses.",
  },
  {
    step: "03",
    title: "Design",
    description: "Iterate rapidly from low-fi wireframes to polished, tokenized Figma designs with responsive layouts and fluid states.",
    deliverables: "Interactive Figma prototype, design system tokens, typography scale.",
  },
  {
    step: "04",
    title: "Test",
    description: "Validate with real users via unmoderated and moderated sessions to uncover cognitive roadblocks.",
    deliverables: "Usability test insights, heuristic scorecards, iteration notes.",
  },
  {
    step: "05",
    title: "Ship",
    description: "Provide comprehensive developer handoff with motion curves, edge-case states, and responsive token specs.",
    deliverables: "Figma-to-code tokens, Lottie animations, developer QA walkthrough.",
  },
  {
    step: "06",
    title: "Measure",
    description: "Track post-launch engagement, drop-off rates, and conversion metrics to guide informed follow-up iterations.",
    deliverables: "Post-launch metric reports (+150% sales uplift benchmark).",
  },
];
