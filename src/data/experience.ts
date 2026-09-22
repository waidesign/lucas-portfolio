export interface ExperienceItem {
  id: string;
  company: string;
  companyUrl?: string;
  location: string;
  role: string;
  period: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  methodologies: string[];
  technologies: string[];
  bullets: string[];
  skillsGained: string[];
  isCurrent?: boolean;
}

export const experienceData: {
  narrativeLead: string;
  narrativeDetail: string;
  roles: ExperienceItem[];
} = {
  narrativeLead: "From video timeline rhythm to interactive digital products.",
  narrativeDetail: "My path into UI/UX design wasn't accidental — it grew out of video editing and motion graphics. Editing taught me narrative pacing, visual attention, and how viewers track information under cognitive load. Motion graphics taught me spatial choreography and kinetic feedback. Today in product design, those same principles create intuitive user interfaces where every interaction feels natural, immediate, and earned.",
  roles: [
    {
      id: "empire-pixel",
      company: "Empire Pixel Co., Ltd",
      companyUrl: "https://empirepixel.com",
      location: "Canada • Full-time Remote",
      role: "Senior UI/UX Designer & Motion Designer",
      period: "2022 – Present",
      isCurrent: true,
      summary: "I lead the UI/UX design team together with my Art Director for web products, from research to final design and developer handoffs. I study user needs and pain points, then build a clear UX and design plan for the brand. I create lo-fi and hi-fi designs, design systems, prototypes and animations like GIFs, Lotties, and motion graphics and videos. My work has helped increase user engagement and conversion rates, and I have built design systems for multiple websites.",
      responsibilities: [
        "Investigating UX design requirements and pain points",
        "Developing and conceptualizing a comprehensive UI/UX design strategy for the brand",
        "Producing Lo-fi designs, Hi-Fi designs, UI elements along with design system, Animations, GIFs, Lotties and Motion Graphics",
      ],
      achievements: [
        "Led End-to-End Product Design and Cross-Functional Collaboration",
        "Increased User Engagement and Boosted Conversion Rates",
        "Established multiple Design Systems for multiple web properties",
      ],
      methodologies: [],
      technologies: [
        "Figma",
        "Figma AI",
        "FigJam",
        "Google AI Studio",
        "Antigravity",
        "Claude Code",
        "Adobe After Effects",
        "Adobe Premiere Pro",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Git",
        "Bitbucket",
        "v0.dev",
        "Wordpress",
        "Google Apps",
      ],
      bullets: [
        "Investigating UX design requirements and pain points",
        "Developing and conceptualizing a comprehensive UI/UX design strategy for the brand",
        "Producing Lo-fi designs, Hi-Fi designs, UI elements along with design system, Animations, GIFs, Lotties and Motion Graphics",
        "Led End-to-End Product Design, increased user engagement, boosted conversion rates, and built multiple design systems",
      ],
      skillsGained: ["Figma", "Figma AI", "Design Systems", "Lottie", "Motion Graphics", "UX Research", "Cross-Functional Leadership"],
    },
    {
      id: "global-innovation-media",
      company: "Global Innovation Media",
      companyUrl: "https://www.gim4u.com",
      location: "Yangon, Myanmar • Onsite",
      role: "Motion Graphics Designer",
      period: "2020 – 2022",
      summary: "I lead motion design projects from the first scratch idea to the final video. I develop concepts, write storyboards, and create animations and visuals effects for Multi and Social Media Advertisement Purpose. I also handle video editing and post-production. My campaigns have helped grow brand recognition and keep viewers watching longer. I adapt my designs to fit different platforms, which supports business growth.",
      responsibilities: [
        "Leading Motion Design Projects, Concept Development and Storyboarding",
        "Outputting Advanced Animation & Visual Effects",
        "Video Editing & Post-Production",
      ],
      achievements: [
        "Delivered High-Impact Campaigns",
        "Boosted Brand Recognition and Viewer Retention Improvement",
        "Adapted Designs Across Platforms and Contributed to Business Growth",
      ],
      methodologies: [],
      technologies: [
        "Google Apps",
        "Adobe After Effects",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Premiere Pro",
        "Figma",
      ],
      bullets: [
        "Leading Motion Design Projects, Concept Development and Storyboarding",
        "Outputting Advanced Animation & Visual Effects",
        "Video Editing & Post-Production",
        "Delivered High-Impact Campaigns, boosted brand recognition and viewer retention across multiple platforms",
      ],
      skillsGained: ["Adobe After Effects", "Animation", "Visual Effects", "Video Editing", "Adobe Premiere Pro", "Figma"],
    },
    {
      id: "ytv-channel",
      company: "YTV Digital Free to Air Channel",
      companyUrl: "https://ytvmm.com",
      location: "Yangon, Myanmar • Onsite",
      role: "Video Editor & Broadcast Motion Designer",
      period: "2019 – 2020",
      summary: "I turn raw footage into polished videos with clear, engaging stories. I handle color grading, sound design, and music sync, and I add visual effects to make each video look better. I also keep media files organized and archived. My work has increased viewer engagement, supported successful campaign launches, and improved storytelling quality across multiple TV programs.",
      responsibilities: [
        "Editing Raw Footage into Polished Videos and Craft Engaging Storylines",
        "Color Grading, Sound Design, Music Sync and Adding Visual Enhancements",
        "Organizing and Archiving Media Assets",
      ],
      achievements: [
        "Increased Viewer Engagement",
        "Successful Campaign Launches and hosted multiple TV programs",
        "Enhanced Storytelling Quality",
      ],
      methodologies: [],
      technologies: [
        "Google Apps",
        "Adobe After Effects",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Premiere Pro",
      ],
      bullets: [
        "Editing Raw Footage into Polished Videos and Craft Engaging Storylines",
        "Color Grading, Sound Design, Music Sync and Adding Visual Enhancements",
        "Organizing and Archiving Media Assets",
        "Increased Viewer Engagement and enhanced storytelling quality across TV programs",
      ],
      skillsGained: ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop", "Adobe Illustrator", "Color Grading", "Sound Design"],
    },
    {
      id: "freelance-designer",
      company: "Freelance",
      location: "Yangon, Myanmar • Onsite",
      role: "Freelance Creative Designer",
      period: "2016 – 2019",
      summary: "I worked on a project basis with Version X Entertainment, Midas Creatives, and MCIX. For each client, I completed design and animation projects from start to finish. I adjusted my work to fit each brand and delivered on time and to meet client budget.",
      responsibilities: [],
      achievements: [
        "Collaborated by project based with Version X Entertainment, Midas Creatives, MCIX and completed multiple Design Projects and Animation Projects.",
      ],
      methodologies: [],
      technologies: [
        "Google Apps",
        "Adobe After Effects",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Premiere Pro",
      ],
      bullets: [
        "Collaborated by project based with Version X Entertainment, Midas Creatives, MCIX and completed multiple Design Projects and Animation Projects.",
      ],
      skillsGained: ["Adobe After Effects", "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Google Apps"],
    },
  ],
};
