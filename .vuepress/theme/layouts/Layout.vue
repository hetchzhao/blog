<template>
  <v-app>
    <Header />
    <v-main>
      <div class="d-flex justify-center">
        <div class="d-flex mx-16">
          <div class="flex">
            <ArticleList />
          </div>
          <v-divider class="ml-16 mr-16" vertical/>
          <div class="width-365">
            <div>
              <div class="pt-8">
                <Nav/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Header from '../components/Header'
import ArticleList from '../components/ArticleList'
import Nav from '../components/Nav'

export default {
  name: '',
  components: {
    Header,
    ArticleList,
    Nav
  }
}
</script>

<style lang="stylus" scoped>
.width-365 {
  width: 365px;
}
</style>