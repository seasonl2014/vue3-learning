<template>
  <h1>Notification 通知消息组件使用技巧</h1>
  <div style="margin-top: 20px">
    <el-button plain @click="open1"> 自动关闭 </el-button>
  </div>
  <div style="margin-top: 20px">
    <el-button plain @click="open2"> 手动关闭 </el-button>
  </div>

  <div style="margin-top: 20px">
    <el-button plain @click="open3"> Info类型 </el-button>
  </div>

  <div style="margin-top: 20px">
    <el-button plain @click="open4"> Error类型 </el-button>
  </div>
  <h2>自定义消息弹出的位置</h2>
  <div style="margin-top: 20px">
    <el-button plain @click="open1"> Top Right </el-button>
    <el-button plain @click="open2"> Bottom Right </el-button>
    <el-button plain @click="open3"> Bottom Left </el-button>
    <el-button plain @click="open4"> Top Left </el-button>
  </div>


</template>

<script>

import { ElNotification } from 'element-plus'
export default {
  methods: {
    open1() {
      this.$notify({
        title: '通知',
        offset: 100,
        message: '通知内容'
      })
    },
    open2() {
      ElNotification({
        title: '通知',
        message: '通知内容不会自动关闭',
        position: 'bottom-right',
        duration: 0
      })
    },
    open3(){
      ElNotification.info({
        title: 'Info通知',
        message: '这是一个Info通知内容',
        position: 'bottom-left'
      })
    },
    open4() {
      ElNotification.error({
        title: 'Error通知',
        message: '这是一个Error通知内容',
        position: 'top-left'
      })
    }
  }
}
</script>

<style scoped>

</style>
