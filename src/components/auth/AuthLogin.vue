<template>
  <div>
    <h1 class="auth-title">登录</h1>
    <section>
      <b-field label="用户名" label-position="inside">
        <b-input v-model="username"></b-input>
      </b-field>
      <b-field label="密码" label-position="inside">
        <b-input type="password" v-model="password"></b-input>
      </b-field>
      <a @click="to_register()">没有账号？去注册！</a>
      <b-button class="auth-btn is-success" @click="login()">
        登录
      </b-button>
    </section>
  </div>
</template>

<script>
  import account from '@/mixins/account.js'
  
  export default {
    name: 'AuthLogin',
    mixins: [account],
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      to_register() {
        this.$emit('register')
      },
      
      login() {
        this.user_login(this.username, this.password)
      }
    }
  }
</script>
