<template>
  <div>
    <hr>
    <b-pagination
      v-model="page"
      :current="current_page"
      :total="total"
      :per-page="per_page">
    </b-pagination>
  </div>
</template>

<script>
  export default {
    name: 'ThreadPagination',
    props: ['total', 'per_page', 'current_page'],
    data() {
      return {
        page: this.current_page
      }
    },
    watch: {
      page: {
        handler(new_value, old_value) {
          console.log(`page: ${old_value} -> ${new_value}`)
          this.$router.push(`/threads/page${new_value}`)
        }
      }
    }
  }
</script>
