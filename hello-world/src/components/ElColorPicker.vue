<template>
<div>
  <h1>ElColorPicker 颜色选择使用技巧</h1>
  <div>
    <el-color-picker v-model="color1" />
    <el-color-picker v-model="color2" show-alpha />
    <el-color-picker v-model="color" show-alpha :predefine="predefineColors" />
  </div>
</div>
</template>

<script>
export default {
data() {
  return {
    color1: '#409EFF',
    color2: 'rgba(19, 206, 102, 0.8)',
    color3: 'rgba(255, 69, 0, 0.68)',
    predefineColors: [
      '#ff4500',
      '#ff8c00',
      '#ffd700',
      '#90ee90',
      '#00ced1',
      '#1e90ff',
      '#c71585',
      'rgba(255, 69, 0, 0.68)',
      'rgb(255, 120, 0)',
      'hsv(51, 100, 98)',
      'hsva(120, 40, 94, 0.5)',
      'hsl(181, 100%, 37%)',
      'hsla(209, 100%, 56%, 0.73)',
      '#c7158577',
    ]
  }
}
}
</script>

<style scoped>

</style>
