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
        :to="`/thread/${article_id}`"
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
    props: ['tags', 'title', 'article_id']
  }
</script>
