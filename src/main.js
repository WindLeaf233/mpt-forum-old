import Vue from 'vue'
import App from '@/App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import device from 'vue-device-detector'
import VueRouter from 'vue-router'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false
Vue.use(Buefy, { defaultIconPack: 'fa' })
Vue.use(device)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: router,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  store
}).$mount('#app')
