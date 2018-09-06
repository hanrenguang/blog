<template>
  <div class="comment-item">
    {{ comment.comment }}
  </div>
</template>

<script>
export default {
  name: 'CommentItem',
  props: ['comment']
}
</script>
