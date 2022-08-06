<template>
  <div>
    <DetailBreadcrumb :tags="tags" :title="title" :article_id="article_id"></DetailBreadcrumb>
    <DetailInfo :article_id="article_id"></DetailInfo>
    <DetailContent :article_id="article_id"></DetailContent>
    <DetailEvaluation :article_id="article_id" :like="evaluation.like" :dislike="evaluation.dislike"></DetailEvaluation>
  </div>
</template>

<script>
  import DetailBreadcrumb from '@/components/discussion/detail/DetailBreadcrumb.vue'
  import DetailInfo from '@/components/discussion/detail/DetailInfo.vue'
  import DetailContent from '@/components/discussion/detail/DetailContent.vue'
  import DetailEvaluation from '@/components/discussion/detail/DetailEvaluation.vue'
  
  export default {
    name: 'PageDiscussionDetail',
    components: {
      DetailBreadcrumb, DetailInfo, DetailContent, DetailEvaluation
    },
    props: ['tags', 'title', 'description', 'article_id', 'date', 'evaluation'],
  };
</script>

<style>
  .section-detail {
    padding-top: 2%;
    padding-inline: 5%;
  }
</style>
