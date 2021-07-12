const path = require('path')



module.exports = (themeConfig, ctx) => {
  return {
    name: 'vuepress-theme-hetch',
    plugins: [],
    enhanceAppFiles: [
      path.resolve(__dirname, 'enhanceApp.js'),
    ],
    extendPageData($page) {
      const ensureBothSlash = str => str.replace(/^\/?(.*)\/?$/, '/$1/')


      // console.log($page.path);
    },
    async ready () {

      console.log('isProd', ctx.isProd);

      await ctx.addPage({
        permalink: '/',
        frontmatter: {
          layout: 'Detail',
        }
      })
    }
  }
}