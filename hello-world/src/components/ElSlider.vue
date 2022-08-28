<template>
  <div style="margin: 40px">
    <el-slider
        v-model="sliderValue"
    ></el-slider>
  </div>
  <div style="margin: 40px">
    <el-slider
        v-model="sliderValue"
    ></el-slider>
  </div>
  <div style="margin: 40px">
    <el-slider v-model="sliderValue" :format-tooltip="format"></el-slider>
  </div>
  <div style="margin: 40px">
    <span>show-stops显示间断点</span>
    <el-slider v-model="sliderValue" :step="10" show-stops />
  </div>
  <div style="margin: 40px">
    <el-slider
        v-model="sliderValue"
        show-input
    ></el-slider>
  </div>


  <div style="margin: 40px">
    <el-slider v-model="sliderValue" placement="right-end" ></el-slider>
  </div>

  <div style="margin: 40px">
    <el-slider v-model="sliderValue" range  ></el-slider>
  </div>

  <div style="margin: 40px">
    <el-slider v-model="sliderValue" :marks="marks"  ></el-slider>
  </div>

  <div style="margin: 40px">
    <el-slider v-model="sliderValue" @change="change" @input="input" ></el-slider>
  </div>

</template>

<script>
export default {
  data() {
    return {
      sliderValue: 0,
      marks: {
        0:'起点',
        50: '半程啦！',
        90: {
          style: {
            color: '#ff0000'
          },
          label: '快到终点啦'
        }
      }
    }
  },
  methods: {
    format(value) {
      return `${value}%`;
    },
    change() {
      console.log('使用鼠标拖曳时，只在松开鼠标后触发')
    },
    input() {
      console.log('使用鼠标拖曳时，活动过程实时触发')
    }
  }
}
</script>

<style scoped>

</style>
