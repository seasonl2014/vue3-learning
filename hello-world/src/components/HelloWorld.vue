<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-empty description="空空如也" />
    <el-empty>
      <!-- image具名插槽用来替换默认的图片部分 -->
      <template v-slot:image>
        <div>这里是自定义图片位置</div>
      </template>
      <!-- description具名插槽用来替换默认的描述部分 -->
      <template v-slot:description>
        <h3>自定义描述内容</h3>
      </template>
      <!-- 默认的插槽用来在空态图的尾部追加内容 -->
      <el-button>看看其他内容</el-button>
    </el-empty>

    <el-button>默认按钮</el-button>
    <el-button size="small">小型按钮</el-button>
    <el-button size="large">超大按钮</el-button>
     <br>
    <br>
    <el-button>默认按钮</el-button>
    <el-button type="primary">常规按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <br>
    <br>
    <el-button type="primary" :plain="true">描边</el-button>
    <el-button type="primary" :round="true">圆角</el-button>
    <el-button type="primary" :circle="true">圆形</el-button>
    <el-button type="primary" :disable="true">禁用</el-button>
    <el-button type="primary" :loading="true">加载</el-button>
    <div id="div">
      <el-button type="primary"><el-icon><Edit /></el-icon>Edit</el-button>
      <el-button type="primary">
        <el-icon><Share /></el-icon>Share
      </el-button>
      <el-button type="primary"><el-icon><Delete /></el-icon>Delete</el-button>
      <el-button type="primary" ><el-icon><Search /></el-icon>Search</el-button>
      <el-button type="primary">
        Upload<el-icon class="el-icon--right"><Upload /></el-icon>
      </el-button>
    </div>

    <div id="div">
      <el-tag>普通标签</el-tag>
      <span style="margin: 10px"></span>
      <el-tag :hit="true">描边标签</el-tag>
      <span style="margin: 10px"></span>
      <el-tag color="purple">紫色背景标签</el-tag>
    </div>

    <div id="div">
      <template v-for="(tag, index) in tags" :key="tag">
        <el-tag :closable="true" @close="closeTag(index)">{{ tag }}</el-tag>
        <span style="padding: 10px"></span>
      </template>
      <el-input
          style="width: 90px"
          v-if="show"
          v-model="inputValue"
          @keyup.enter="handleInputConfirm"
          @blur="handleInputConfirm"
          size="small"
      >
      </el-input>
      <el-button size="small" v-else @click="showInput">新建标签 +</el-button>
    </div>

    <div id="div">
      <el-check-tag :checked="true">足球</el-check-tag>
      <span style="padding: 10px"></span>
      <el-check-tag :checked="false">篮球</el-check-tag>
    </div>

    <div id="div" style="textalign: left">
      <el-skeleton :rows="10" :animated="true">
        <h1>这里是真实的页面元素</h1>
        <p>{{ msg }}</p>
      </el-skeleton>
    </div>

    <div id="div" style="textalign: left">
      <el-skeleton :animated="true">
        <template #template>
          <!-- 定义标题骨架 -->
          <el-skeleton-item
              variant="h1"
              style="width: 100px; height: 30px; padding: 0"
          />
          <!-- 定义图片骨架 -->
          <el-skeleton-item
              variant="image"
              style="width: 240px; height: 240px; padding: 0"
          />
          <!-- 定义段落骨架 -->
          <el-skeleton-item
              variant="p"
              style="width: 30%; padding: 0; margin-top: 20px"
          />
          <el-skeleton-item variant="p" style="width: 90%; padding: 0" />
          <el-skeleton-item variant="p" style="width: 90%; padding: 0" />
        </template>
      </el-skeleton>
    </div>

    <div id="div" style="textalign: left">
      <el-skeleton :rows="1" :animated="true" :loading="loading">
        <h1>这里是真实的页面元素</h1>
        <p>{{ msg }}</p>
      </el-skeleton>
    </div>

    <el-image style="width: 500px" src="http://huishao.cc/img/head-img.png">
      <template #placeholder>
        <h1>加载中...</h1>
      </template>
      <template #error>
        <h1>加载失败</h1>
      </template>
    </el-image>


    <div id="div">
      <!-- 使用文本类型的头像 -->
      <el-avatar style="margin: 20px">用户</el-avatar>
      <!-- 使用图标类型的头像 -->
      <el-avatar style="margin: 20px" icon="el-icon-user-solid"></el-avatar>
      <!-- 使用图片类型的头像 -->
      <el-avatar
          style="margin: 20px"
          :size="100"
          src="http://huishao.cc/img/avatar.jpg"
      ></el-avatar>
      <el-avatar
          style="margin: 20px"
          src="http://huishao.cc/img/avatar.jpg"
      ></el-avatar>
      <el-avatar
          style="margin: 20px"
          shape="square"
          src="http://huishao.cc/img/avatar.jpg"
      ></el-avatar>
    </div>
    <el-radio v-model="radio" label="0">男</el-radio>
    <el-radio v-model="radio" label="1">女</el-radio>

    <div id="div">
      <el-radio-group v-model="radio">
        <el-radio label="1">选项1</el-radio>
        <el-radio label="2">选项2</el-radio>
        <el-radio label="3">选项3</el-radio>
        <el-radio label="4">选项4</el-radio>
      </el-radio-group>
    </div>

    <div id="div">
      <el-radio-group v-model="city">
        <el-radio-button label="1">北京</el-radio-button>
        <el-radio-button label="2">上海</el-radio-button>
        <el-radio-button label="3">广州</el-radio-button>
        <el-radio-button label="4">深圳</el-radio-button>
      </el-radio-group>
    </div>

    <div id="div">
      <el-checkbox-group v-model="checkBox" :min="1" :max="3">
        <el-checkbox label="1">A</el-checkbox>
        <el-checkbox label="2">B</el-checkbox>
        <el-checkbox label="3">C</el-checkbox>
        <el-checkbox label="4">D</el-checkbox>
      </el-checkbox-group>
    </div>

    <div style="margin: 40px">
      <el-input v-model="value"
                placeholder="请输入内容"
                :disabled="false"
                :show-password="true"
                :clearable="true"
                prefix-icon="el-icon-search"
                type="text"></el-input>
    </div>

    <div style="margin: 40px">
      <el-input v-model="value" type="text">
        <template #prepend>Http://</template>
        <template #append>.com</template>
      </el-input>
    </div>

    <div style="margin-top: 240px">
      <el-autocomplete
          v-model="value"
          :fetch-suggestions="queryData"
          placeholder="请输入内容"
          @select="selected"
          :highlight-first-item="true"
      ></el-autocomplete>
    </div>

    <div id="div">
      <el-input-number
          :min="1"
          :max="10"
          :step="1"
          v-model="num"
      ></el-input-number>
    </div>
    <div>
      <el-select :multiple="true" :clearable="true" v-model="value">
        <el-option v-for="item in options"
                   :value="item.value"
                   :label="item.label"
                   :key="item.value">
        </el-option>
      </el-select>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      tags: ['男装','女装','帽子','鞋子'],
      show: false,
      inputValue: '',
      msg: '',
      loading: true,
      city: "1",
      checkBox: [],
      value: "",
      num: 1,
      radio: "0",
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
      ]
    }
  },
  mounted() {
    setTimeout(this.getData,300)
  },
  methods: {
    queryData(queryString, callback) {
      let array = [];
      if (queryString.length > 0) {
        array.push({ value: queryString });
      }
      array.push(
          ...[
            { value: "衣服" },
            { value: "裤子" },
            { value: "帽子" },
            { value: "鞋子" },
          ]
      );
      callback(array);
    },
    getData() {
      this.msg = "这里是请求到的数据"
      this.loading = false
    },
    closeTag(index) {
      this.tags.splice(index,1)
    },
    showInput() {
      this.show= true
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.tags.push(inputValue);
      }
      this.show = false;
      this.inputValue = "";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
