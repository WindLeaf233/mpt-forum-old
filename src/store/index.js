import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      actived: '/',
      account: {
        is_logined: false,
        is_admin: false,
        username: '',
        email: '',
        message_amount_num: 0
      }
    }
  },
  mutations: {
    account(state, account) {
      state.account = account
    },
    
    actived(state, actived) {
      state.actived = actived
    }
  }
})
