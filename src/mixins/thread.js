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

    thumbs_up(id) {
      let instance = this.set_loading(null)
      this.post(`/thread/post_evaluation`, { thread_id: id, user_id: this.$store.state.account.id, type: 'like' }, (data) => {
        if (data.code == 200) {
          this.$buefy.snackbar.open({
            message: `顶帖子（ID：${id}）成功!`,
            type: 'is-success',
            position: 'is-top'
          })
        } else {
          this.$buefy.snackbar.open({
            message: data.message,
            type: 'is-danger',
            position: 'is-top'
          })
        }
        this.set_loading(instance)
      })
    },

    thumbs_down(id) {
      let instance = this.set_loading(null)
      this.post(`/thread/post_evaluation`, { thread_id: id, user_id: this.$store.state.account.id, type: 'like' }, (data) => {
        if (data.code == 200) {
          this.$buefy.snackbar.open({
            message: `踩帖子（ID：${id}）成功!`,
            type: 'is-success',
            position: 'is-top'
          })
        } else {
          this.$buefy.snackbar.open({
            message: data.message,
            type: 'is-danger',
            position: 'is-top'
          })
        }
        this.set_loading(instance)
      })
    }
  }
}