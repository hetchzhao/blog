<template>
  <v-app>
    <Header />
    <v-main class="pl-8 pr-8">
      <v-row>
        <v-col cols="12" sm="8">
          <ArticleList />
        </v-col>
        <v-col cols="12" sm="4">

        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Header from '../components/Header'
import ArticleList from '../components/ArticleList'
// import SideBar from '../components/SideBar'

export default {
  name: '',
  components: {
    Header,
    ArticleList,
    // SideBar
  }
}
</script>
