<script setup>
import {onMounted, ref} from 'vue'
import {getPosts} from '../helpers/apiCall'
const posts = ref("")
onMounted(async () => {
  try {
    posts.value = await getPosts()

  } catch(e) {
   console.log('there was an error', e) 
  }
})
</script>
<template>
  <div class="about">
    <RouterLink v-if="posts" v-for="post in posts" :to="{ name: 'eventdDetail', params: {id: post.id}}">{{ post.title }}</RouterLink>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
