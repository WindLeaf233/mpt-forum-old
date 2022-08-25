<template>
  <div class="evaluation">
    <b-button
    class="evaluation-thumbs"
    :outlined="!is_liked"
    type="is-success"
    icon-left="thumbs-up"
    @click="thumbs_up(thread_id, update_status)">顶（{{ like }}）
    </b-button>

    <b-button
    class="evaluation-thumbs"
    :outlined="!is_disliked"
    type="is-danger"
    icon-left="thumbs-down"
    @click="thumbs_down(thread_id, update_status)">踩（{{ dislike }}）
    </b-button>
  </div>
</template>

<script>
  import thread from '@/mixins/thread.js'
  
  export default {
    name: 'DetailEvaluation',
    mixins: [thread],
    data() {
      return {
        thread_id: '',
        like: 0,
        dislike: 0,
        is_liked: false,
        is_disliked: false
      }
    },
    methods: {
      contains(list, element) {
        return list.findIndex((e) => e === element) !== -1
      },

      update(thread_id, like, dislike) {
        this.thread_id = thread_id
        this.like = like
        this.dislike = dislike

        let evaluations = this.$store.state.account.evaluations
        console.log(evaluations, this.contains(evaluations.like, this.thread_id), this.contains(evaluations.dislike, this.thread_id))
        if (this.contains(evaluations.like, this.thread_id) || this.contains(evaluations.dislike, this.thread_id)) {
          this.is_evaluated = true
        }
      },

      update_status(type) {
        if (type === 'like') {
          this.like = this.like + 1
          this.is_liked = true
        } else {
          this.dislike = this.dislike + 1
          this.is_disliked = true
        }
      }
    }
  }
</script>

<style scoped>
  .evaluation {
    padding: 5%;
  }
  
  .evaluation-thumbs {
    margin-right: 1%;
  }
</style>