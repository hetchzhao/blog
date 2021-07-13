<template>
  <v-container>
    <v-list>
      <v-list-item v-for="(post, index) in posts" :key="index">
        <BlogListItem
          :title="post.frontmatter.title"
          :summary="post.frontmatter.summary"
          :path="post.path"
        />
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import BlogListItem from './BlogListItem'

export default {
  name: 'BlogList',
  props: {
    posts: {
      type: Array,
      default: []
    }
  },
  components: {
    BlogListItem
  }
}
</script>