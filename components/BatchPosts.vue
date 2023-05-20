<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '~/store';

export default {
    name: 'BatchPosts',
    computed: {
        ...mapState(useMainStore, ['posts']),
    },
    methods: {
        ...mapActions(useMainStore, ['fetchAllPosts']),
    },
    created() {
        this.fetchAllPosts();
    },
}
</script>
<template>
    <div class="w-8/12 lg:w-6/12 space-y-5 my-5 flex flex-col place-self-center">
        <PostSkeleton v-if="!posts.length" view="batch" class="place-self-center" />
        <Post v-else v-for="post in posts" :title="post.title" :body="post.body" :imageUrl="post.imageUrl" :id="post.id"
            view="batch" class="place-self-center" />
    </div>
</template>