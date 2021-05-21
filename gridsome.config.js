const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
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
