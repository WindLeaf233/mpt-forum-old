<template>
  <div class="evaluation">
    <b-button
    class="evaluation-thumbs"
    outlined
    type="is-success"
    icon-left="thumbs-up"
    @click="thumbs_up(thread_id)">顶（{{ like }}）
    </b-button>
    
    <b-button
    class="evaluation-thumbs"
    outlined
    type="is-danger"
    icon-left="thumbs-down"
    @click="thumbs_down(thread_id)">踩（{{ dislike }}）
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
        like: '',
        dislike: ''
      }
    },
    methods: {
      update(thread_id, like, dislike) {
        this.thread_id = thread_id
        this.like = like
        this.dislike = dislike
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
