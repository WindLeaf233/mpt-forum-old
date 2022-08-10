import PageThreadDetail from '@/pages/PageThreadDetail.vue'
import utils from '@/mixins/utils.js'
import request from '@/mixins/request.js'
import router from '@/router'

const settings = require('@/data/settings.json')

export default {
  mixins: [utils, request],
  methods: {
    check_submit(data, that) {
      that.update_is_loading(true)
      var flag = true;

      // 检查登录状态
      let is_logined = this.$store.state.account.is_logined
      if (!is_logined) {
        this.msg('is-danger', '你还没登录呢！')
        flag = false
        that.update_is_loading(false)
      }
      
      // 检查标题
      let title = data.title
      let max = settings.title_max_length
      if (title.length > max) {
        this.msg('is-warning', `标题的字数不能超过 ${max} 字！`)
        flag = false
        that.update_is_loading(false)
      } else if (title === '' || title === undefined || title === null) {
        this.msg('is-danger', '请输入标题！')
        flag = false
        that.update_is_loading(false)
      }
      
      // 检查选择器
      let selector = data.selector
      if (selector.type === 'all' || selector.version === 'all') {
        this.msg('is-danger', '请选择类型和版本！')
        flag = false
        that.update_is_loading(false)
      }
      
      // 检查内容
      let content = data.content.trim()
      let template = settings.template.trim()
      if (content.replace(template, '').trim() === '') {
        this.msg('is-danger', '请输入相关的需求内容！')
        flag = false
        that.update_is_loading(false)
      }
      
      // 检查注意事项
      let notices_checked = data.notices_checked
      if (!notices_checked) {
        this.msg('is-warning', '请勾选注意事项！')
        flag = false
        that.update_is_loading(false)
      }
      
      // 检查简介
      let description = data.description
      if (description === '') {
        let tcontent = content.replace(/[\r\n]/g, '')
        if (tcontent.length >= 50) {
          description = tcontent.substring(0, 49)
        } else {
          description = tcontent
        }
      }
      
      if (flag) {
        let post_data = {
          tags: selector,
          title,
          description,
          userinfo: {
            username: this.$store.state.account.username,
            id: this.$store.state.account.id
          },
          content,
          timestamp: Date.now()
        }
        console.log(`post data:`, post_data)
        this.post('/thread/post', post_data, (data) => {
          if (data.code === 200) {
            this.msg('is-success', '发帖成功！')
            let t = data.data.thread
            router.addRoute({
              path: `/thread/${t.id}`,
              component: PageThreadDetail,
              props: {
                thread_id: t.id,
                title: t.title,
                evaluation: t.tevaluation
              }
            })
            this.$router.push(`/thread/${t.id}`)
            that.update_is_loading(false)
          } else {
            this.msg('is-danger', data.message)
            that.update_is_loading(false)
          }
        })
      }
      
    }
  }
}