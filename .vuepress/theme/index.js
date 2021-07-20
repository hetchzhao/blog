const path = require('path')

const routeRules = [{
  match: (path) => path === '/',
  package: (page) => {
    page.frontmatter.layout = 'BlogIndex'
  }
},{
  match: (path) => /\/(.*\/)?.*\.html$/.test(path),
  package: (page) => {
    page.frontmatter.layout = 'BlogPost'
  }
}];

module.exports = (themeConfig, ctx) => {
  return {
    name: 'vuepress-theme-hetch',
    plugins: [
      require('./plugins/vuepress-medium-plugin.js'),
      [
        'vuepress-plugin-feed',
        {
          canonical_base: 'https://hetchzhao.github.io/blog',
        }
      ]
    ],
    enhanceAppFiles: [
      path.resolve(__dirname, 'enhanceApp.js'),
    ],
    extendPageData(page) {
      const { regularPath } = page;

      for(let i = 0; i < routeRules.length; i++) {
        if(routeRules[i].match(regularPath)) {
          routeRules[i].package(page)
          break;
        }
      }
    },
    
    async ready () {
      const homePage = ctx.pages.filter(page => page && page.regularPath === '/');

      if(homePage.length === 0) {
        await ctx.addPage({ permalink: '/' })
      }
    }
  }
}