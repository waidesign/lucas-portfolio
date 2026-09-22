export interface ArticleItem {
  id: string;
  title: string;
  publication: string;
  date: string;
  readTime: string;
  summary: string;
  url: string;
}

export const writingData: {
  lead: string;
  mediumProfileUrl: string;
  articles: ArticleItem[];
} = {
  lead: "Thoughts on motion systems, design-to-code pipelines, and interface psychology.",
  mediumProfileUrl: "https://medium.com/@waiphyoaung.design",
  articles: [
    {
      id: "article-1",
      title: "Designing Motion with Purpose: Why UI Micro-Interactions Drive Micro-Conversions",
      publication: "Medium",
      date: "2024",
      readTime: "5 min read",
      summary: "Exploring how subtle kinetic feedback eliminates checkout hesitation and reduces cognitive friction in high-value e-commerce flows.",
      url: "https://medium.com/@waiphyoaung.design/article-1 [PLACEHOLDER]",
    },
    {
      id: "article-2",
      title: "Bridging the Gap: How Video Editing Principles Transformed My UI/UX Workflow",
      publication: "Medium",
      date: "2023",
      readTime: "6 min read",
      summary: "What 4 years in broadcast cutting rooms taught me about visual attention, information density, and user pacing.",
      url: "https://medium.com/@waiphyoaung.design/article-2 [PLACEHOLDER]",
    },
  ],
};
