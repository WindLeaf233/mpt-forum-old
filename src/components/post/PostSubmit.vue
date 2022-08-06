<template>
  <section>
    <b-button
      type="is-success"
      @click="submit()">
      提交
    </b-button>
  </section>
</template>

<script>
  export default {
    name: 'PostSubmit',
    methods: {
      submit() {
        this.$emit('a-submit', {
          
        })
      }
    }
  }
</script>
