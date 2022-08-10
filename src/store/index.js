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
        id: '',
        message_amount_num: 0
      },
      threads: [],
      thread_contents: [],
      debug_mode: false
    }
  },
  mutations: {
    account(state, account) {
      state.account = account
    },
    
    actived(state, actived) {
      state.actived = actived
    },

    threads(state, threads) {
      state.threads = threads
    },

    debug_mode(state, debug_mode) {
      state.debug_mode = debug_mode
    }
  }
})
