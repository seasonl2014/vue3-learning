<template>
<div>
  <h1>ElMessage 消息提示组件使用技巧</h1>
  <div style="margin-top: 10px">
    <el-button @click="popTip">弹出信息提示</el-button>
    <el-button @click="popTip2">弹出信息提示</el-button>
    <el-button @click="popTip3">弹出信息提示</el-button>
    <el-button @click="popTip4">弹出success信息提示</el-button>
  </div>
  <div style="margin-top: 10px">
    <el-button @click="open1">弹出info信息提示</el-button>
    <el-button @click="open2">弹出warning信息提示</el-button>
    <el-button @click="open3">弹出success信息提示</el-button>
    <el-button @click="open4">弹出error信息提示</el-button>
  </div>
</div>
</template>

<script>
import { h } from 'vue'
import { ElMessage } from 'element-plus'
export default {
methods: {
  open1(){
    ElMessage({
      duration: 0,
      center: true,
      showClose: true,
      dangerouslyUseHTMLString: true,
      message: '<strong>This is <i>HTML</i> string</strong>'
    })
  },
  open2(){
    ElMessage({
      grouping: true,
      showClose: true,
      message: '合并消息',
      type: 'warning',
    })
  },
  open3(){
    ElMessage({
      grouping: true,
      showClose: true,
      message: '合并消息',
      type: 'success',
    })
  },
  open4(){
    ElMessage.error({
      showClose: true,
      message: '弹出error信息提示'
    })
  },
  popTip(){
    this.$message({
      message: '提示内容',
      type: 'warning'
    })
  },
  popTip2() {
    ElMessage('这是一个提示内容')
  },
  popTip3() {
    ElMessage({
      message: h('p', null, [
        h('span', null, 'Message can be '),
        h('i', { style: 'color: teal' }, 'VNode'),
      ]),
    })
  },
  popTip4() {

  }
}
}
</script>

<style scoped>

</style>
