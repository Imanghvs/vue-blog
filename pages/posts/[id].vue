<script setup>
import { useMainStore } from '~/store';
const store = useMainStore();
const route = useRoute();
await store.fetchPost(route.params.id);
const post = store.selectedPost;
</script>
<template>
    <div class="place-self-center">
        <Post :title="post.title" :body="post.body" :imageUrl="post.imageUrl" :id="post.id" view="single"
            class="place-self-center" />
    </div>
</template>