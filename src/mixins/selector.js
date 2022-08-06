import timestamp from '@/mixins/timestamp.js'

const threads = () => require('@/data/thread/threads.json')

export default {
  mixins: [timestamp],
  methods: {
    find_text_with_value(list, value) {
      for (var index in list) {
        var tag = list[index]
        if (tag.value === value) {
          return tag.text
        }
      }
      return null
    },
    
    get_selected_threads(selector) {
      // const _discussions = discussions()
      // let filter = selector.filter
      // let sort = selector.sort
      
      // let filtered = _discussions
      //   .filter(d => d.tags.type === filter.type || filter.type === 'all') // 类型
      //   .filter(d => d.tags.version === filter.version || filter.version === 'all') // 版本
      // let filtered_and_sorted = this.sort_discussions(filtered, sort) // 排序
      // return filtered_and_sorted
      
      // 交给后端
      console.log(selector)
      return threads()
    },
    
    sort_threads(filtered, sort) {
      // 按时间（新->旧）
      if (sort === 'time') {
        return filtered.sort((a, b) => this.check_string(b.timestamp) - this.check_string(a.timestamp))
      }
      
      // 按时间（旧->新）
      if (sort === 'time-reversed') {
        return filtered.sort((a, b) => this.check_string(a.timestamp) - this.check_string(b.timestamp))
      }
      
      // 按顶的次数
      if (sort === 'like') {
        return filtered.sort((a, b) => b.evaluation.like - a.evaluation.like)
      }
      
      // 按踩的次数
      if (sort === 'dislike') {
        return filtered.sort((a, b) => b.evaluation.dislike - a.evaluation.dislike)
      }
      
      return []
    }
  }
}