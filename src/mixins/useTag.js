export default {
  methods: {
    judge_tag_type(value) {
      if (value === 'plugin') {
        return 'is-success'
      } else if (value.search('mod') !== -1) {
        return 'is-primary'
      } else {
        return 'is-info'
      }
    }
  }
}