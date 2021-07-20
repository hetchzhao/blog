const path = require('path')

module.exports = {
  alias: {
    '@': path.resolve(__dirname, '../.vuepress/theme')
  },
  base: '/blog/',
  postcss: {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer')
    ]
  },
}