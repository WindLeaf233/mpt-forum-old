import axios from 'axios'

export default {
  methods: {
    catch_error(error) {
      this.msg('is-danger', `发生了错误：${error}，请报告管理员！`)
    },

    async _request(method, api_route, _data, todo) {
      let api = `${process.env.VUE_APP_API}${api_route}`

      let jump_to_login = (msg) => {
        this.$router.push('/auth')
        this.msg('is-danger', msg)
        this.clear_data()
      }

      let token = this.$store.state.token
      // if (token === '') {
      //   jump_to_login('你还没有登录！')
      //   return
      // }

      await axios.request({
        method,
        url: api,
        data: _data,
        headers: {
          token
        }
      }).then((response) => {
        let data = response.data
        console.log(`${method}: ${api}`, data)
        if ([203, 204, 205, 206].indexOf(data.code) !== -1) {
          // invalid token / token expired
          switch (data.code) {
            case 203:
              jump_to_login('无法验证身份信息，请重新登录！')
              break
            case 204:
              jump_to_login('你的身份已过期，请重新登录！')
              break
            case 205:
            case 206:
              jump_to_login('在验证时出了内部错误！')
              break
            default:
              break
          }
        } else {
          todo(data)
        }
      }).catch((error) => this.catch_error(error))
    },
    
    async get(api_route, todo) {
      await this._request('GET', api_route, {}, todo)
    },
    
    async post(api_route, data, todo) {
      await this._request('POST', api_route, data, todo)
    }
  }
}