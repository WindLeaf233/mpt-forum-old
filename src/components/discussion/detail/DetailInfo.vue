<template>
  <div class="detail-info">
    <div class="a-title">
      <b-tag
      class="thread-tag"
      :type="judge_tag_type(d.tags.type)"
      size="is-medium">
        {{ find_text_with_value(tag_type_options, d.tags.type) }}
      </b-tag>
      <b-tag
      class="thread-tag"
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
      type="is-dark"
      class="thread-tag"
      size="is-medium">
        {{ d.user.username }}
      </b-tag>
    </div>
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
    name: 'DetailInfo',
    mixins: [useTag, useSelector, useArticle, useTimestamp],
    props: ['article_id'],
    computed: {
      d() {
        return this.get_article_with_id(this.article_id)
      }
    },
    data() {
      return {
        tag_type_options, tag_version_options
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
  
  .user-image {
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
