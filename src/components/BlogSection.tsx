import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { Button } from './Button';

export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
  description?: string;
  categories?: string[];
}

const FALLBACK_POSTS: BlogPost[] = [
  {
    title: 'Stop doing Dribbble-Endless Scrolling to Gather UI & UX Inspiration! Do these instead.',
    link: 'https://medium.com/@waiphyoaung.design/stop-doing-dribbble-endless-scrolling-to-gather-ui-ux-inspiration-do-these-instead-be5da56a68fd',
    pubDate: '2025-08-25',
    thumbnail: 'https://cdn-images-1.medium.com/max/1024/1*_OeBhLT26pnwx5jhCAUS1A.jpeg',
    categories: ['UI/UX Design', 'Inspiration', 'Design Thinking'],
  },
  {
    title: 'Streamlining UI/UX Design Workflow Using Notion: A Practical Guide for Teams (FREE)',
    link: 'https://medium.com/@waiphyoaung.design/streamlining-ui-ux-design-workflow-using-notion-a-practical-guide-for-teams-free-d1491fd268f3',
    pubDate: '2025-07-29',
    thumbnail: 'https://cdn-images-1.medium.com/max/1024/1*99t-kGiZ4r1x_0Gt6wM4xw.jpeg',
    categories: ['Product Design', 'Notion', 'Workflow'],
  },
];

const MEDIUM_PROFILE_URL = 'https://medium.com/@waiphyoaung.design';
const RSS_API_ENDPOINT =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@waiphyoaung.design';

export const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(FALLBACK_POSTS);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchMediumPosts() {
      try {
        const res = await fetch(RSS_API_ENDPOINT);
        if (!res.ok) throw new Error('Failed to fetch RSS feed');
        const data = await res.json();

        if (isMounted && data.status === 'ok' && Array.isArray(data.items) && data.items.length > 0) {
          interface FeedItem {
            title: string;
            link: string;
            pubDate: string;
            thumbnail?: string;
            content?: string;
            description?: string;
            categories?: string[];
          }
          const formatted: BlogPost[] = data.items.map((item: FeedItem) => {
            // Extract clean title (unescape HTML entities)
            const cleanTitle = item.title
              ?.replace(/&amp;/g, '&')
              ?.replace(/&#39;/g, "'")
              ?.replace(/&quot;/g, '"') || '';

            // Extract cover image from content or thumbnail
            let coverImg = item.thumbnail;
            if (!coverImg && item.content) {
              const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
              if (imgMatch) {
                coverImg = imgMatch[1];
              }
            }

            return {
              title: cleanTitle,
              link: item.link,
              pubDate: item.pubDate,
              thumbnail: coverImg,
              categories: item.categories?.slice(0, 3),
            };
          });

          setPosts(formatted);
        }
      } catch (err) {
        console.warn('Real-time Medium feed fallback in use:', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchMediumPosts();

    // Poll periodically (every 5 minutes) to capture real-time updates seamlessly
    const interval = setInterval(fetchMediumPosts, 5 * 60 * 1000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const d = new Date(dateString);
      if (isNaN(d.getTime())) return dateString;
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }).format(d);
    } catch {
      return dateString;
    }
  };

  return (
    <div className="space-y-6 scroll-mt-24" id="blog">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-900 dark:text-white">
            Blog & Articles
          </h2>
        </div>

        {/* Medium Profile CTA Button - Desktop (sm+) */}
        <div className="hidden sm:block">
          <Button
            variant="secondary"
            href={MEDIUM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs py-1.5"
          >
            <span>View All Articles</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </Button>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post, idx) => (
          <a
            key={post.link || idx}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-3.5 sm:p-4 rounded-xs border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0c] hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between min-w-0 overflow-hidden"
          >
            <div>
              {/* Cover Image */}
              {post.thumbnail && (
                <div className="relative aspect-16/9 w-full rounded-xs overflow-hidden bg-neutral-100 dark:bg-neutral-900 mb-3.5 border border-neutral-100 dark:border-neutral-800/60">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center lg:filter lg:grayscale lg:group-hover:grayscale-0 lg:group-hover:scale-103 transition-all duration-500 ease-out"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Tags & Date */}
              <div className="flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400 mb-2 font-mono">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(post.pubDate)}</span>
                </div>
                <span className="text-[10px] uppercase font-semibold text-neutral-400 dark:text-neutral-500">
                  medium.com
                </span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white line-clamp-2 leading-snug">
                {post.title}
              </h3>
            </div>

            {/* Categories & Read link */}
            <div className="pt-3.5 mt-2 border-t border-neutral-100 dark:border-neutral-900 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 min-w-0">
              <div className="flex flex-wrap gap-1.5 min-w-0 flex-1">
                {post.categories?.map((cat) => (
                  <span
                    key={cat}
                    className="text-[10px] px-1.5 py-0.5 rounded-xs bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 font-mono capitalize shrink-0"
                  >
                    {cat.replace(/-/g, ' ')}
                  </span>
                ))}
              </div>
              <span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white inline-flex items-center gap-0.5 shrink-0 transition-colors ml-auto">
                Read
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Medium Profile CTA Button - Mobile Version (Under Blog Cards, Center Aligned) */}
      <div className="flex sm:hidden justify-center pt-2 w-full max-w-full">
        <Button
          variant="secondary"
          href={MEDIUM_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs py-2 px-4 max-w-full"
        >
          <span>View All Articles</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
        </Button>
      </div>
    </div>
  );
};
export default BlogSection;
