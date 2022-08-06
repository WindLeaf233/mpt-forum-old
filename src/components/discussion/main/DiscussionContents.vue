<template>
  <div>
    <section class="section-content" :style="`padding-top: ${$device.mobile ? 5 : 2}%;`">
      <article class="media" v-for="(d, index) in page_elements" :key="index + 1" :id="`article${d.id}`">
        <div class="media-content" @click="view_discussion_detail($event)">
          <div class="content a-border">
            <div class="buttons a-title">
              <b-tag
              class="thread-tag"
              :type="judge_tag_type(d.tags.type)"
              size="is-medium">
                {{ find_text_with_value(tag_type_options, d.tags.type) }}
              </b-tag>
              <b-tag
              class="thread-tag"
              v-if="!$device.mobile"
              type="is-info is-light"
              size="is-medium">
                {{ find_text_with_value(tag_version_options, d.tags.version) }}
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
                <b-icon icon="thumbs-up"></b-icon>{{ d.evaluation.like }}
                <b-icon icon="thumbs-down"></b-icon>{{ d.evaluation.dislike }}
              </b-tag>
              <b-tag
              type="is-dark"
              v-if="!$device.mobile"
              class="thread-tag"
              size="is-medium">
                {{ d.user.username }}
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
  import useTag from '@/mixins/useTag.js'
  import useSelector from '@/mixins/useSelector.js'
  import useArticle from '@/mixins/useArticle.js'
  import useTimestamp from '@/mixins/useTimestamp.js'
  
  const tag_type_options = require('@/data/selector/tag_type_options.json')
  const tag_version_options = require('@/data/selector/tag_version_options.json')
  
  export default {
    name: 'DiscussionContents',
    mixins: [useTag, useSelector, useArticle, useTimestamp],
    props: ['page_elements'],
    data() {
      return {
        tag_type_options,
        tag_version_options,
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
