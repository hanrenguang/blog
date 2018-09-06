<template>
  <div id="post">
    {{ posts[$route.params.id].content }}
    <CommentEditor></CommentEditor>
    <template v-for="(comment, index) in posts[$route.params.id].comments">
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
      posts: [
        {
          content: 'post0',
          comments: [
            {
              comment: '评论1',
              date: '2018.09.06'
            },
            {
              comment: '评论2',
              date: '2018.09.06'
            },
            {
              comment: '评论3',
              date: '2018.09.06'
            }
          ]
        },
        {
          content: 'post1',
          comments: [
            {
              comment: '评论1',
              date: '2018.09.06'
            },
            {
              comment: '评论2',
              date: '2018.09.06'
            },
            {
              comment: '评论3',
              date: '2018.09.06'
            }
          ]
        },
        {
          content: 'post2',
          comments: [
            {
              comment: '评论1',
              date: '2018.09.06'
            },
            {
              comment: '评论2',
              date: '2018.09.06'
            },
            {
              comment: '评论3',
              date: '2018.09.06'
            }
          ]
        },
        {
          content: 'post3',
          comments: [
            {
              comment: '评论1',
              date: '2018.09.06'
            },
            {
              comment: '评论2',
              date: '2018.09.06'
            },
            {
              comment: '评论3',
              date: '2018.09.06'
            }
          ]
        },
        {
          content: 'post4',
          comments: [
            {
              comment: '评论1',
              date: '2018.09.06'
            },
            {
              comment: '评论2',
              date: '2018.09.06'
            },
            {
              comment: '评论3',
              date: '2018.09.06'
            }
          ]
        }
      ]
    }
  },
  components: {
    CommentEditor,
    CommentItem
  }
}
</script>
