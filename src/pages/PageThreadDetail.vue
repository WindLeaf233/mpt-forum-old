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
    mounted() {
      let threads = this.$store.state.threads
      let find = threads.find((s) => s.id === this.thread_id)

      let refs = this.$refs
      refs.breadcrumb.update(find.title, find.id)
      refs.info.update(find)
      refs.evaluation.update(find.id, find.evaluation.like, find.evaluation.dislike)

      let contents = this.$store.state.thread_contents
      let find_content = contents.find((s) => s.id === find.id)
      let push_content = (c) => refs.content.update(c)

      if (find_content) {
        push_content(find_content.content)
      } else {
        this.get(`/thread/get_content/${find.id}`, (content_data) => {
          let data = content_data.data
          contents.push(data)
          push_content(data.content)
        })
      }

      this.is_loading = false
    }
  }
</script>

<style>
  .section-detail {
    padding-top: 2%;
    padding-inline: 5%;
  }
</style>
