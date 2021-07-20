<template>
  <div class="block">
    <div v-for="(post, index) in posts" :key="`POST_INDEX_${index}`" class="h-full w-full">
      <div class="mb-12">
        <BlogListItem
          :title="post.title"
          :summary="post.summary"
          :path="post.path"
          :coverSrc="post.coverSrc"
        />
      </div>
    </div>
  </div>
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