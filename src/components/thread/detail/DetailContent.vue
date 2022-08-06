<template>
  <section class="section-detail">
    <div class="media-content">
      <!-- <div v-html="get_content()"></div> -->
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
  // import MarkdownIt from 'markdown-it'
  
  export default {
    name: 'DetailContent',
    props: ['thread_id'],
    mixins: [thread],
    components: {
      MarkdownPreview
    },
    computed: {
      content() {
        return this.get_thread_content_with_id(this.thread_id)
      }
    }
    // methods: {
    //   get_content() {
    //     const md = new MarkdownIt({
    //       breaks: true,
    //       linkify: true,
    //       typographer: true
    //     })
    //     let content = this.get_article_content_with_id(this.article_id)
    //     return md.render(content)
    //   }
    // }
  }
</script>
