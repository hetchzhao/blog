<template>
  <v-card
    class="mb-8 elevation-0"
    rounded="false"
    flat
    link
    :to="path"
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="headline">{{title}}</v-card-title>
        <v-card-subtitle>
          <div>{{summary}}</div>
          <div>
            <span>Nov 13, 2018</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
        </v-card-subtitle>
      </div>
      <v-avatar
        class="ma-3"
        size="125"
        tile
      >
        <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'BlogListItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    summary: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    }
  }
}
</script>

