<template>
  <div>
    <b-navbar shadow spaced>
      <template #brand>
        <b-navbar-item
          tag="div"
          :to="{ path: '/' }">
          <img :src="require('@/assets/MPT-logo.png')" alt="">
        </b-navbar-item>
      </template>
      
      <template #start>
        <b-navbar-item tag="router-link" to="/" :class="actived === '/' ? 'active' : ''">主页</b-navbar-item>
        <b-navbar-item tag="router-link" to="/threads"
          :class="(actived === '/threads'  || actived.search('/thread/') !== -1) ? 'active' : ''">
          论坛
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/about" :class="actived === '/about' ? 'active' : ''">关于</b-navbar-item>
        <b-navbar-item>
          <b-input
            type="text"
            icon-right="magnify"
            v-model="search_word"
            placeholder="搜点啥捏...">
          </b-input>
        </b-navbar-item>
      </template>
      
      <template #end>
        <b-navbar-item v-if="$store.state.account.is_logined">
          <strong>{{ $store.state.account.username }}</strong>
          <b-navbar-dropdown>
            <b-navbar-item href="/account/profile">个人中心</b-navbar-item>
            <b-navbar-item href="/account/settings">设置</b-navbar-item>
            <b-navbar-item @click="user_logout()">退出登录</b-navbar-item>
          </b-navbar-dropdown>
        </b-navbar-item>
        <b-navbar-item v-if="$store.state.account.is_logined">
          <b-button icon-left="plus" tag="router-link" to="/post">发帖</b-button>
        </b-navbar-item>
        <b-navbar-item href="/inbox" v-if="$store.state.account.is_logined">
          <b-button icon-left="inbox" :type="get_inbox_btn_type()">消息 {{ $store.state.account.message_amount }}</b-button>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a @click="login()"
              class="button is-light" v-if="!$store.state.account.is_logined">登录</a>
            <a href="/console" class="button is-info bg-gradient" v-if="$store.state.account.is_logined && $store.state.account.is_admin">
              <strong>控制台</strong>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
  import account from '@/mixins/account.js'
  
  export default {
    name: 'NavBar',
    mixins: [account],
    data() {
      return {
        search_word: ''
      }
    },
    computed: {
      actived() {
        return this.$store.state.actived
      }
    },
    methods: {
      get_inbox_btn_type() {
        if (this.message_amount_num === 0) {
          return 'is-light'
        } else {
          return 'is-warning'
        }
      },
      
      login() {
        if (this.actived !== '/auth') {
          this.$router.push('/auth')
        }
      }
    }
  }
</script>

<style scoped>
  .active {
    border-bottom: 3px solid rgb(177, 177, 177);
  }
</style>
