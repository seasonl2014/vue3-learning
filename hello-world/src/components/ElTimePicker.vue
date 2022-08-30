<template>
<div style="margin: 40px">
  <el-time-picker v-model="value1"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds">

  </el-time-picker>
</div>

  <div style="margin: 40px">
    <el-time-picker
        v-model="value2"
        is-range
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="change"
        @blur="blur"
        @focus="focus"
        @visible-change="visible_change"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: new Date(2022, 9, 10, 18, 30,30),
      value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
    }
  },
  methods: {
    change() {
      console.log('用户选择的值发生变化时触发的事件')
    },
    blur() {
      console.log('输入框失去焦点时触发的事件')
    },
    focus() {
      console.log('输入框获取焦点时触发的事件')
    },
    visible_change() {
      console.log('当 TimePicker 的下拉列表出现/消失时触发的事件 ')
    },
    // 选择时间范围
    makeRange(start,end){
      const result = []
      for (let i = start; i <= end; i++) {
        result.push(i)
      }
      return result
    },
    // 禁止选择某些小时
    disabledHours() {
      return this.makeRange(0, 16).concat(this.makeRange(19, 23))
    },
    // 禁止选择某些分钟
    disabledMinutes(hour) {
      if (hour === 17) {
        return this.makeRange(0, 29)
      }
      if (hour === 18) {
        return this.makeRange(31, 59)
      }
    },
    // 禁止选择某些秒
    disabledSeconds(hour,minute) {
      if (hour === 18 && minute === 30) {
        return this.makeRange(1, 59)
      }
    }
  }
}
</script>

<style scoped>

</style>
