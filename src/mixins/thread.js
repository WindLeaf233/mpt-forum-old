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
    
    thumbs_up(id) {
      this.$buefy.snackbar.open({
        message: `顶 ${this.get_thread_with_id(id).title} 成功!`,
        type: 'is-success',
        position: 'is-top'
      })
    },
    
    thumbs_down(id) {
      this.$buefy.snackbar.open({
        message: `踩 ${this.get_thread_with_id(id).title} 成功!`,
        type: 'is-danger',
        position: 'is-top'
      })
    }
  }
}