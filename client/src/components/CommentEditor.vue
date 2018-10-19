<template>
  <div class="edit-box">
    <textarea
      name="comment"
      class="comment-content"
      v-model="comment">
    </textarea>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <span>昵称：</span>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-light">
          <el-input v-model="name" placeholder="请输入昵称" class="input-name"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-button
      type="primary"
      class="submit-comment"
      @click="submitComment"
    >发布评论</el-button>
  </div>
</template>

<style scoped lang="scss">
.edit-box {
  box-sizing: border-box;
  margin-top: 50px;
  padding: 10px 10px 20px 10px;
  width: 100%;
  border-top: 1px solid #bbb;
  textarea {
    box-sizing: border-box;
    display: block;
    margin: 1rem auto;
    padding: 5px;
    width: 100%;
    height: 100px;
    border-radius: 5px;
    font-size: 16px;
    resize: none;
  }
  .el-row span {
    line-height: 40px;
  }
  .submit-comment {
    margin-top: 10px;
    width: 100px;
    font-size: 16px;
  }
}
</style>

<script>
export default {
  name: 'CommentEditor',
  props: ['pid'],
  data () {
    return {
      name: '',
      comment: ''
    }
  },
  methods: {
    submitComment () {
      if (!this.name || !this.comment) return

      this.axios.post('http://localhost:3000/createComment', {
        name: this.name,
        content: this.comment,
        pid: this.pid
      }).then(res => {
        if (res.data.status === 1) {
          this.$emit('updateComment', {
            id: res.data.id,
            name: this.name,
            content: this.comment,
            pid: this.pid,
            submittime: new Date()
          })

          this.name = ''
          this.comment = ''
        } else {
          console.log('comment submit failed')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
