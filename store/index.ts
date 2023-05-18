import { defineStore } from 'pinia'
import { IPost } from '~/interfaces/post.interface'
const images = [
    { url: '/yellow-frog.jpg', alt: 'Yellow frog photo' },
    { url: '/green-tree-frog.avif', alt: 'Green tree frog photo' },
    { url: '/arrow-poison-frog.webp', alt: 'Arrow poison frog photo' },
    { url: '/poison-frog-strawberry.jpg', alt: 'Poison frog strawberry photo' },
    { url: '/poison-dart-frog.webp', alt: 'Poison dart frog photo' },
]
const appendImageToPost = (post: IPost): IPost => {
    const image = images[post.id % images.length]
    return {
        ...post,
        imageUrl: image.url,
        imageAlt: image.alt,
    }
}
const makeTextsLonger = (post: IPost): IPost => ({
    ...post,
    body: Array(8).join(post.body),
})
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
            this.posts = rawPosts
                .slice(0, 5)
                .map(appendImageToPost)
                .map(makeTextsLonger);
        },
        async fetchPost(id: string) {
            const rawPost = (await useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`))
                .data
                .value as IPost;
            this.selectedPost = makeTextsLonger(appendImageToPost(rawPost));
        }
    },
})
