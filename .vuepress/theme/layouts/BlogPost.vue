<template>
  <div>
    <article>
      <section class="break-words word-break">
        <div class="flex justify-center">
          <div class="w-full max-w-screen-sm min-w-0 my-0 mx-16">
            <h1 class="lg:text-5xl lg:mt-8 -mb-1">{{ title }}</h1>
          </div>
        </div>
        <div v-if="hasCover" class="w-full">
          <figure class="w-full mt-14 z-auto">
            <div class="transition-transform cursor-zoom-in relative w-full">
              <img class="h-auto max-w-full w-full" :src="coverSrc" />
            </div>
          </figure>
        </div>
        <div class="flex justify-center">
          <div class="w-full max-w-screen-sm min-w-0 my-0 mx-16">
            <p class="font-family lg:mt-8 text-xl not-italic break-words">
              <em class="italic">{{ summary }}</em>
            </p>
          </div>
        </div>
      </section>
      <div class="subfield">
        <span class="subfield__dot"></span>
        <span class="subfield__dot"></span>
        <span class="subfield__dot"></span>
      </div>
      <section class="break-words">
        <div class="flex justify-center">
          <div class="w-full max-w-screen-sm min-w-0 my-0 mx-16">
            <Content />
          </div>
        </div>
      </section>
      <div class="subfield">
        <span class="subfield__dot"></span>
        <span class="subfield__dot"></span>
        <span class="subfield__dot"></span>
      </div>
    </article>
    <div class="flex flex-col justify-center mt-10">
      <div class="flex justify-center">
        <div class="my-0 mx-16 max-w-screen-sm min-w-0 w-full">
          <div class="block mt-6">
            <ul class="m-0 p-0">
              <li class="inline-block list-none mb-2 mr-2">
                <a class="text-sm py-2 px-3 text-gray-500 bg-gray-100" href="#">React</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  computed: {
    coverSrc() {
      const { frontmatter } = this.$page;

      return frontmatter.coverSrc ? frontmatter.coverSrc : ''
    },
    title() {
      const { frontmatter } = this.$page;

      return frontmatter.title ? frontmatter.title : ''
    },
    summary() {
      const { frontmatter } = this.$page;

      return frontmatter.summary ? frontmatter.summary : ''
    },
    hasCover() {
      return this.coverSrc !== '';
    },
  }
}
</script>

<style scoped>
.word-break {
  word-break: break-word;
}
.font-family {
  font-family: charter, Georgia, Cambria, "Times New Roman", Times, serif;
}
.cursor-zoom-in {
  cursor: zoom-in;
}

.subfield {
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 14px;
  padding-bottom: 10px;
  padding-top: 24px;
}
.subfield > .subfield__dot {
  width: 3px;
  height: 3px;
  background-color: rgb(8, 8, 8);
  border-radius: 50%;
  display: inline-block;
  margin-right: 20px;
}
.subfield > .subfield__dot:last-child {
  margin-right: 0;
}
</style>