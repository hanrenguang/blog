<template>
  <div class="home">
    <template v-for="post in posts">
      <PostItem :post="post" :key="post.id"></PostItem>
    </template>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="5">
    </el-pagination>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'

export default {
  name: 'Home',
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.axios.get('http://localhost:3000/')
      .then((res) => {
        this.posts = res.data
      })
  },
  components: {
    PostItem
  }
}
</script>
