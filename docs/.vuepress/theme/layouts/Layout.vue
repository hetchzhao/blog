<template>
  <v-app>
    <Header />
    <v-main class="pl-8 pr-8">
      <v-row>
        <v-col cols="12" sm="8">
          <ArticleList />
        </v-col>
        <v-divider class="ml-16 mr-16" vertical />
        <v-col cols="12" sm="4">
          <Nav />
        </v-col>
      </v-row>
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
