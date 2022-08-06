<template>
  <section class="section-tag-selector" :style="`padding-top: ${$device.mobile ? 5 : 2}%;`">
    <b-dropdown
      value="all"
      v-model="current_tag_type"
      aria-role="list">
      <template #trigger="{ active }">
        <b-button
          outlined
          icon-left="shapes"
          :label="$device.mobile ? '' : find_text_with_value(tag_type_options, current_tag_type)"
          :type="judge_tag_type(current_tag_type)"
          :icon-right="active ? 'caret-up' : 'caret-down'" />
      </template>

      <b-dropdown-item
        v-for="(option, index) in tag_type_options"
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
          :label="$device.mobile ? '' : find_text_with_value(tag_version_options, current_tag_version)"
          type="is-light"
          :icon-right="active ? 'caret-up' : 'caret-down'" />
      </template>
    
      <b-dropdown-item
        v-for="(option, index) in tag_version_options"
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
      v-model="current_sort"
      aria-role="list">
      <template #trigger="{ active }">
        <b-button
          icon-left="sort"
          :label="$device.mobile ? '' : find_text_with_value(sort_options, current_sort)"
          type="is-warning"
          :icon-right="active ? 'caret-up' : 'caret-down'" />
      </template>
    
      <b-dropdown-item
        v-for="(option, index) in sort_options"
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
  import useTag from '@/mixins/useTag.js'
  import useSelector from '@/mixins/useSelector.js'
  
  const tag_type_options = require('@/data/selector/tag_type_options.json')
  const tag_version_options = require('@/data/selector/tag_version_options.json')
  const sort_options = require('@/data/selector/sort_options.json')
  
  export default {
    name: 'TabBar',
    mixins: [useTag, useSelector],
    data() {
      return {
        tag_type_options,
        tag_version_options,
        sort_options,
        current_tag_type: tag_type_options[0].value,
        current_tag_version: tag_version_options[0].value,
        current_sort: sort_options[0].value
      }
    },
    watch: {
      current_tag_type: {
        handler(new_value, old_value) {
          console.log(`type: ${old_value} -> ${new_value}`)
          this.$emit('update', {
            selector: {
              filter: {
                type: new_value,
                version: this.current_tag_version
              },
              sort: this.current_sort
            }
          })
        }
      },
      current_tag_version: {
        handler(new_value, old_value) {
          console.log(`version: ${old_value} -> ${new_value}`)
          this.$emit('update', {
            selector: {
              filter: {
                type: this.current_tag_type,
                version: new_value
              },
              sort: this.current_sort
            }
          })
        }
      },
      current_sort: {
        handler(new_value, old_value) {
          console.log(`sort: ${old_value} -> ${new_value}`)
          this.$emit('update', {
            selector: {
              filter: {
                type: this.current_tag_type,
                version: this.current_tag_version
              },
              sort: new_value
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  .section-tag-selector {
    padding-top: 2%;
    padding-inline: 5%;
  }
</style>
