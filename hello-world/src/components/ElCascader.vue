<template>
  <div>
    <div>
      <el-cascader
          v-model="value1"
          :options="datas"
          :props="props1"
      ></el-cascader>
    </div>

    <div style="margin-top: 50px">
      <el-cascader
          filterable
          collapse-tags
          collapse-tags-tooltip
          clearable
          v-model="value"
          :options="datas"
          :props="props"
          placeholder="请选择"
          :show-all-levels="false"
      ></el-cascader>
    </div>

    <div style="margin-top: 50px">
      <el-cascader
          clearable
          v-model="value2"
          :options="datas"
          :props="props2"
          placeholder="请选择"
      ></el-cascader>
    </div>

    <div style="margin-top: 50px">
      <el-cascader :options="datas">
        <template #default="{ node, data }">
          <span>{{ data.label }}</span>
          <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
        </template>
      </el-cascader>
    </div>

    <div style="margin-top: 50px">
      <el-cascader-panel :options="datas" />
    </div>

    <!--cascader事件-->
    <div style="margin-top: 50px">
      <el-cascader ref="nodeRef" :options="datas" @change="change" :props="props3"
      @expand-change="expandChange" @blur="blur" @focus="focus"
      @visible-change="visibleChange" @remove-tag="removeTag"/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      value1: '',
      value: '',
      value2: '',
      props3: {multiple: true},
      props1: {checkStrictly: true},
      props: { expandTrigger: 'hover',multiple: true,checkStrictly: true },
      props2: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node
          let id = 0
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 }).map(() => ({
              value: ++id,
              label: `选项 - ${id}`,
              leaf: level >= 2,
            }))
            resolve(nodes)
          }, 1000)
        }
      },
      datas: [
        {
          value: "父1",
          label: "运动",
          children: [
            {
              value: "子1",
              label: "足球",
            },
            {
              value: "子2",
              label: "篮球",
            },
          ],
        },
        {
          value: "父2",
          label: "休闲",
          children: [
            {
              value: "子1",
              label: "游戏",
            },
            {
              value: "子2",
              label: "魔方",
            },
          ],
        },
      ]
    }
  },
  methods: {
    change() {
      console.log('当绑定值变化时触发的事件')
      const dataNode = this.$refs.nodeRef.getCheckedNodes()
      console.log('获取选中节点的数据',dataNode)
    },
    expandChange() {
      console.log('当展开节点发生变化时触发')
    },
    blur() {
      console.log('当失去焦点时触发的事件')
    },
    focus() {
      console.log('当获得焦点时触发的事件')
    },
    visibleChange() {
      console.log('当下拉框出现/隐藏时触发')
    },
    removeTag() {
      console.log('当在多选模式下，移除Tag时触发')
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
