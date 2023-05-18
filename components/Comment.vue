<script lang="ts">
export default {
    props: {
        postId: Number,
        name: String,
        date: String,
        body: String,
    },
}
</script>
<template>
    <div class="w-full p-6 mb-6 text-base rounded bg-gray-200">
        <footer class="flex justify-between items-center mb-2">
            <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900">
                    <img class="mr-2 w-6 h-6 rounded-full" src="/ananymous-avatar.png" alt="Ananymous">
                    {{ name }}
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    <time pubdate :title="date">{{ date }}</time>
                </p>
            </div>
        </footer>
        <p class="text-gray-500 dark:text-gray-400">
            {{ body }}
        </p>
    </div>
</template>