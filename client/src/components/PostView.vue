<template>
  <div class="post-box">
    <p class="title">{{ postInfo.title }}</p>
    <p class="other">
      <span class="author">{{ postInfo.user }}</span>
      <span class="read-time">{{ postInfo.readtime }}</span>
      <span class="update-time">{{ date }}</span>
    </p>
    <p class="content">{{ postInfo.content }}</p>
  </div>
</template>

<style scoped lang="scss">

</style>

<script>
export default {
  name: 'PostView',
  props: ['postInfo'],
  computed: {
    date () {
      let updateTime = new Date(this.postInfo.updatetime)
      return updateTime.getFullYear() + '-' + (updateTime.getMonth() < 10 ? '0' + updateTime.getMonth() : updateTime.getMonth()) + '-' + (updateTime.getDate() < 10 ? '0' + updateTime.getDate() : updateTime.getDate())
    }
  }
}
</script>
