<template>
  <v-container>
    <v-list>
      <v-list-item>
        <v-card
          class="mb-16 elevation-0"
          rounded="false"
          flat
          link
        >
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Our Changing Planet</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                class="headline"
              >Write better HTML in 2021: the tips and tags you didn’t know you wanted</v-card-title>
              <v-card-subtitle>
                <div>
                  Newer tags, lots of tips and good practices on how to improve your HTML knowledge to write a better code
                </div>
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
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: 'ArticleList',
}
</script>