<template>
  <div>
    <section class="section-skeleton">
      <article class="media" v-for="i in media" :key="i">
        <div class="media-content">
          <div class="content">
            <p>
              <b-skeleton active></b-skeleton>
              <b-skeleton height="84px"></b-skeleton>
            </p>
            </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ThreadSkeleton',
    data() {
      return {
        media: 5
      }
    }
  }
</script>

<style scoped>
  section::-webkit-scrollbar,
  figure::-webkit-scrollbar,
  p::-webkit-scrollbar,
  b-skeleton::-webkit-scrollbar {
    display: none;
  }
  
  .section-skeleton {
    padding-top: 2%;
    padding-inline: 5%;
  }
</style>
