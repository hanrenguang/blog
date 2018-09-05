<template>
  <div class="home">
    <template v-for="post in posts">
      <PostItem :post="post" :key="post.id"></PostItem>
    </template>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'

export default {
  name: 'Home',
  data () {
    return {
      posts: [
        {
          id: 0,
          brief: 'post0 brief',
          title: 'post0'
        },
        {
          id: 1,
          brief: 'post1 brief',
          title: 'post1'
        },
        {
          id: 2,
          brief: 'post2 brief',
          title: 'post2'
        }
      ]
    }
  },
  components: {
    PostItem
  }
}
</script>
