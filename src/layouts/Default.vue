<template>
  <div
    class="min-h-screen flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors delay-100 ease-linear"
  >
    <div class="container max-w-screen-md mx-auto px-5">
      <header class="flex justify-between items-center mt-8 mb-12">
        <strong>
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <nav class="flex">
          <theme-switcher />
          <g-link class="ml-6" to="/"> Home </g-link>
          <g-link class="ml-6" to="/about/"> About </g-link>
          <g-link class="ml-6" to="/blog/"> Blog </g-link>
        </nav>
      </header>
      <slot />
    </div>
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
      author
      twitter {
        site
        creator
      }
    }
  }
</static-query>

<script>
// import the theme-switcher here
import ThemeSwitcher from '../components/ThemeSwitcher'

// reguster theme-swticher under components
export default {
  components: {
    ThemeSwitcher,
  },
  metaInfo() {
    return {
      meta: [
        {
          key: 'author',
          name: 'author',
          content: this.$static.metadata.author,
        },
        {
          key: 'twitter:site',
          name: 'twitter:site',
          content: this.$static.metadata.twitter.site,
        },
        {
          key: 'twitter:creator',
          name: 'twitter:creator',
          content: this.$static.metadata.twitter.creator,
        },
      ],
    }
  },
}
</script>
