<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      router="true"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#409EFF">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/classification">分类</el-menu-item>
      <el-menu-item index="/about">关于我</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeIndex: '/'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.2rem;
  text-align: center;
  color: #2c3e50;
}
#app .el-menu {
  padding-left: 2rem;
  font-size: 1.4rem;
}
</style>
