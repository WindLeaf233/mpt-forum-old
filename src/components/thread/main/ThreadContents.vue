<template>
  <div>
    <section class="section-content" :style="`padding-top: ${$device.mobile ? 5 : 2}%;`">
      <article class="media" v-for="(d, index) in page_elements" :key="index + 1" :id="`thread${d.id}`">
        <div class="media-content" @click="view_thread_detail($event)">
          <div class="content a-border">
            <div class="buttons a-title">
              <b-tag
              class="thread-tag"
              :type="judge_tag_type(d.tags.type)"
              size="is-medium">
                {{ find_text_with_value(type_options, d.tags.type) }}
              </b-tag>
              <b-tag
              class="thread-tag"
              v-if="!$device.mobile"
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
              type="is-warning is-light"
              v-if="!$device.mobile"
              class="thread-tag"
              size="is-small">
                <b-icon icon="thumbs-up"></b-icon>{{ d.evaluations.like.length }}
                <b-icon icon="thumbs-down"></b-icon>{{ d.evaluations.dislike.length }}
              </b-tag>
              <b-tag
              type="is-dark"
              v-if="!$device.mobile"
              class="thread-tag"
              size="is-medium">
                {{ d.userinfo.username }}
              </b-tag>
              <strong class="thread-title">{{ d.title }}</strong>
            </div>
            <div class="a-content">
              <p>
                {{ d.description }}
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
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
    name: 'ThreadContents',
    mixins: [tag, selector, thread, timestamp],
    props: ['page_elements'],
    data() {
      return {
        type_options,
        version_options,
        selector: {
          filter: {
            type: 'all',
            version: 'all'
          },
          sort: 'time'
        }
      }
    },
    methods: {
      update_selector(selector) {
        this.selector = selector
      }
    }
  }
</script>

<style scoped>
  .thread-tag {
    height: 25px;
    width: 50px;
    display: table-cell;
    vertical-align: middle;
  }
  
  .content {
    height: 116px;
  }
  
  .thread-title {
    padding: 5px;
  }
  
  .a-title {
    display: table;
    width: 100%;
  }
  
  .section-content {
    padding-inline: 5%;
  }
  
  .a-content {
    white-space: normal;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  
  .media-content::-webkit-scrollbar {
    display: none;
  }
  
  .thread-date {
    text-align: right;
  }
  
  .a-border {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 13px;
  }
</style>
