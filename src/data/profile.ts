export interface ProfileData {
  name: string;
  titles: string[];
  tagline: string;
  valueProposition: string;
  location: {
    currentCity: string;
    currentCountry: string;
    timezoneLabel: string;
    utcOffset: number; // +7 for Thailand
    targetCountry: string;
    targetTimezoneLabel: string;
    targetUtcOffset: number; // +12 or +13 for NZ
  };
  availability: {
    status: string;
    startDate: string; // [DATE]
    noticePeriod: string;
    workRights: string; // [WORK-RIGHTS STATEMENT]
    visaRequirement: string;
  };
  contact: {
    email: string;
    bookingUrl: string; // [URL]
    linkedinUrl: string;
    behanceUrl: string;
    githubUrl?: string;
    mediumUrl: string;
    whatsappPhone: string; // [PHONE]
  };
  education: {
    degree: string;
    institution: string;
    partnerInstitution: string;
  };
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    verifiedStatus: string;
  };
}

export const profileData: ProfileData = {
  name: "Wai Phyo Aung [Lucas]",
  titles: ["Senior UI/UX Designer", "Senior Motion Graphics Designer"],
  tagline: "UI/UX & Motion Designer",
  valueProposition: "I design intuitive product interfaces and purposeful motion systems that turn complex user flows into effortless digital experiences.",
  location: {
    currentCity: "Bangkok",
    currentCountry: "Thailand",
    timezoneLabel: "Bangkok (ICT, UTC+7)",
    utcOffset: 7,
    targetCountry: "New Zealand",
    targetTimezoneLabel: "Auckland (NZDT, UTC+13 / NZST, UTC+12)",
    targetUtcOffset: 13,
  },
  availability: {
    status: "Open to New Zealand Roles",
    startDate: "[DATE]",
    noticePeriod: "Flexible / [DATE]",
    workRights: "[WORK-RIGHTS STATEMENT] Open to accredited employer work visa sponsorship or remote employment for New Zealand teams.",
    visaRequirement: "Seeking accredited employer visa support or remote engagement.",
  },
  contact: {
    email: "waiphyoaung.design@gmail.com",
    bookingUrl: "https://cal.com/wai.design-start-a-virtual-chat",
    linkedinUrl: "https://linkedin.com/in/waiphyoaung-design",
    behanceUrl: "https://behance.net/waiphyoaung",
    githubUrl: "https://github.com/wai-dev-design",
    mediumUrl: "https://medium.com/@waiphyoaung.design",
    whatsappPhone: "[PHONE NUMBER]",
  },
  education: {
    degree: "Bachelor of Engineering (Civil)",
    institution: "University of Wolverhampton",
    partnerInstitution: "via Victoria University College",
  },
  stats: [
    {
      label: "UI/UX vs Total Design",
      value: "10 yrs",
      subtext: "UI/UX focus & 10 years design experience",
    },
    {
      label: "Production Projects",
      value: "[PLACEHOLDER]+",
      subtext: "Shipped across web, SaaS, and apps",
    },
    {
      label: "Confirmed Impact",
      value: "+150%",
      subtext: "Online sales uplift (Classic Decoder)",
    },
    {
      label: "Design Systems",
      value: "[PLACEHOLDER]",
      subtext: "Figma token-to-code architectures",
    },
  ],
  testimonial: {
    quote: "\"[NAMED QUOTE] Wai's unique background in motion graphics gives his product design work an unmatched fluidity. He consistently bridges the gap between Figma design systems and production code.\"",
    author: "[NAMED TESTIMONIAL]",
    role: "[ROLE / DESIGN LEAD]",
    company: "[COMPANY / CLIENT]",
    verifiedStatus: "Referees available upon request",
  },
};
