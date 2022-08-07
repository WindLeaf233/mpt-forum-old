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
    mixins: [thread],
    components: {
      MarkdownPreview
    },
    data() {
      return {
        content: ''
      }
    },
    methods: {
      update(content) {
        this.content = content
      }
    }
  }
</script>
