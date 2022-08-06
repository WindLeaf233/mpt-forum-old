<template>
  <div>
    <TabBar @update="update_selector($event)"></TabBar>
    <DiscussionSkeleton v-if="is_loading"></DiscussionSkeleton>
    <DiscussionContents v-if="!is_loading" ref="content" :page_elements="page_elements"></DiscussionContents>
    <DiscussionPagination :total="total_threads" :per_page="settings.per_page" :current_page="page"></DiscussionPagination>
  </div>
</template>

<script>
  import DiscussionSkeleton from '@/components/discussion/main/DiscussionSkeleton.vue'
  import DiscussionContents from '@/components/discussion/main/DiscussionContents.vue'
  import DiscussionPagination from '@/components/discussion/main/DiscussionPagination.vue'
  import TabBar from '@/components/discussion/main/TabBar.vue'
  
  const settings = require('@/data/settings.json')
  const discussions = require('@/data/discussion/discussions.json')
  
  export default {
    name: 'PageDiscussions',
    components: {
      DiscussionSkeleton, DiscussionContents,
      DiscussionPagination,
      TabBar
    },
    props: ['page', 'page_elements'],
    data() {
      return {
        is_loading: false,
        settings
      }
    },
    methods: {
      update_selector(e) {
        const content = this.$refs.content
        content.update_selector(e.selector)
      }
    },
    computed: {
      total_threads() {
        return discussions.length
      }
    }
  }
</script>
