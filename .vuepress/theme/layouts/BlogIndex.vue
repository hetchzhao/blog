<template>
  <div class="flex justify-center">
    <div class="w-full max-w-screen-lg min-w-0 mx-16">
      <div class="flex">
        <div class="block flex-1">
          <div class="block">
            <div class="block mt-8">
              <div class="block">
                <BlogList :posts="posts" />
              </div>
            </div>
          </div>
        </div>
        <div class="block min-h-screen mx-14 border-r divide-gray-300"></div>
        <div class="block w-80">
          <div class="sticky mt-0">
            <div class="block pt-8">
              <div class="block pb-10 border-b border-gray-200">
                <Topics />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogList from '../components/BlogList'
import Topics from '../components/Topics'

export default {
  name: 'BlogIndex',
  components: {
    BlogList,
    Topics
  },
  computed: {
    posts() {
      return this.$site.pages
        .filter(page => page.regularPath !== '/')
        .map(page => {
          const { frontmatter, path } = page;

          return {
            path,
            ...frontmatter,
          }
        })
    }
  }
}
</script>

<style scoped>

</style>