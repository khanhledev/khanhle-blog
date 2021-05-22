const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Khanh Le',
  siteDescription:
    'Blog about awesome lists, collections of resources around a specific technology.',
  siteUrl: process.env.DEPLOY_URL || 'https://khanhle.blog',
  metadata: {
    author: 'khanh_le',
    twitter: {
      site: '@khanh_le',
      creator: '@khanh_le',
    },
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            [
              'gridsome-plugin-remark-shiki',
              { theme: 'dark-plus', skipInline: true },
            ],
          ],
        },
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/privacy', '/legal'],
      },
    },
  ],
  templates: {
    BlogPost: '/blog/:slug',
    Tag: '/tag/:id/',
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  },
}
