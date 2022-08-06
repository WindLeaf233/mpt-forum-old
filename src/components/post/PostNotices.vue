<template>
  <section>
    <b-message title="注意!" type="is-warning">
      请确认输入框中的内容，提交后不可修改！
    </b-message>
    <b-field>
      <b-checkbox :size="$device.mobile ? 'is-small' : ''" v-model="checked_1">我确定我在网上找不到对应的插件或模组</b-checkbox>
    </b-field>
  </section>
</template>

<script>
  export default {
    name: 'PostNotices',
    data() {
      return {
        checked_1: false
      }
    },
    methods: {
      get_checked() {
        return this.checked_1
      }
    }
  }
</script>
