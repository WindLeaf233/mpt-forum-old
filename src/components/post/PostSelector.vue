<template>
  <section>
    <b-dropdown
      value="all"
      v-model="current_tag_type"
      aria-role="list">
      <template #trigger="{ active }">
        <b-button
          outlined
          icon-left="shapes"
          :label="$device.mobile ? '' : find_text_with_value(type_options, current_tag_type)"
          :type="judge_tag_type(current_tag_type)"
          :icon-right="active ? 'caret-up' : 'caret-down'" />
      </template>
  
      <b-dropdown-item
        v-for="(option, index) in type_options"
        :key="index"
        :value="option.value" aria-role="listitem">
        <div class="media">
          <div class="media-content">
            <h3>{{ option.text }}</h3>
          </div>
        </div>
      </b-dropdown-item>
    </b-dropdown>
    
    <b-dropdown
      value="all"
      v-model="current_tag_version"
      aria-role="list">
      <template #trigger="{ active }">
        <b-button
          icon-left="cube"
          :label="$device.mobile ? '' : find_text_with_value(version_options, current_tag_version)"
          type="is-light"
          :icon-right="active ? 'caret-up' : 'caret-down'" />
      </template>
    
      <b-dropdown-item
        v-for="(option, index) in version_options"
        :key="index"
        :value="option.value" aria-role="listitem">
        <div class="media">
          <div class="media-content">
            <h3>{{ option.text }}</h3>
          </div>
        </div>
      </b-dropdown-item>
    </b-dropdown>
  </section>
</template>

<script>
  import tag from '@/mixins/tag.js'
  import selector from '@/mixins/selector.js'
  
  const type_options = require('@/data/selector/type_options.json')
  const version_options = require('@/data/selector/version_options.json')
  
  export default {
    name: 'PostSelector',
    mixins: [tag, selector],
    data() {
      return {
        type_options,
        version_options,
        current_tag_type: 'all',
        current_tag_version: 'all',
      }
    },
    methods: {
      get_selector() {
        return {
          type: this.current_tag_type,
          version: this.current_tag_version
        }
      }
    }
  }
</script>
