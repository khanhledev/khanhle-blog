<template>
  <Layout>
    <h1 class="mb-5 text-2xl font-semibold text-gray-900 dark:text-gray-100">
      {{ $page.tag.title }}
    </h1>
    <h2 v-if="$page.tag.description" class="pb-2 mb-8 text-lg">
      {{ $page.tag.description }}
    </h2>

    <ul class="list-disc list-outside">
      <li
        v-for="post in $page.tag.belongsTo.edges"
        :key="post.node.id"
        class="mt-3"
      >
        <g-link :to="post.node.path">
          {{ post.node.title }} – {{ post.node.date }}
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag: tag (id: $id) {
    title
    description
    belongsTo {
      totalCount
      edges {
        node {
          ...on BlogPost {
            title
            date (format: "MMMM D, Y")
            path
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: 'Tag: ' + this.$page.tag.title,
    }
  },
}
</script>
