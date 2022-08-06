<template>
  <div class="detail-info">
    <div class="a-title">
      <b-tag
      class="thread-tag"
      :type="judge_tag_type(d.tags.type)"
      size="is-medium">
        {{ find_text_with_value(type_options, d.tags.type) }}
      </b-tag>
      <b-tag
      class="thread-tag"
      type="is-info is-light"
      size="is-medium">
        {{ find_text_with_value(version_options, d.tags.version) }}
      </b-tag>
      <b-tag
      class="thread-tag"
      v-if="!$device.mobile"
      size="is-medium">
        {{ get_date_with_timestamp(d.timestamp) }}
      </b-tag>
      <b-tag
      type="is-dark"
      class="thread-tag"
      size="is-medium">
        {{ d.user.username }}
      </b-tag>
    </div>
  </div>
</template>

<script>
  import tag from '@/mixins/tag.js'
  import selector from '@/mixins/selector.js'
  import thread from '@/mixins/thread.js'
  import timestamp from '@/mixins/timestamp.js'
  
  const type_options = require('@/data/selector/type_options.json')
  const version_options = require('@/data/selector/version_options.json')
  
  export default {
    name: 'DetailInfo',
    mixins: [tag, selector, thread, timestamp],
    props: ['thread_id'],
    computed: {
      d() {
        return this.get_thread_with_id(this.thread_id)
      }
    },
    data() {
      return {
        type_options, version_options
      }
    }
  }
</script>

<style scoped>
  .a-title {
    display: table;
    width: 100%;
    display: flex;
  }
  
  .r-image {
    padding-right: 5px;
    height: 30px;
    width: 35px;
  }
  
  .detail-info {
    height: 5%;
    padding-top: 2%;
    padding-left: 5%;
    padding-right: 5%;
  }
  
  .thread-tag {
    height: 25px;
    /* width: 50px; */
    display: table-cell;
    /* display: table; */
    vertical-align: middle;
  }
</style>
