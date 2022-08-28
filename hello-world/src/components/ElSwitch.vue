<template>
  <div>
    <el-switch
        v-model="switch1"
        active-text="会员"
        inactive-text="非会员"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    ></el-switch>
  </div>
  <div>
    <el-switch
        v-model="switch1"
        active-text="会员"
        inactive-text="非会员"
        size="large"
    ></el-switch>
    <el-switch
        v-model="switch1"
        active-text="会员"
        inactive-text="非会员"
        size="small"
    ></el-switch>
  </div>
  <div>
    <el-switch
        v-model="switch1"
        active-text="男"
        inactive-text="女"
        inline-prompt
    ></el-switch>
  </div>
  <div>
    <el-switch
        v-model="switch1"
        :active-icon="Check"
        :inactive-icon="Close"
        inline-prompt
    ></el-switch>
  </div>
  <div>
    <el-tooltip :content="'Switch value: ' + value" placement="top">
    <el-switch
        v-model="value"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        active-value="100"
        inactive-value="0"
    />
    </el-tooltip>
  </div>
  <div>
    <el-switch v-model="switch1" disabled />
  </div>
  <div>
    <el-switch v-model="switch1" loading />
  </div>
  <div>
    <el-switch v-model="switch1" :before-change="beforeChange" />
  </div>

  <div>
    <el-switch v-model="switch1" @change="change" />
  </div>
</template>

<script>
import { Check, Close } from '@element-plus/icons-vue'
export default {
  data() {
    return {
      value: '100',
      switch1: true,
      Check,
      Close
    }
  },
  methods: {
    beforeChange() {
      return true
    },
    change() {
      console.log('switch 状态发生变化时的回调函数')
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

 #div {
   padding: 40px;
 }

</style>
