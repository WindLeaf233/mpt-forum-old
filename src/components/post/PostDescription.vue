<template>
  <section>
    <b-field>
      <b-input
        placeholder="写一点简单的简介吧~注意:如果此空为空则会截取正文前50个字作为简介"
        v-model="description">
      </b-input>
    </b-field>
  </section>
</template>

<script>
  export default {
    name: 'PostDescription',
    data() {
      return {
        description: ''
      }
    },
    methods: {
      get_description() {
        return this.description
      }
    }
  }
</script>
