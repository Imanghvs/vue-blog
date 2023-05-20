<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '~/store';

export default {
    name: 'SinglePost',
    props: {
        postId: {
            type: Number,
            required: true,
        },
    },
    computed: {
        ...mapState(useMainStore, ['selectedPost']),
    },
    methods: {
        ...mapActions(useMainStore, ['fetchPost']),
    },
    created() {
        this.fetchPost(this.postId);
    },
}
</script>
<template>
    <div class="w-9/12 lg:w-6/12 my-5 flex flex-col place-self-center place-self-center">
        <Post v-if="selectedPost?.id" :title="selectedPost.title" :body="selectedPost.body"
            :imageUrl="selectedPost.imageUrl" :id="selectedPost.id" view="single" class="place-self-center" />
        <PostSkeleton v-else class="place-self-center" />
        <CommentInput v-if="selectedPost?.id" :postId="postId" class="place-self-center max-w-4xl mb-2" />
        <Comment v-if="selectedPost?.id" v-for="comment in selectedPost.comments" class="max-w-4xl mt-2"
            :name="comment.name" :body="comment.body" :postId="selectedPost.id" />
    </div>
</template>