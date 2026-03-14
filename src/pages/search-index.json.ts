import type { APIRoute } from 'astro';
import postsData from '../data/posts.json';
import { generateExcerpt, cleanWpContent } from '../utils/content';

export const GET: APIRoute = () => {
  const index = (postsData as any[]).map((p: any) => ({
    title: p.title,
    slug: p.slug,
    excerpt: p.seoDescription || p.excerpt || generateExcerpt(cleanWpContent(p.body || ''), 100),
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
