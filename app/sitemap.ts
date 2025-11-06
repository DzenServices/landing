import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const now = new Date();

  const alternates = (path: string) => ({
    languages: {
      ru: `${site}${path.replace(/^\/en/, '') || '/'}`,
      en: `${site}${path.startsWith('/en') ? path : `/en${path === '/' ? '' : path}`}`,
      'x-default': `${site}/`,
    },
  });

  return [
    {
      url: `${site}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: alternates('/'),
    },
    {
      url: `${site}/en`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: alternates('/en'),
    },
    {
      url: `${site}/privacy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: alternates('/privacy'),
    },
    {
      url: `${site}/en/privacy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: alternates('/en/privacy'),
    },
    {
      url: `${site}/terms`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: alternates('/terms'),
    },
    {
      url: `${site}/en/terms`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: alternates('/en/terms'),
    },
  ];
}
