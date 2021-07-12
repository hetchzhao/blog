import Vuetify from './node_modules/vuetify/dist/vuetify'
import './node_modules/vuetify/dist/vuetify.css'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {

  Vue.use(Vuetify)
  options.vuetify= new Vuetify({})
}