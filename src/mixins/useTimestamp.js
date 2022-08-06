export default {
  methods: {
    get_date_with_timestamp(ts) {
      // 判断是否是字符串
      ts = this.check_string(ts)
      
      // 判断值是否小于 13 位
      var length = String(ts).length
      if (length < 13) {
        var b = 10 ** (13 - length)
        ts = ts * b
      }

      let date = new Date(ts)
      let y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? '0' + MM : MM
      let d = date.getDate()
      d = d < 10 ? '0' + d : d
      let h = date.getHours()
      h = h < 10 ? '0' + h : h
      let m = date.getMinutes()
      m = m < 10 ? '0' + m : m
      let s = date.getSeconds()
      s = s < 10 ? '0' + s : s
      return `${y}-${MM}-${d} ${h}:${m}:${s}`
    },
    
    check_string(ts) {
      if (typeof ts === 'string') {
        ts = Number(ts)
      }
      return ts
    }
  }
}