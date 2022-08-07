<template>
  <div id="app" class="container">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  import PageThreadDetail from '@/pages/PageThreadDetail.vue'
  import router from '@/router'
  import request from '@/mixins/request.js'
  
  export default {
    name: 'App',
    mixins: [request],
    components: {
      NavBar
    },
    watch: {
      $route(to, from) {
        let to_path = to.path
        let from_path = from.path
        this.$store.commit('actived', to_path)
        console.log(`route: ${from_path} -> ${to_path}`)
      }
    },
    beforeMount() {
      let account = JSON.parse(localStorage.getItem('account'))
      if (account !== null) {
        // 不为 null 说明 localStorage 存储着登录信息
        this.$store.commit('account', account)
      }
    },
    mounted() {
      this.get('/thread/list', (data) => {
        let threads = data.data.threads
        threads.forEach(t => {
          router.addRoute({
            path: `/thread/${t.id}`,
            component: PageThreadDetail,
            props: {
              thread_id: t.id,
              title: t.title,
              evaluation: t.tevaluation
            }
          })
        })
      })
    }
  }
</script>

<style>
  .bg-gradient {
    width: 100%;
    height: 100%;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 600% 600%;
    animation: bg-gradient 5s ease infinite;
  }
  
  @keyframes bg-gradient {
    0% {
      background-position: 0% 50%;
    }
    
    50% {
      background-position: 100% 50%;
    }
    
    100% {
      background-position: 0% 50%;
    }
  }
</style>
