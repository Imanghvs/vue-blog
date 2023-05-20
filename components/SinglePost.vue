<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '~/store';

export default {
  name: 'SinglePost',
  props: {
    postId: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  computed: {
    ...mapState(useMainStore, ['selectedPost']),
  },
  created () {
    this.fetchPost(this.postId);
  },
  methods: {
    ...mapActions(useMainStore, ['fetchPost']),
  },
};
</script>
<template>
  <div v-if="selectedPost?.id" class="w-9/12 lg:w-6/12 my-5 flex flex-col place-self-center place-self-center">
    <ThePost
      :id="selectedPost.id"
      :title="selectedPost.title"
      :body="selectedPost.body"
      :image-url="selectedPost.imageUrl"
      view="single"
      class="place-self-center"
    />
    <CommentInput :post-id="postId" class="place-self-center max-w-4xl mb-2" />
    <TheComment
      v-for="comment in selectedPost.comments"
      :key="comment.id"
      class="max-w-4xl mt-2"
      :name="comment.name"
      :body="comment.body"
      :post-id="selectedPost.id"
    />
  </div>
  <div v-else class="w-9/12 lg:w-6/12 my-5 flex flex-col place-self-center place-self-center">
    <PostSkeleton class="place-self-center" />
  </div>
</template>
