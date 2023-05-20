<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '~/store';

export default {
  name: 'BatchPosts',
  computed: {
    ...mapState(useMainStore, ['posts']),
  },
  created () {
    this.fetchAllPosts();
  },
  methods: {
    ...mapActions(useMainStore, ['fetchAllPosts']),
  },
};
</script>
<template>
  <div class="w-8/12 lg:w-6/12 space-y-5 my-5 flex flex-col place-self-center">
    <PostSkeleton v-if="!posts.length" view="batch" class="place-self-center" />
    <ThePost
      v-for="post in posts"
      v-else
      :id="post.id"
      :key="post.id"
      :title="post.title"
      :body="post.body"
      :image-url="post.imageUrl"
      view="batch"
      class="place-self-center"
    />
  </div>
</template>
