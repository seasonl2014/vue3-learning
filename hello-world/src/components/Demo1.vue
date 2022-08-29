<template>
<h1>示例页面1</h1>
  <el-button type="primary" @click="click">跳转Demo2</el-button>
</template>

<script>
import Demo2 from "./Demo2.vue"
export default {
  created() {
    console.log(this);
   this.$router.addRoute({
      path: "/demo2",
      component: Demo2,
      name: 'Demo2'
    });
   this.$router.removeRoute('Demo2')

  },
  methods: {
    click() {
      this.$router.push("/demo2");
    }
  }
}
</script>

<style scoped>

</style>
