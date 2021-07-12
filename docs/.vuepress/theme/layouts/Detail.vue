<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <Content />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '../components/Header'

export default {
  name: 'Detail',
  components: {
    Header,
  },
  mounted() {
    console.log('Detail')
  }
}
</script>

<style lang="sass" scoped>

</style>