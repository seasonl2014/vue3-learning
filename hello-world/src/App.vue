<template>
  <el-container>
    <el-header height="80px">
      <router-view name="topBar"></router-view>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>

export default {
  name: 'App',
  methods: {
    toUser() {
      this.$router.push({
        name: 'user',
        params: {
          username: '小王'
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
