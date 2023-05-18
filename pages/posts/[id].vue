<script setup>
import { useMainStore } from '~/store';
const store = useMainStore();
const route = useRoute();
await store.fetchPost(route.params.id);
</script>
<template>
    <div>
        post id: {{ $route.params.id }}
    </div>
</template>