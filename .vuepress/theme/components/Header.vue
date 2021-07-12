<template>
  <v-app-bar
    app
    color="blue darken-3"
    clipped-right
    dark
  >
    <v-toolbar-title
      style="width: 300px"
    >
      <span>Google Contacts</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon large>
      <v-avatar size="32px" item>
        <v-img
          src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
          alt="Vuetify"
        />
      </v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="sass" scoped>

</style>