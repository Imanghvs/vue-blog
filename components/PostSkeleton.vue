<script lang="ts">
export default {
  name: 'PostSkeleton',
};
</script>
<template>
  <div class="w-full mx-4 py-4 rounded overflow-hidden shadow-lg animate-pulse">
    <div class="w-full aspect-video bg-gray-300" />
    <div class="mx-2 flex flex-col space-y-3">
      <div class="w-5/12 h-8 rounded my-2 w-20 bg-gray-300" />
      <div class="w-full h-4 rounded my-2 w-20 bg-gray-300" />
      <div class="w-4/12 h-4 rounded my-2 w-20 bg-gray-300" />
    </div>
  </div>
</template>
