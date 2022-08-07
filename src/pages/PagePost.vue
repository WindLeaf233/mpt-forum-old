<template>
  <div class="pagepost">
    <b-loading :is-full-page="true" v-model="is_loading" :can-cancel="false"></b-loading>
    <PostTitle class="pagepost-item" ref="title"></PostTitle>
    <PostSelector class="pagepost-item" ref="selector"></PostSelector>
    <PostDescription class="pagepost-item" ref="description"></PostDescription>
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
  import PostDescription from '@/components/post/PostDescription.vue'
  import post from '@/mixins/post.js'
  
  export default {
    name: 'PagePost',
    components: {
      PostEditor, PostTitle, PostSubmit, PostNotices, PostSelector, PostDescription
    },
    mixins: [post],
    data() {
      return {
        is_loading: false
      }
    },
    methods: {
      submit() {
        let refs = this.$refs
        let title = refs.title.get_title().trim()
        let selector = refs.selector.get_selector()
        let content = refs.editor.get_content()
        let notices_checked = refs.notices.get_checked()
        let description = refs.description.get_description()
        
        let data = {
          title, selector, content, notices_checked, description
        }
        
        this.check_submit(data, this)
      },
      update_is_loading(bool) {
        this.is_loading = bool
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
