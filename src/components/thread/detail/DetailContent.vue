<template>
  <section class="section-detail">
    <div class="media-content">
      <MarkdownPreview 
        :value="content"
        :height="1024"
        :isPreview="true"
        :bordered="true"
        :copyCode="true"
        theme="oneDark">
      </MarkdownPreview>
    </div>
  </section>
</template>

<script>
  import MarkdownPreview from 'vue-meditor'
  import thread from '@/mixins/thread.js'
  
  export default {
    name: 'DetailContent',
    props: ['thread_id'],
    mixins: [thread],
    components: {
      MarkdownPreview
    },
    data() {
      return {
        content: ''
      }
    },
    beforeMount() {
      this.get(`/thread/get_content/${this.thread_id}`, (data) => {
        this.content = data.data.content
      })
    }
  }
</script>
