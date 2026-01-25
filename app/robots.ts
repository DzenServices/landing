import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://dzenvps.com';
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/en/'],
        disallow: ['/api/', '/preview/', '/privacy', '/terms', '/en/privacy', '/en/terms'],
      },
    ],
    sitemap: `${site}/sitemap.xml`,
    host: site.replace(/^https?:\/\//, ''),
  };
}
