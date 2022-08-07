<template>
  <div>
    <b-loading :is-full-page="true" v-model="is_loading" :can-cancel="false"></b-loading>
    <DetailBreadcrumb ref="breadcrumb"></DetailBreadcrumb>
    <DetailInfo ref="info"></DetailInfo>
    <DetailContent ref="content"></DetailContent>
    <DetailEvaluation ref="evaluation"></DetailEvaluation>
  </div>
</template>

<script>
  import DetailBreadcrumb from '@/components/thread/detail/DetailBreadcrumb.vue'
  import DetailInfo from '@/components/thread/detail/DetailInfo.vue'
  import DetailContent from '@/components/thread/detail/DetailContent.vue'
  import DetailEvaluation from '@/components/thread/detail/DetailEvaluation.vue'
  import request from '@/mixins/request.js'
  
  export default {
    name: 'PageThreadDetail',
    components: {
      DetailBreadcrumb, DetailInfo, DetailContent, DetailEvaluation
    },
    mixins: [request],
    props: ['thread_id', 'title', 'evaluation'],
    data() {
      return {
        is_loading: true
      }
    },
    beforeMount() {
      this.get(`/thread/get/${this.thread_id}`, (data) => {
        let thread = data.data.thread
        let refs = this.$refs
        refs.breadcrumb.update(thread.title, this.thread_id)
        refs.info.update(thread)
        refs.evaluation.update(this.thread_id, thread.evaluation.like, thread.evaluation.dislike)
        
        this.get(`/thread/get_content/${this.thread_id}`, (content_data) => {
          refs.content.update(content_data.data.content)
        })
        
        this.is_loading = false
      })
    }
  }
</script>

<style>
  .section-detail {
    padding-top: 2%;
    padding-inline: 5%;
  }
</style>
