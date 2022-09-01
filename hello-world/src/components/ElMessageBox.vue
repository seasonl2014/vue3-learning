<template>
  <h1>MessageBox 消息弹框组件使用技巧</h1>
  <div style="margin-top: 20px">
    <el-button @click="open">打开</el-button>
    <el-button @click="open2">点击</el-button>
    <el-button @click="open3">确认</el-button>
    <el-button @click="open4">提交</el-button>
  </div>
</template>

<script>
import { ElMessageBox } from 'element-plus'
export default {
methods: {
  open() {
    this.$msgbox({
      title: '提示',
      message: '详细的提示内容',
      type: 'warning'
    })
  },
  open2() {
    ElMessageBox({
      title: '提示',
      message: '详细的提示内容',
      type: 'warning'
    })
  },
  open3() {
    ElMessageBox.confirm('提示内容','标题',{
      confirmButtonText: 'ok',
      cancelButtonText: 'Cancel',
      distinguishCancelAndClose: true,
      type: 'success'
    }).then(()=> {
      console.log('确认信息')
    }).catch((action)=> {
      console.log('点击取消',action)
    })
  },
  open4() {
    ElMessageBox.prompt('请输入您的邮箱地址','温馨提示',{
      inputPattern:
          /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
      inputErrorMessage: '邮箱不正确',
    }).then(({value})=> {
      console.log('您输入的邮箱为：',value)
    }).catch(()=> {
      console.log('您已经点击取消')
    })
  }
}
}
</script>

<style scoped>

</style>
