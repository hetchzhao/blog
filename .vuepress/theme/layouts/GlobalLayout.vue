<template>
  <v-app>
    <Header/>
    <v-main>
      <component :is="layout" :key="$page.path" />
    </v-main>
  </v-app>
</template>

<script>
import Header from '../components/Header.vue'
import BlogPost from './BlogPost'
import BlogIndex from './BlogIndex'

export default {
  name: '',
  components: {
    Header,
    BlogPost,
    BlogIndex
  },
  computed: {
    layout () {
      const layout = this.$page.frontmatter.layout

      if (layout && (this.$vuepress.getLayoutAsyncComponent(layout) || this.$vuepress.getVueComponent(layout))) {

        return layout
      }

      if (!this.$page.path) {
        return '404'
      }

      return 'BlogIndex'
    },
  }
}
</script>

