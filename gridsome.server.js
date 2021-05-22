// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  api.loadSource(({ getCollection }) => {
    // load the "BlogPost" collection
    const posts = getCollection('BlogPost')

    // go over every article and either remove it or prefix with "DRAFT: ", depending on NODE_ENV
    const now = new Date()
    posts.data().forEach((node) => {
      if (new Date(node.date) > now) {
        if (process.env.NODE_ENV === 'production') {
          posts.removeNode(node.id) // must remove by node id
        } else {
          node.title = `DRAFT: ${node.title}`
        }
      }
    })

    // our tag descriptions
    const tagDescriptions = {
      backend: 'All about backend! The hottest backend frameworks for JS.',
      frontend:
        'Mainly posts about Gridsome, the JAMstack framwork for Vue.js.',
      design:
        '"The alternative to good design is always bad design. There is no such thing as no design." -- Adam Judge, author',
      hipster: 'All about the newest tech gadgets.',
    }

    // add descriptions to tag data nodes
    const tags = getCollection('Tag')
    tags.data().forEach((tag) => {
      if (tagDescriptions[tag.id]) {
        tag.description = tagDescriptions[tag.id]
      }
    })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
