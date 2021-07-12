import Vuetify from 'vuetify/dist/vuetify'
import 'vuetify/dist/vuetify.css'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {

  Vue.use(Vuetify)
  options.vuetify= new Vuetify({})
}