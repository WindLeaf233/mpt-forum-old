import axios from 'axios'
import utils from '@/mixins/utils.js'

const settings = require('@/data/settings.json')

export default {
  mixins: [utils],
  methods: {
    catch_error(error) {
      this.msg('is-danger', `发生了错误：${error}，请报告管理员！`)
    },
    
    async get(api_route, todo) {
      await axios.get(`${settings.api}${api_route}`)
        .then((response) => {
          todo(response.data)
        }).catch((error) => { this.catch_error(error) })
    },
    
    async post(api_route, _data, todo) {
      await axios.post(`${settings.api}${api_route}`, _data)
        .then((response) => {
          todo(response.data)
        }).catch((error) => { this.catch_error(error) })
    }
  }
}