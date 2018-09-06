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
        active-text-color="#409EFF">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/classification">分类</el-menu-item>
        <el-menu-item index="/about">关于我</el-menu-item>
      </el-menu>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeIndex: window.location.pathname
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.2rem;
  text-align: center;
  color: #2c3e50;
}
#app .el-container {
  width: 100%;
  min-height: 100%;
}
#app .el-menu {
  padding-left: 2rem;
  font-size: 1.4rem;
}
#app .el-main {
  padding: 0;
  margin: 20px 0 30px 0;
  min-height: 100%;
  font-size: 1.4rem;
}
#app .el-pagination {
  margin-top: 30px;
}
#app .el-footer {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #545c64;
  color: #fff;
}
</style>
