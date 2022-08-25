<template>
  <div>
    <TabBar @update="update_selector($event)"></TabBar>
    <ThreadSkeleton v-if="is_loading"></ThreadSkeleton>
    <ThreadContents v-else ref="content" :page_elements="threads"></ThreadContents>
    <ThreadPagination :total="threads.length" :per_page="settings.per_page" :current_page="page"></ThreadPagination>
  </div>
</template>

<script>
  import ThreadSkeleton from '@/components/thread/main/ThreadSkeleton.vue'
  import ThreadContents from '@/components/thread/main/ThreadContents.vue'
  import ThreadPagination from '@/components/thread/main/ThreadPagination.vue'
  import TabBar from '@/components/thread/main/TabBar.vue'

  import request from '@/mixins/request.js'
  
  const settings = require('@/data/settings.json')
  
  export default {
    name: 'PageThreads',
    mixins: [request],
    components: {
      ThreadSkeleton, ThreadContents,
      ThreadPagination,
      TabBar
    },
    data() {
      return {
        is_loading: true,
        threads: [],
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
      page() {
        return 1
      }
    },
    created() {
      let threads = this.$store.state.threads
      console.log('2', threads, threads.length, threads.length === 0)
      if (threads.length === 0) {
        this.get('/thread/list', (data) => {
          this.threads = data.data.threads
          for (let thread of this.threads) {
            threads.push(thread)
          }
        })
      } else {
        this.threads = threads
      }
      this.is_loading = false
    }
  }
</script>
