<template>
  <div class="flex flex-auto items-center justify-between box-border">
    <div :class="contexntClass">
      <router-link class="m-0 p-0" :to="path">
        <h2 class="text-2xl font-bold overflow-hidden overflow-ellipsis">
          {{title}}
        </h2>
        <div class="block pt-1">
          <h3 class="overflow-ellipsis overflow-hidden text-base font-normal">
            {{summary}}
          </h3>
        </div>
      </router-link>
      <div class="flex items-baseline justify-between pt-2">
        <div class="flex items-center min-w-0">
          <div class="whitespace-nowrap">
            <span class="text-sm font-normal">Jul 16</span>
          </div>
          <div class="relative h-full px-3">
            <span>·</span>
          </div>
          <div class="whitespace-nowrap">
            <span class="text-sm font-normal">8 min read</span>
          </div>
          <div class="relative h-full px-3">
            <span>·</span>
          </div>
          <router-link class="m-0 p-0" to="#">
            <div class="relative py-1 px-2 bg-gray-100 rounded-3xl">
              <span>Life</span>
            </div>
          </router-link>
        </div>
        <div></div>
      </div>
    </div>
    <a v-if="hasCover" class="m-0 p-0" :to="path">
      <img width="200" height="134" :src="coverSrc" />
    </a>
  </div>
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
    },
    coverSrc: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  computed: {
    hasCover() {
      return this.coverSrc !== ''
    },
    contexntClass() {
      const arr = ['block','min-w-0', 'w-full'];

      if(this.hasCover) {
        arr.push('mr-5');
      }

      return arr.join(' ');
    }
  }
}
</script>

<style scoped>
.mr20 {
  margin-right: 20px;
}
</style>

