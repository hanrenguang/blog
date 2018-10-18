<template>
  <div id="app">
    <el-container>
      <el-menu
        :default-active="activeIndex"
        :router="true"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#3a8ee6">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/about">关于我</el-menu-item>
        <el-menu-item index="/editPost" v-show="hasLogin">新文章</el-menu-item>
        <el-button
          type="primary"
          @click="dialogVisible = true"
          v-if="!hasLogin"
          class="login">
          登录
        </el-button>
        <div v-else class="username">{{ userName }}</div>
      </el-menu>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>这是个页脚</el-footer>
    </el-container>
    <el-dialog
      title="登录"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model.trim="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model.trim="form.password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.2rem;
  text-align: center;
  color: #2c3e50;
  .el-container {
    width: 100%;
    min-height: 100%;
  }
  .el-menu {
    position: relative;
    padding-left: 2rem;
    font-size: 1.4rem;
    .login {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translate(0, -50%);
    }
    .username {
      float: right;
      color: #fff;
      margin-right: 20px;
      line-height: 60px;
      font-size: 15px;
    }
  }
  .el-main {
    padding: 0;
    margin: 20px auto;
    width: 100%;
    min-height: 100%;
    max-width: 700px;
    font-size: 1.4rem;
  }
  .el-pagination {
    margin-top: 30px;
  }
  .el-footer {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #545c64;
    color: #fff;
  }
}
</style>

<script>
import MD5 from 'md5.js'
export default {
  name: 'app',
  data () {
    return {
      activeIndex: window.location.pathname,
      dialogVisible: false,
      form: {
        name: '',
        password: ''
      },
      hasLogin: false,
      userName: ''
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleSubmit () {
      if (!this.form.name || !this.form.password) {
        this.$alert('用户名和密码不能为空！', '提示', {
          confirmButtonText: '确定'
        })
        return
      }

      this.axios.post('http://localhost:3000/user', {
        username: this.form.name,
        password: new MD5().update(this.form.password).digest('hex')
      })
        .then((res) => {
          const data = res.data
          if (data.status) {
            this.hasLogin = true
            this.userName = this.form.name
            this.form.name = ''
            this.form.password = ''
          } else {
            this.$alert(data.msg, '提示', {
              confirmButtonText: '确定'
            })
          }
        })
        .catch((err) => {
          this.$alert(err, '提示', {
            confirmButtonText: '确定'
          })
        })

      this.dialogVisible = false
    }
  },
  created () {
    this.axios.post('http://localhost:3000/isLogin')
      .then((res) => {
        if (res.data.status === 1) {
          this.hasLogin = true
          this.userName = res.data.username
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
