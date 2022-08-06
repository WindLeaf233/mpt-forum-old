<template>
  <div>
    <TabBar @update="update_selector($event)"></TabBar>
    <ThreadSkeleton v-if="is_loading"></ThreadSkeleton>
    <ThreadContents v-if="!is_loading" ref="content" :page_elements="page_elements"></ThreadContents>
    <ThreadPagination :total="total_threads" :per_page="settings.per_page" :current_page="page"></ThreadPagination>
  </div>
</template>

<script>
  import ThreadSkeleton from '@/components/thread/main/ThreadSkeleton.vue'
  import ThreadContents from '@/components/thread/main/ThreadContents.vue'
  import ThreadPagination from '@/components/thread/main/ThreadPagination.vue'
  import TabBar from '@/components/thread/main/TabBar.vue'
  
  const settings = require('@/data/settings.json')
  const threads = require('@/data/thread/threads.json')
  
  export default {
    name: 'PageThreads',
    components: {
      ThreadSkeleton, ThreadContents,
      ThreadPagination,
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
        return threads.length
      }
    }
  }
</script>
