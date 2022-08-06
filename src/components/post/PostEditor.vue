<template>
  <div class="markdown">
    <MarkdownPro :toolbars="toolbars" v-model="content"></MarkdownPro>
  </div>
</template>

<script>
  import MarkdownPro from 'vue-meditor'
  
  const settings = require('@/data/settings.json')
  
  export default {
    name: 'PostEditor',
    components: {
      MarkdownPro
    },
    data() {
      return {
        settings,
        toolbars: {
          image: false,
          uploadImage: false,
          table: false,
          preview: false,
          print: false,
          theme: false,
          exportmd: false,
          importmd: false,
          save: false
        },
        value: settings.template
      }
    },
    computed: {
      content: {
        get() {
          return this.value
        },
        
        set(value) {
          this.value = value
        }
      }
    },
    methods: {
      get_content() {
        return this.content
      }
    }
  }
</script>
