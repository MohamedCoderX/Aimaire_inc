/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://aimaireinc.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [], // Do NOT exclude anything
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
