import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import router from './router.js'
import titleMixin from './titleMixin'

Vue.mixin(titleMixin)
Vue.use(VueMaterial);



Vue.config.productionTip = false

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
