<template>
  <div class="home">
    <template v-for="post in posts">
      <PostItem :post="post" :key="post.id"></PostItem>
    </template>
    <el-pagination
      background
      layout="prev, pager, next"
      :current-page.sync="curPage"
      :page-size="10"
      @current-change="handleCurrentChange"
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
      totalPage: 0,
      curPage: 1
    }
  },
  created () {
    this.axios.post('http://localhost:3000/getPost', {
      num: 10,
      page: this.curPage
    })
      .then((res) => {
        this.posts = res.data
      })
      .catch((err) => {
        console.log(err)
      })

    this.axios.post('http://localhost:3000/getPageCount', {
      num: 10
    })
      .then((res) => {
        this.totalPage = res.data.page_count
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    handleCurrentChange (currentPage) {
      this.curPage = currentPage
      this.axios.post('http://localhost:3000/getPost', {
        num: 10,
        page: this.curPage
      })
        .then((res) => {
          this.posts = res.data
        })
        .catch((err) => {
          console.log(err)
        })

      this.axios.post('http://localhost:3000/getPageCount', {
        num: 10
      })
        .then((res) => {
          this.totalPage = res.data.page_count
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  components: {
    PostItem
  }
}
</script>
