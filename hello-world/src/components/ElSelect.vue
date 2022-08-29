<template>
  <div>
    <el-select :multiple="true" :clearable="true" v-model="value">
      <el-option-group
          v-for="group in options"
          :key="group.label"
          :label="group.label"
      >
        <el-option
            v-for="item in group.options"
            :value="item.value"
            :label="item.label"
            :key="item.value"
        >
        </el-option>
      </el-option-group>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      value: '',
      options: [
        {
          label: "球类",
          options: [
            {
              value: "选项1",
              label: "足球",
            },
            {
              value: "选项2",
              label: "篮球",
              disabled: true,
            },
            {
              value: "选项3",
              label: "排球",
            },
            {
              value: "选项4",
              label: "乒乓球",
            },
          ],
        },
        {
          label: "休闲",
          options: [
            {
              value: "选项5",
              label: "散步",
            },
            {
              value: "选项6",
              label: "游泳",
            },
          ],
        },
      ]
    }
  },

  methods: {

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
