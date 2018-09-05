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
        },
        {
          id: 3,
          brief: 'post3 brief',
          title: 'post3'
        },
        {
          id: 4,
          brief: 'post4 brief',
          title: 'post4'
        }
      ]
    }
  },
  components: {
    PostItem
  }
}
</script>
