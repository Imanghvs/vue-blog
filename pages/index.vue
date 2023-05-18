<script setup lang="ts">
import { useMainStore } from '~/store';
const store = useMainStore();
await store.fetchAllPosts();
</script>
<template>
    <div class="space-y-5 my-5 flex flex-col place-self-center">
        <Post v-for="post in store.posts" :title="post.title" :body="post.body" :imageUrl="post.image" :id="post.id"
            class="place-self-center" />
    </div>
</template>