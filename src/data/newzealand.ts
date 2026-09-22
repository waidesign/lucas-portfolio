export interface NewZealandRecruitmentData {
  heroTagline: string;
  heroHeadline: string;
  subheadline: string;
  visaAndWorkRights: {
    status: string;
    statement: string; // [WORK-RIGHTS STATEMENT]
    details: string[];
    accreditedEmployerNote: string;
  };
  timezoneCollaboration: {
    thailandTz: string;
    nzTz: string;
    overlapHours: string;
    howIWork: string[];
  };
  whyNewZealand: {
    title: string;
    description: string;
  }[];
  relocationReadiness: {
    availabilityDate: string; // [DATE]
    currentBase: string; // [CITY]
    remoteOrRelocate: string;
    refereesStatus: string;
  };
}

export const newZealandData: NewZealandRecruitmentData = {
  heroTagline: "Relocation & Remote Hiring in New Zealand",
  heroHeadline: "Ready to contribute to New Zealand's innovative product landscape.",
  subheadline: "Seeking UI/UX and senior motion design opportunities with Kiwi product teams, technology studios, and accredited employers.",
  visaAndWorkRights: {
    status: "Requires Accredited Employer Work Visa (AEWV) or Remote Contract",
    statement: "[WORK-RIGHTS STATEMENT] Currently based in Bangkok, Thailand (UTC+7). Open to full-time remote roles or company-sponsored relocation to New Zealand under the Accredited Employer Work Visa framework.",
    details: [
      "Open to relocation to Auckland, Wellington, Christchurch, or fully remote within NZ hours.",
      "Clear engineering background (B.Eng Civil) with structured documentation and verified credentials.",
      "Eligible for AEWV sponsorship process with immediate documentation readiness.",
    ],
    accreditedEmployerNote: "Happy to coordinate with your People & Culture or immigration advisory team for seamless processing.",
  },
  timezoneCollaboration: {
    thailandTz: "Bangkok (ICT / UTC+7)",
    nzTz: "Auckland (NZST UTC+12 / NZDT UTC+13)",
    overlapHours: "4 to 5 daily overlapping business hours (early mornings ICT align with NZ afternoon sprints)",
    howIWork: [
      "Asynchronous documentation: Clear Loom walkthroughs, annotated Figma flows, and written Jira/Notion tickets ensure development unblocks overnight.",
      "Synchronous standups: Fully available for morning standups, sprint planning, and design critique sessions within New Zealand standard business hours (9am - 5pm NZT).",
      "Proven international track record: 3+ years collaborating seamlessly across remote timezones spanning North America, Europe, and Asia-Pacific.",
    ],
  },
  whyNewZealand: [
    {
      title: "Design Craft & Product Culture",
      description: "New Zealand's digital ecosystem produces world-class, human-centred software with an emphasis on sustainable craftsmanship and authentic collaboration.",
    },
    {
      title: "Shared Values & Direct Communication",
      description: "I thrive in teams that value plain, direct, modest communication without corporate pretence, focusing on user outcomes and mutual respect.",
    },
    {
      title: "Long-Term Commitment",
      description: "My career goal is to plant long-term roots within a collaborative New Zealand engineering and design organisation.",
    },
  ],
  relocationReadiness: {
    availabilityDate: "[DATE] Immediate start for remote contracts, or aligned with visa turnaround for on-site relocation",
    currentBase: "Bangkok [CITY]",
    remoteOrRelocate: "Remote, hybrid, or full on-site relocation",
    refereesStatus: "2-3 professional referees available upon request [PLACEHOLDER]",
  },
};
