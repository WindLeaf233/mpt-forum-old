export default {
  methods: {
    msg(type, message) {
      this.$buefy.snackbar.open({
        message,
        type,
        position: 'is-top'
      })
    },

    debug(...message) {
      if (process.env.NODE_ENV === 'development') {
        console.log(...message)
      }
    }
  }
}