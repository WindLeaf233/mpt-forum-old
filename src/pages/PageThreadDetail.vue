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

      // let that = this

      // if (find) {
      //   update(find)
      // } else {
      //   this.get(`/thread/get/${this.thread_id}`, (data) => {
      //     let thread = data.data.thread
      //     threads.push(thread)
      //     update(thread)
      //   })
      // }

      // function update(thread) {
      //   let refs = that.$refs
      //   refs.breadcrumb.update(thread.title, that.thread_id)
      //   refs.info.update(thread)
      //   refs.evaluation.update(that.thread_id, thread.evaluation.like, thread.evaluation.dislike)
      //
      //   let contents = that.$store.state.thread_contents
      //   let find = contents.find((s) => s.id === that.thread_id)
      //   let push_content = (c) => refs.content.update(c)
      //
      //   if (find) {
      //     push_content(find.content)
      //   } else {
      //     that.get(`/thread/get_content/${that.thread_id}`, (content_data) => {
      //       let data = content_data.data
      //       contents.push(data)
      //       push_content(data.content)
      //     })
      //   }
      //
      //   that.is_loading = false
      // }


      // this.get(`/thread/get/${this.thread_id}`, (data) => {
      //   let thread = data.data.thread
      //   let refs = this.$refs
      //   refs.breadcrumb.update(thread.title, this.thread_id)
      //   refs.info.update(thread)
      //   refs.evaluation.update(this.thread_id, thread.evaluation.like, thread.evaluation.dislike)
      //
      //   this.get(`/thread/get_content/${this.thread_id}`, (content_data) => {
      //     refs.content.update(content_data.data.content)
      //   })
      //
      //   this.is_loading = false
      // })
    }
  }
</script>

<style>
  .section-detail {
    padding-top: 2%;
    padding-inline: 5%;
  }
</style>
