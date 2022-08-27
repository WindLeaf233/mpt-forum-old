import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      actived: '/',
      token: '',
      account: {
        is_logined: false,
        is_admin: false,
        username: '',
        email: '',
        id: '',
        message_amount_num: 0,
        evaluations: {
          like: [], dislike: []
        }
      },
      threads: [],
      thread_contents: [],
      selector: {
        type: 'all',
        version: 'all',
        sort: 'time'
      },
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

    selector(state, selector) {
      state.selector = selector
    },

    debug_mode(state, debug_mode) {
      state.debug_mode = debug_mode
    },

    token(state, token) {
      state.token = token
    }
  }
})
