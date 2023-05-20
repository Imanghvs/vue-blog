import { defineStore } from 'pinia';
import { IComment, IPost } from '~/interfaces';
const images = [
  { url: '/yellow-frog.jpg', alt: 'Yellow frog photo' },
  { url: '/green-tree-frog.avif', alt: 'Green tree frog photo' },
  { url: '/arrow-poison-frog.webp', alt: 'Arrow poison frog photo' },
  { url: '/poison-frog-strawberry.jpg', alt: 'Poison frog strawberry photo' },
  { url: '/poison-dart-frog.webp', alt: 'Poison dart frog photo' },
];
const appendImageToPost = (post: IPost): IPost => {
  const image = images[post.id % images.length];
  return {
    ...post,
    imageUrl: image.url,
    imageAlt: image.alt,
  };
};
const makeBodyTextLonger = (post: IPost): IPost => ({
  ...post,
  body: Array(8).join(post.body),
});

export const useMainStore = defineStore('main', {
  state: (): { posts: IPost[], selectedPost: IPost | null } => ({
    posts: [],
    selectedPost: null,
  }),
  actions: {
    async fetchAllPosts () {
      const rawPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json()) as IPost[];
      this.posts = rawPosts
        ?.slice(0, 5)
        ?.map(appendImageToPost)
        ?.map(makeBodyTextLonger) ||
                [];
    },
    async fetchPost (id: number) {
      const rawPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json()) as IPost;
      if (!rawPost) {
        return;
      }
      const post = makeBodyTextLonger(appendImageToPost(rawPost));
      let comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(res => res.json()) as IComment[];
      if (!comments) {
        comments = [];
      }
      const readyPost = { ...post, comments };
      this.selectedPost = readyPost;
    },
    async submitComment (comment: IComment) {
      await fetch(
                `https://jsonplaceholder.typicode.com/posts/${comment.postId}/comments`,
                {
                  method: 'POST',
                  body: JSON.stringify({
                    id: comment.id,
                    postId: comment.postId,
                    name: comment.name,
                    body: comment.body,
                  }),
                },
      );
      this.selectedPost?.comments?.unshift(comment);
    },
  },
});
