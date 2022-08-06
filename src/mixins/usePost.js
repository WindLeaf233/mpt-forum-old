import utils from '@/mixins/utils.js'

const settings = require('@/data/settings.json')

export default {
  mixins: [utils],
  methods: {
    check_submit(data) {
      // 检查登录状态
      let is_logined = this.$store.state.account.is_logined
      if (!is_logined) {
        this.msg('is-danger', '你还没登录呢！')
        return false
      }
      
      // 检查标题
      let title = data.title
      let max = settings.title_max_length
      if (title.length > max) {
        this.msg('is-warning', `标题的字数不能超过 ${max} 字！`)
        return false
      } else if (title === '' || title === undefined || title === null) {
        this.msg('is-danger', '请输入标题！')
        return false
      }
      
      // 检查选择器
      let selector = data.selector
      if (selector.type === 'all' || selector.version === 'all') {
        this.msg('is-danger', '请选择类型和版本！')
        return false
      }
      
      // 检查内容
      let content = data.content.trim()
      let template = settings.template.trim()
      if (content.replace(template, '').trim() === '') {
        this.msg('is-danger', '请输入相关的需求内容！')
        return false
      }
      
      // 检查注意事项
      let notices_checked = data.notices_checked
      if (!notices_checked) {
        this.msg('is-warning', '请勾选注意事项！')
        return false
      }
      
      return true
    }
  }
}