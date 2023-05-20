<script lang="ts">

export default {
  name: 'ThePost',
  props: {
    id: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
    body: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    imageAlt: {
      type: String,
      default: '',
    },
    view: {
      type: String,
      default: '',
    },
  },
};
</script>
<template>
  <div class="w-full mx-4 rounded overflow-hidden shadow-lg">
    <img class="w-full aspect-video" :src="imageUrl" :alt="imageAlt">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        {{ title }}
      </div>
      <p
        :class="[
          'text-gray-700',
          view === 'batch' ? 'text-base line-clamp-1' : ''
        ]"
      >
        {{ body }}
      </p>
      <NuxtLink v-if="view === 'batch'" :to="{ path: `/posts/${id}` }">
        <p class="text-blue-700 text-base cursor-pointer">
          click here to see the full post
        </p>
      </NuxtLink>
    </div>
  </div>
</template>
