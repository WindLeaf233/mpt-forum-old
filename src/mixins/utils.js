export default {
  methods: {
    msg(type, message) {
      this.$buefy.snackbar.open({
        message,
        type,
        position: 'is-top'
      })
    },

    clear_data() {
      localStorage.clear()
      this.$store.commit('account', {
        is_logined: false,
        is_admin: false,
        username: '',
        id: '',
        email: '',
        message_amount_num: 0,
        evaluations: {
          like: [], dislike: []
        }
      })
      this.$store.commit('token', '')
    }
  }
}