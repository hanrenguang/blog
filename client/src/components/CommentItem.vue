<template>
  <div class="comment-item">
    <div class="comment-info">
      <span class="name">{{ comment.name }}</span>
      <span class="time">{{ comment.date }}</span>
    </div>
    <div class="content">
      {{ comment.content }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.comment-item {
  box-sizing: border-box;
  padding: 20px 10px;
  width: 100%;
  border-top: 1px dotted #ccc;
  font-size: 16px;
  .comment-info {
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    .time {
      font-size: 14px;
    }
  }
  .content {
    text-align: left;
    text-indent: 10px;
  }
}
</style>

<script>
export default {
  name: 'CommentItem',
  props: ['comment']
}
</script>
