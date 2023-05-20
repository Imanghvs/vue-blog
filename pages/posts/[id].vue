<template>
    <SinglePost v-if="Number($route.params.id)" :postId="Number($route.params.id)" view="single" />
</template>