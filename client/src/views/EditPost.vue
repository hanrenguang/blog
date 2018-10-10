<template>
  <div class="edit-box">
    <el-form ref="form" :model="postForm">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <span>标题：</span>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light">
            <el-input
              v-model="postForm.title"
              placeholder="请输入标题">
            </el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <span>分类：</span>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light">
            <el-input
              v-model="postForm.classification"
              placeholder="请输入分类，以;分隔不同分类">
            </el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <span>摘要：</span>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light">
            <el-input
              type="textarea"
              v-model="postForm.brief">
            </el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <span>正文：</span>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light">
            <el-input
              type="textarea"
              :rows="20"
              v-model="postForm.content">
            </el-input>
          </div>
        </el-col>
      </el-row>
      <el-button
        type="primary"
        class="submit-post"
        @click="handleSubmitPost">
        提交
      </el-button>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.edit-box {
  margin: 20px 0 50px 0;
  .el-col {
    margin-top: 15px;
  }
  .submit-post {
    margin: 20px auto;
    width: 200px;
    height: 50px;
    font-size: 18px;
    letter-spacing: 5px;
  }
}
</style>

<script>
export default {
  name: 'EditPost',
  data () {
    return {
      postForm: {
        title: '',
        brief: '',
        content: '',
        classification: ''
      }
    }
  },
  methods: {
    handleSubmitPost () {
      let keys = Object.keys(this.postForm)

      while (keys.length) {
        let key = keys.pop()

        if (!this.postForm[key].trim()) {
          alert('err')
          return
        }
      }

      this.axios.post('http://localhost:3000/putPostInfo', this.postForm)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
