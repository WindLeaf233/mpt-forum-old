<template>
  <div>
    <h1 class="auth-title">注册</h1>
    <section>
      <b-field label="用户名" label-position="inside">
        <b-input v-model="username" maxlength="30"></b-input>
      </b-field>
      <b-field label="邮箱" label-position="inside">
        <b-input type="email" v-model="email"></b-input>
      </b-field>
      <b-field label="密码" label-position="inside">
        <b-input type="password" v-model="password" password-reveal>></b-input>
      </b-field>
      <b-field label="确认密码" label-position="inside">
        <b-input type="password" v-model="password_confirm" password-reveal>></b-input>
      </b-field>
      <a @click="to_login()">已经有了账号？去登录！</a>
      <b-button class="auth-btn is-success" @click="register()">
        注册
      </b-button>
    </section>
  </div>
</template>

<script>
  import account from '@/mixins/account.js'
  import utils from '@/mixins/utils.js'
  
  export default {
    name: 'AuthRegister',
    mixins: [utils, account],
    data() {
      return {
        username: '',
        password: '',
        password_confirm: '',
        email: ''
      }
    },
    methods: {
      to_login() {
        this.$emit('login')
      },
      
      register() {
        this.user_register(this.username, this.password, this.password_confirm, this.email)
      }
    }
  }
</script>
