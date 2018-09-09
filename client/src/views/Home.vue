<template>
  <div class="home">
    <template v-for="post in posts">
      <PostItem :post="post" :key="post.id"></PostItem>
    </template>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="totalPage">
    </el-pagination>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'

export default {
  name: 'Home',
  data () {
    return {
      posts: [],
      totalPage: 1
    }
  },
  created () {
    this.axios.get('http://localhost:3000/')
      .then((res) => {
        this.posts = res.data.posts
        this.totalPage = res.data.total_page
      })
      .catch((err) => {
        console.log(err)
      })
  },
  components: {
    PostItem
  }
}
</script>
