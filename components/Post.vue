<script lang="ts">

export default {
    props: {
        id: Number,
        title: String,
        body: String,
        imageUrl: String,
        imageAlt: String,
        view: String,
    },
}
</script>
<template>
    <div class="max-w-4xl rounded overflow-hidden shadow-lg">
        <img class="w-full" :src="imageUrl" :alt="imageAlt">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ title }}</div>
            <p :class="[
                'text-gray-700',
                view === 'batch' ? 'text-base line-clamp-1' : ''
            ]">{{ body }}</p>
            <NuxtLink v-if="view === 'batch'" :to="{ path: `/posts/${id}` }">
                <p class="text-blue-700 text-base cursor-pointer">click here to see the full post</p>
            </NuxtLink>
        </div>
    </div>
</template>
