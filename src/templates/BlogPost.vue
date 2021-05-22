<template>
  <Layout>
    <h1 class="mb-2 text-2xl font-semibold text-strong">
      {{ $page.post.title }}
    </h1>
    <p class="mb-4 font-light text-gray-700">
      {{ $page.post.date }}
    </p>
    <div class="flex flex-wrap mb-4 text-sm">
      <g-link
        v-for="tag in $page.post.tags"
        :key="tag.id"
        :to="tag.path"
        class="px-2 py-1 mb-4 mr-4 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-300 hover:bg-gray-700 dark:hover:text-gray-700 dark:hover:bg-gray-300"
      >
        {{ tag.title }}
      </g-link>
    </div>
    <!-- This is the figure element we added: -->
    <figure v-if="$page.post.image.src" class="flex flex-col">
      <g-image
        :alt="$page.post.image.alt"
        :src="$page.post.image.path"
        class="mb-2"
      />
      <figcaption
        class="self-center image-caption mb-15"
        v-html="$page.post.image.caption"
      />
    </figure>
    <div
      class="mt-8 mb-16 prose lg:prose-lg xl:prose-xl markdown"
      v-html="$page.post.content"
    />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: blogPost (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    path
    summary
    image {
      path
      caption
      alt
    }
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
import PostSeo from '../mixins/SEO.vue'

export default {
  mixins: [PostSeo],
}
</script>
