import request from '@/mixins/request.js'

export default {
  mixins: [request],
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
              console.log(`login data:`, data.data)
              this.get(`/user/get_evaluations/${data.data.id}`, (eva_data) => {
                let account = {
                  is_logined: true,
                  is_admin: data.data.is_admin,
                  username: data.data.username,
                  id: data.data.id,
                  email: data.data.email,
                  message_amount_num: 0,
                  evaluations: eva_data.data.evaluations
                }
                // 保存到 localStorage，实现保持登录
                localStorage.setItem('account', JSON.stringify(account))
                this.$store.commit('account', account)
                this.$store.commit('token', data.data.token)
                this.msg('is-success', `欢迎回来，${data.data.username}！`)
                console.log(`user_id: ${data.data.id}`)
                this.$router.push('/threads')
              })
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
                id: data.data.id,
                email: data.data.email,
                message_amount_num: 0
              })
              this.$store.commit('token', data.data.token)
              this.msg('is-success', '注册成功！')
              console.log(`user_id: ${data.data.id}`)
              this.$router.push('/threads')
            } else {
              this.msg('is-danger', data.message)
            }
            this.$emit('update_is_loading', false)
          })
      }
    },
    
    user_logout() {
      this.clear_data()
      this.msg('is-success', '退出登录成功！')
      this.$router.push('/threads')
    }
  }
}