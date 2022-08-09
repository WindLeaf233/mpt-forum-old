import axios from 'axios'
import utils from '@/mixins/utils.js'

export default {
  mixins: [utils],
  methods: {
    catch_error(error) {
      this.msg('is-danger', `发生了错误：${error}，请报告管理员！`)
    },
    
    async get(api_route, todo) {
      let api = `${process.env.VUE_APP_API}${api_route}`
      await axios.get(api)
        .then((response) => {
          console.log(`GET: ${api}`, response.data)
          todo(response.data)
        }).catch((error) => { this.catch_error(error) })
    },
    
    async post(api_route, _data, todo) {
      let api = `${process.env.VUE_APP_API}${api_route}`
      await axios.post(api, _data)
        .then((response) => {
          console.log(`POST: ${api}`, response.data)
          todo(response.data)
        }).catch((error) => { this.catch_error(error) })
    }
  }
}