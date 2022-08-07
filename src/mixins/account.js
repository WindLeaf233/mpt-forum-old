import utils from '@/mixins/utils.js'
import request from '@/mixins/request.js'

export default {
  mixins: [utils, request],
  computed: {
    message_amount() {
      if (this.message_amount_num === 0) {
        return ''
      } else {
        return `(${this.message_amount_num})`
      }
    }
  },
  methods: {
    user_login(account, password) {
      if (password.length < 8) {
        this.msg('is-warning', '输入的密码不得小于 8 位！')
      } else {
        this.$emit('update_is_loading', true)
        this.post('/auth/login',
          { account, password },
          (data) => {
            if (data.code === 200) {
              let account = {
                is_logined: true,
                is_admin: data.data.is_admin,
                username: data.data.username,
                user_id: data.data.user_id,
                email: data.data.email,
                message_amount_num: 0
              }
              // 保存到 localStorage，实现保持登录
              localStorage.setItem('account', JSON.stringify(account))
              this.$store.commit('account', account)
              this.msg('is-success', `欢迎回来，${data.data.username}！`)
              this.$router.push('/threads')
            } else {
              this.msg('is-danger', data.message)
            }
            this.$emit('update_is_loading', false)
         })
      }
    },
    
    user_register(username, password, password_confirm, email) {
      let email_pattern = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
      let username_pattern = /^[a-zA-z0-9_]{4,}$/
      
      if (password !== password_confirm) {
        this.msg('is-warning', '两次输入的密码不匹配！')
      } else if (password.length < 8) {
        this.msg('is-warning', '输入的密码不得小于 8 位！')
      } else if (username.length > 50) {
        this.msg('is-warning', '你要这么长的用户名干啥？')
      } else if (!email_pattern.test(email) || !username_pattern.test(username)) {
        this.msg('is-warning', '邮箱或用户名格式不正确！')
      } else {
        this.$emit('update_is_loading', true)
        this.post('/auth/register',
          { username, password, email },
          (data) => {
            if (data.code === 200) {
              this.$store.commit('account', {
                is_logined: true,
                is_admin: data.data.is_admin,
                username: data.data.username,
                user_id: data.data.user_id,
                email: data.data.email,
                message_amount_num: 0
              })
              this.msg('is-success', '注册成功！')
              this.$router.push('/threads')
            } else {
              this.msg('is-danger', data.message)
            }
            this.$emit('update_is_loading', false)
          })
      }
    },
    
    user_logout() {
      // 清除 localStorage
      localStorage.clear()
      this.$store.commit('account', {
        is_logined: false,
        is_admin: false,
        username: '',
        user_id: '',
        email: '',
        message_amount_num: 0
      })
      this.msg('is-success', '退出登录成功！')
    }
  }
}