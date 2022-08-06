<template>
  <div class="pagepost">
    <PostTitle class="pagepost-item" ref="title"></PostTitle>
    <PostSelector class="pagepost-item" ref="selector"></PostSelector>
    <PostEditor class="pagepost-item" ref="editor"></PostEditor>
    <PostNotices class="pagepost-item" ref="notices"></PostNotices>
    <PostSubmit class="pagepost-item" @a-submit="submit()"></PostSubmit>
  </div>
</template>

<script>
  import PostEditor from '@/components/post/PostEditor.vue'
  import PostTitle from '@/components/post/PostTitle.vue'  
  import PostSubmit from '@/components/post/PostSubmit.vue'  
  import PostNotices from '@/components/post/PostNotices.vue'  
  import PostSelector from '@/components/post/PostSelector.vue'
  import post from '@/mixins/post.js'
  
  export default {
    name: 'PagePost',
    components: {
      PostEditor, PostTitle, PostSubmit, PostNotices, PostSelector
    },
    mixins: [post],
    methods: {
      submit() {
        let refs = this.$refs
        let title = refs.title.get_title().trim()
        let selector = refs.selector.get_selector()
        let content = refs.editor.get_content()
        let notices_checked = refs.notices.get_checked()
        
        let data = {
          title, selector, content, notices_checked
        }
        
        if (this.check_submit(data)) {
          console.log(data)
        }
      }
    }
  }
</script>

<style>
  .pagepost {
    padding: 2%;
  }
  
  .pagepost-item {
    padding: 1%;
  }
</style>
