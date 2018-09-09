<template>
  <div id="post">
    {{ postInfo.content }}
    <CommentEditor></CommentEditor>
    <template v-for="(comment, index) in postInfo.comments">
      <CommentItem :comment="comment" :key="index"></CommentItem>
    </template>
  </div>
</template>

<script>
import CommentEditor from '@/components/CommentEditor.vue'
import CommentItem from '@/components/CommentItem.vue'

export default {
  name: 'Post',
  data () {
    return {
      postInfo: {}
    }
  },
  created () {
    this.axios.post('http://localhost:3000/post', {
      post_id: this.$route.params.id
    }).then((res) => {
      this.postInfo = res.data
    }).catch((err) => {
      console.log(err)
    })
  },
  components: {
    CommentEditor,
    CommentItem
  }
}
</script>
