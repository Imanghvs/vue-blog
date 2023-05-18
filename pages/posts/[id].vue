<script setup>
import { useMainStore } from '~/store';
const store = useMainStore();
const route = useRoute();
await store.fetchPost(route.params.id);
const post = store.selectedPost;
</script>
<template>
    <div class="place-self-center">
        <div class="max-w-4xl rounded overflow-hidden shadow-lg">
            <img class="w-full" :src="post.imageUrl" :alt="post.imageAlt">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{ post.title }}</div>
                <p class="text-gray-700 text-base">{{ post.body }}</p>
            </div>
        </div>
    </div>
</template>