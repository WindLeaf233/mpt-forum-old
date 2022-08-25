export default {
  methods: {
    msg(type, message) {
      this.$buefy.snackbar.open({
        message,
        type,
        position: 'is-top'
      })
    }
  }
}