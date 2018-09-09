<template>
  <div class="edit-box">
    <textarea name="comment" cols="30" rows="5"></textarea>
    <el-button type="primary">提交</el-button>
  </div>
</template>

<script>
export default {
  name: 'CommentEditor'
}
</script>

<style scoped lang="scss">
textarea {
  display: block;
  margin: 1rem auto;
}
</style>
