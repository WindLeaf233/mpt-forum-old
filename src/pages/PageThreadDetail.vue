<template>
  <div>
    <DetailBreadcrumb :tags="tags" :title="title" :thread_id="thread_id"></DetailBreadcrumb>
    <DetailInfo :thread_id="thread_id"></DetailInfo>
    <DetailContent :thread_id="thread_id"></DetailContent>
    <DetailEvaluation :thread_id="thread_id" :like="evaluation.like" :dislike="evaluation.dislike"></DetailEvaluation>
  </div>
</template>

<script>
  import DetailBreadcrumb from '@/components/thread/detail/DetailBreadcrumb.vue'
  import DetailInfo from '@/components/thread/detail/DetailInfo.vue'
  import DetailContent from '@/components/thread/detail/DetailContent.vue'
  import DetailEvaluation from '@/components/thread/detail/DetailEvaluation.vue'
  
  export default {
    name: 'PageThreadDetail',
    components: {
      DetailBreadcrumb, DetailInfo, DetailContent, DetailEvaluation
    },
    props: ['tags', 'title', 'description', 'thread_id', 'date', 'evaluation'],
  };
</script>

<style>
  .section-detail {
    padding-top: 2%;
    padding-inline: 5%;
  }
</style>
