<script setup>
import { useMainStore } from '~/store';
const store = useMainStore();
const route = useRoute();
await store.fetchPost(route.params.id);
const post = store.selectedPost;
const comments = store.comments;
</script>
<template>
    <div class="space-y-5 my-5 flex flex-col place-self-center place-self-center">
        <Post :title="post.title" :body="post.body" :imageUrl="post.imageUrl" :id="post.id" view="single"
            class="place-self-center" />
        <CommentInput class="place-self-center max-w-4xl" />
        <Comment v-for="comment in comments" class="place-self-center max-w-4xl" :name="comment.name" :date="comment.date"
            :body="comment.body" :postId="post.id" />
    </div>
</template>