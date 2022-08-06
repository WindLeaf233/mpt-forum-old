<template>
  <section>
    <b-field>
      <b-input
        placeholder="叫什么名字呢"
        v-model="title">
      </b-input>
    </b-field>
  </section>
</template>

<script>
  export default {
    name: 'PostTitle',
    data() {
      return {
        title: ''
      }
    },
    methods: {
      get_title() {
        return this.title
      }
    }
  }
</script>
