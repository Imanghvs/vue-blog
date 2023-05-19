<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '~/store';
export default {
    name: 'SinglePost',
    props: {
        postId: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            loading: true,
        }
    },
    computed: {
        ...mapState(useMainStore, ['selectedPost', 'comments']),
    },
    methods: {
        ...mapActions(useMainStore, ['fetchPost']),
    },
    async created() {
        this.fetchPost(this.postId);
    },
}
</script>
<template>
    <div class="w-9/12 lg:w-6/12 space-y-5 my-5 flex flex-col place-self-center place-self-center">
        <Post v-if="selectedPost?.id" :title="selectedPost.title" :body="selectedPost.body"
            :imageUrl="selectedPost.imageUrl" :id="selectedPost.id" view="single" class="place-self-center" />
        <PostSkeleton v-else class="place-self-center" />
        <CommentInput v-if="selectedPost?.id" class="place-self-center max-w-4xl" />
        <Comment v-if="selectedPost?.id" v-for="comment in comments" class="place-self-center max-w-4xl"
            :name="comment.name" :date="comment.date" :body="comment.body" :postId="selectedPost.id" />
    </div>
</template>