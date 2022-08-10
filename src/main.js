// Vue v2
import Vue from 'vue'
import App from '@/App.vue'

// 组件库
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

// 设备检测器
import device from 'vue-device-detector'

// 路由
import VueRouter from 'vue-router'
import router from '@/router'

// 数据缓存
import store from '@/store'

// 工具 mixin
import utils from '@/mixins/utils'

Vue.config.productionTip = false
Vue.use(Buefy, { defaultIconPack: 'fa' })
Vue.use(device)
Vue.use(VueRouter)
Vue.mixin(utils)

new Vue({
  render: h => h(App),
  router: router,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  store
}).$mount('#app')
