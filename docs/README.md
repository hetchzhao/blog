<template>
    <ol>
        <li v-for="(item, index) in list" :key="index" @click="go(item)">
            <!--匹配当前文章所属栏目-->
            <span class="tit">{{ item.title }}</span>
            <span class="date">{{ item.frontmatter.updateTime }}</span>
            <div class="intro" v-if="item.excerpt" v-html="item.excerpt"></div>
        </li>
    </ol>
</template>

<script>
export default {
  computed: {
    list () {
      //只显示内容页，不显示栏目首页
      let res = this.$site.pages.filter(item => item.regularPath.indexOf(".html") !== -1) 
        .sort((a, b) => {
          const av = a.frontmatter.updateTime ? new Date(a.frontmatter.updateTime).valueOf() : 0
          const bv = b.frontmatter.updateTime ? new Date(b.frontmatter.updateTime).valueOf() : 0
          return bv - av //模糊比较，倒序排列，此处未对非预期日期格式作兼容处理
        })
        .filter((item, index) => index < 15) //显示最新15条
        .map(item => {
          item.dir = '/' + item.path.split('/')[1] + '/'
          return item
        });

      return res
    },
    //栏目数组
    nav () {
      const n = this.$site.themeConfig.sidebar
      let res = {}
      for(let key in n) {
        res[key] = n[key][0].title
      }

      return res
    }
  },
  methods: {
    go(item) {
      location.href = item.path
    }
  }
}
</script>