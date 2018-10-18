<template>
  <div class="post-box">
    <p class="title">{{ postInfo.title }}</p>
    <p class="other">
      作者：<span class="author">{{ postInfo.user }}</span>
      浏览量：<span class="read-time">{{ postInfo.readtime }}</span>
      更新时间：<span class="update-time">{{ date }}</span>
    </p>
    <p class="content">{{ postInfo.content }}</p>
  </div>
</template>

<style scoped lang="scss">
div.post-box {
  p.title {
    font-size: 20px;
    font-weight: 600;
  }
  p.other {
    color: #ccc;
    text-align: left;
    font-size: 14px;
    span {
      margin-right: 10px;
      color: #999;
    }
  }
  p.content {
    text-align: left;
    font-size: 16px;
  }
}
</style>

<script>
export default {
  name: 'PostView',
  props: ['postInfo'],
  computed: {
    date () {
      let updateTime = new Date(this.postInfo.updatetime)
      let year = updateTime.getFullYear()
      let month = updateTime.getMonth() < 9 ? '0' + (updateTime.getMonth() + 1) : updateTime.getMonth() + 1
      let day = updateTime.getDate() < 10 ? '0' + updateTime.getDate() : updateTime.getDate()
      return year + '-' + month + '-' + day
    }
  }
}
</script>
