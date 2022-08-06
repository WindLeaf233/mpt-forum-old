const discussions = require('@/data/discussion/discussions.json')
const discussions_content = () => require('@/data/discussion/discussions_content.json')

export default {
  methods: {
    get_node(target, node_name) {
      if (target.nodeName.toLowerCase() === node_name) {
        return target
      } else {
        return this.get_node(target.parentNode, node_name)
      }
    },
    
    view_discussion_detail(e) {
      let target = e.target
      var article = this.get_node(target, 'article')
      var id = article.getAttribute("id")
      let article_id = id.replace('article', '')
      this.$router.push(`/thread/${article_id}`)
    },
    
    get_article_with_id(id) {
      for (var index in discussions) {
        let d = discussions[index]
        if (d.id === id) {
          return d
        }
      }
      return null
    },
    
    get_article_content_with_id(id) {
      const _discussions_content = discussions_content()
      for (var index in _discussions_content) {
        let content = _discussions_content[index]
        if (content.id === id) {
          return content.content
        }
      }
      return null
    },
    
    thumbs_up(id) {
      this.$buefy.snackbar.open({
        message: `顶 ${this.get_article_with_id(id).title} 成功!`,
        type: 'is-success',
        position: 'is-top'
      })
    },
    
    thumbs_down(id) {
      this.$buefy.snackbar.open({
        message: `踩 ${this.get_article_with_id(id).title} 成功!`,
        type: 'is-danger',
        position: 'is-top'
      })
    }
  }
}