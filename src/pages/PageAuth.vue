<template>
  <section class="section-auth">
    <b-loading :is-full-page="true" v-model="is_loading" :can-cancel="false"></b-loading>
    <div class="a-auth">
      <AuthLogin
        v-show="is_login_auth"
        @register="is_login_auth = false"
        @update_is_loading="update_is_loading($event)">
      </AuthLogin>
      <AuthRegister
        v-show="!is_login_auth"
        @login="is_login_auth = true"
        @update_is_loading="update_is_loading($event)">
      </AuthRegister>
    </div>
  </section>
</template>

<script>
  import AuthLogin from '@/components/auth/AuthLogin.vue'
  import AuthRegister from '@/components/auth/AuthRegister.vue'
  
  export default {
    name: 'PageAuth',
    components: {
      AuthLogin, AuthRegister
    },
    data() {
      return {
        is_login_auth: true,
        is_loading: false
      }
    },
    methods: {
      update_is_loading(bool) {
        this.is_loading = bool
      }
    }
  }
</script>

<style>
  .section-auth {
    padding: 5%;
    padding-inline: 25%;
  }
  
  .a-auth {
    padding: 10%;
    /* height: 500%; */
    /* border: 1px solid #f5f5f5; */
    background-color: #f5f5f5;
  }
  
  .auth-title {
    text-align: center;
    font-size: 30px;
  }
  
  .auth-btn {
    width: 100%;
  }
</style>
