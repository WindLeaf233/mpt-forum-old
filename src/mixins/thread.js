const threads = require('@/data/thread/threads.json')
const threads_content = () => require('@/data/thread/threads_content.json')

export default {
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
    
    get_thread_with_id(id) {
      for (var index in threads) {
        let d = threads[index]
        if (d.id === id) {
          return d
        }
      }
      return null
    },
    
    get_thread_content_with_id(id) {
      const _threads_content = threads_content()
      for (var index in _threads_content) {
        let content = _threads_content[index]
        if (content.id === id) {
          return content.content
        }
      }
      return null
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