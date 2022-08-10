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
    }
  }
}