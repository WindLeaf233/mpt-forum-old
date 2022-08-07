<template>
  <div>
    <section class="section-detail">
      <b-breadcrumb>
        <b-button
        outlined
        type="is-dark is-small"
        icon-left="caret-left"
        tag="router-link"
        to="/threads">
          返回
        </b-button>
        <b-breadcrumb-item
        tag="router-link"
        :to="`/thread/${thread_id}`"
        active>
          {{ title }}
        </b-breadcrumb-item>
      </b-breadcrumb>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'DetailBreadcrumb',
    data() {
      return {
        title: '', thread_id: ''
      }
    },
    methods: {
      update(title, thread_id) {
        this.title = title
        this.thread_id = thread_id
      }
    }
  }
</script>
