<template>
  <h1>ElAlert 提示组件使用技巧</h1>
  <el-alert title="成功提示的文案" type="success"> </el-alert>
  <br />
  <el-alert title="消息提示的文案" type="info"> </el-alert>
  <br />
  <el-alert title="警告提示的文案" type="warning"> </el-alert>
  <br />
  <el-alert title="错误提示的文案" type="error"> </el-alert>


  <el-alert title="成功提示的文案" type="success" effect="dark" />
  <el-alert title="消息提示的文案" type="info" effect="dark" />
  <el-alert title="警告提示的文案" type="warning" effect="dark" />
  <el-alert title="错误提示的文案" type="error" effect="dark" />

  <el-alert title="不可以关闭" type="success" :closable="false" />
  <el-alert title="自定义关闭文本" type="info" close-text="关闭" />
  <el-alert title="带有关闭回调函数" type="warning" @close="hello" />

  <el-alert title="成功提示的文案" type="success" show-icon />
  <el-alert title="消息提示的文案" type="info" show-icon />
  <el-alert title="警告提示的文案" type="warning" show-icon />
  <el-alert title="错误提示的文案" type="error" show-icon />

  <el-alert title="成功提示的文案" type="success" show-icon center  />
  <el-alert title="消息提示的文案" type="info" show-icon center  />
  <el-alert title="警告提示的文案" type="warning" show-icon center  />
  <el-alert title="错误提示的文案" type="error" show-icon center  />

  <el-alert
      title="成功提示的文案"
      type="success"
      description="这是描述的文案."
  />
</template>

<script>
export default {
  methods: {
    hello() {
      alert('Hello World!')
    }
  }
}
</script>

<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
