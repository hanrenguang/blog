<template>
  <div class="post-item">
    <p class="title">{{ post.title }}</p>
    <p class="brief">{{ post.brief }}</p>
    <a href="javascript:;" @click="goPost(post.id)">read more</a>
  </div>
</template>

<script>
import router from '@/router.js'

export default {
  props: ['post'],
  methods: {
    goPost(postId) {
      router.push({path: `post/${postId}`})
    }
  }
}
</script>