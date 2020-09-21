import Vue from 'vue'
import miniToastr from './lib/minitoastr'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from './App.vue'

Vue.use(VueMaterial)

Vue.config.productionTip = false

Vue.prototype.$miniToastr = miniToastr

new Vue({
  render: h => h(App),
}).$mount('#app')
