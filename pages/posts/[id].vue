<template>
  <SinglePost v-if="Number($route.params.id)" :post-id="Number($route.params.id)" view="single" />
</template>
