<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '~/store';
export default {
  name: 'CommentInput',
  props: {
    postId: {
      type: Number,
      required: true,
    },
  },
  data () {
    return {
      body: '',
      submitting: false,
    };
  },
  computed: {
    ...mapState(useMainStore, ['selectedPost']),
  },
  methods: {
    ...mapActions(useMainStore, ['submitComment']),
    async handleSubmit (event: any) {
      event.preventDefault();
      if (this.body.trim().length < 2) {
        return;
      }
      this.submitting = true;
      await this.submitComment({
        id: this?.selectedPost?.comments?.[0]?.id || 0 + 1,
        body: this.body.trim(),
        postId: this.postId,
        name: 'You',
      });
      this.body = '';
      this.submitting = false;
    },
  },
};
</script>
<template>
  <div class="flex items-center justify-center shadow-lg mt-3 w-full">
    <form class="w-full bg-white rounded-lg px-4 pt-2" @submit="handleSubmit">
      <div class="flex flex-wrap -mx-3 mb-6">
        <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">
          Add a new comment
        </h2>
        <div class="w-full md:w-full px-3 mb-2 mt-2">
          <textarea
            v-model="body"
            class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white"
            name="body"
            placeholder="Type Your Comment"
            required
            maxlength="512"
          />
        </div>
        <div class="w-full md:w-full flex items-start md:w-full px-3">
          <div class="mr-1">
            <div v-if="submitting" class="bg-gray-200 h-8 text-gray-400 py-1 px-4 border border-gray-400 rounded-lg mr-1">
              <TheLoader class="w-full h-full" />
            </div>
            <input
              v-else
              type="submit"
              :disabled="body.trim().length < 2"
              :class="[
                body.trim().length > 2 ? 'cursor-pointer bg-white hover:bg-gray-100 text-gray-700' : 'bg-gray-200 text-gray-400',
                'h-8 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1'
              ]"
              value="Post Comment"
            >
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
