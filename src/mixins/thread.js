import request from '@/mixins/request.js'

export default {
  mixins: [request],
  methods: {
    get_node(target, node_name) {
      if (target.nodeName.toLowerCase() === node_name) {
        return target
      } else {
        return this.get_node(target.parentNode, node_name)
      }
    },
    
    view_thread_detail(e) {
      let target = e.target
      var thread = this.get_node(target, 'article')
      var id = thread.getAttribute('id')
      let thread_id = id.replace('thread', '')
      this.$router.push(`/thread/${thread_id}`)
    },

    set_loading(instance) {
      if (instance !== null) {
        instance.close()
      } else {
        return this.$buefy.loading.open({
          container: null
        })
      }
    },

    check_login() {
      let is_logined = this.$store.state.account.is_logined
      if (!is_logined) {
        this.msg('is-danger', '你还没登录！')
      }
      return is_logined
    },

    thumbs_up(id) {
      if (this.check_login()) {
        let instance = this.set_loading(null)
        this.post(`/thread/post_evaluation`, { thread_id: id, user_id: this.$store.state.account.id, type: 'like' }, (data) => {
          if (data.code == 200) {
            this.msg('is-success', '顶帖子（ID：${id}）成功!')
          } else {
            this.msg('is-danger', data.message)
          }
          this.set_loading(instance)
        })
      }
    },

    thumbs_down(id) {
      if (this.check_login()) {
        let instance = this.set_loading(null)
        this.post(`/thread/post_evaluation`, { thread_id: id, user_id: this.$store.state.account.id, type: 'like' }, (data) => {
          if (data.code == 200) {
            this.msg('is-success', '踩帖子（ID：${id}）成功!')
          } else {
            this.msg('is-danger', data.message)
          }
          this.set_loading(instance)
        })
      }
    }
  }
}