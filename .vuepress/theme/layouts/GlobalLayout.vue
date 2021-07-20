<template>
  <Page>
    <Header />
    <Main>
      <component :is="layout" :key="$page.path" />
    </Main>
  </Page>
</template>

<script>
import BlogPost from './BlogPost'
import BlogIndex from './BlogIndex'

import BlogList from '../components/BlogList.vue'

export default {
  name: '',
  components: {
    BlogPost,
    BlogIndex,
    BlogList
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

