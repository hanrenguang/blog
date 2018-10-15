<template>
  <div id="post">
    <PostView :postInfo="postInfo"></PostView>
    <CommentEditor :pid="postInfo.id"></CommentEditor>
    <template v-for="(comment, index) in comments">
      <CommentItem :comment="comment" :key="index"></CommentItem>
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>

<script>
import CommentEditor from '@/components/CommentEditor.vue'
import CommentItem from '@/components/CommentItem.vue'
import PostView from '@/components/PostView.vue'

export default {
  name: 'Post',
  data () {
    return {
      postInfo: {},
      comments: []
    }
  },
  created () {
    this.axios.post('http://localhost:3000/getPostDetail', {
      postId: this.$route.params.id
    }).then((res) => {
      this.postInfo = res.data
    }).catch((err) => {
      console.log(err)
    })

    this.axios.post('http://localhost:3000/getCommentDetail', {
      postId: this.$route.params.id
    }).then((res) => {
      this.comments = res.data
    }).catch((err) => {
      console.log(err)
    })
  },
  components: {
    CommentEditor,
    CommentItem,
    PostView
  }
}
</script>
