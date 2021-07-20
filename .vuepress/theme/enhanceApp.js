import Page from './components/Page'
import Header from './components/Header'
import Main from './components/Main'


export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.component('Page', Page)
  Vue.component('Header', Header)
  Vue.component('Main', Main)
}