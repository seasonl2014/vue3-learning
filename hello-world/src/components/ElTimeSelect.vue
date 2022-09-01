<template>
<div>
  <h1>TimeSelect 时间选择使用技巧</h1>
  <el-time-select
      v-model="value"
      start="00:00"
      step="00:30"
      end="23:59"
      placeholder="Select time"
  />
  <el-time-select
      v-model="value"
      start="00:00"
      step="00:30"
      end="23:59"
      placeholder="Select time"
      format="hh:mm A"
  />
  <div>
    <el-time-select
        v-model="startTime"
        :max-time="endTime"
        class="mr-4"
        placeholder="Start time"
        start="08:30"
        step="00:15"
        end="18:30"
    />
    <el-time-select
        v-model="endTime"
        :min-time="startTime"
        placeholder="End time"
        start="08:30"
        step="00:15"
        end="18:30"
    />
  </div>
</div>
</template>

<script>
export default {
data() {
  return {
    value: '',
    startTime: '',
    endTime: ''
  }
}
}
</script>

<style scoped>

</style>
