import { defineStore } from 'pinia'
import { IPost } from '~/interfaces/post.interface'
export const useMainStore = defineStore('main', {
    state: (): { posts: IPost[], selectedPost: IPost | null } => ({
        posts: [],
        selectedPost: null,
    }),
    actions: {
        async fetchAllPosts() {
            const rawPosts = (await useFetch('https://jsonplaceholder.typicode.com/posts'))
                .data
                .value as IPost[];
            this.posts = rawPosts.map((post: IPost) => ({
                ...post,
                image: '/yellow-frog.jpg',
                imageAlt: 'Yellow frog photo',
            }))
        },
        async fetchPost(id: string) {
            const rawPost = (await useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`))
                .data
                .value as IPost;
            this.selectedPost = {
                ...rawPost,
                image: '/yellow-frog.jpg',
                imageAlt: 'Yellow frog photo',
            }
        }
    },
})
