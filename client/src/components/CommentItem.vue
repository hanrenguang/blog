<template>
  <div class="comment-item">
    <div class="comment-info">
      <span class="name">{{ comment.name }}</span>
      <span class="time">{{ date }}</span>
    </div>
    <div class="content">
      {{ comment.content }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.comment-item {
  box-sizing: border-box;
  padding: 10px 10px;
  width: 100%;
  border-top: 1px dotted #ccc;
  font-size: 16px;
  .comment-info {
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    .name {
      font-size: 16px;
      font-weight: 600;
    }
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
  props: ['comment'],
  computed: {
    date () {
      let updateTime = new Date(this.comment.submittime)
      let year = updateTime.getFullYear()
      let month = updateTime.getMonth() < 9 ? '0' + (updateTime.getMonth() + 1) : updateTime.getMonth() + 1
      let day = updateTime.getDate() < 10 ? '0' + updateTime.getDate() : updateTime.getDate()
      return year + '-' + month + '-' + day
    }
  }
}
</script>
