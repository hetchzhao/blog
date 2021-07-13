<template>
  <div class="d-flex justify-center">
    <div class="d-flex mx-16">
      <div class="flex">
        <BlogList :posts="posts" />
      </div>
    </div>
    <v-divider class="ml-16 mr-16" vertical/>
    <div class="side">
      <div>
        <div class="pt-8">
          <Nav/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogList from '../components/BlogList'
import Nav from '../components/Nav'

export default {
  name: 'BlogIndex',
  components: {
    BlogList,
    Nav
  },
  computed: {
    posts() {
      return this.$site.pages.filter(page => page.regularPath !== '/')
    }
  }
}
</script>

<style lang="stylus" scoped>
.side {
  width: 365px;
}
</style>