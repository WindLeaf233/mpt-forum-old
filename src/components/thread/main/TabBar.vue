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
  import tag from '@/mixins/tag.js'
  import selector from '@/mixins/selector.js'
  
  const type_options = require('@/data/selector/type_options.json')
  const version_options = require('@/data/selector/version_options.json')
  const sort_options = require('@/data/selector/sort_options.json')
  
  export default {
    name: 'TabBar',
    mixins: [tag, selector],
    data() {
      return {
        type_options,
        version_options,
        sort_options,
        current_tag_type: 'all',
        current_tag_version: 'all',
        current_sort: 'time'
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
          this.debug(`sort: ${old_value} -> ${new_value}`)
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
