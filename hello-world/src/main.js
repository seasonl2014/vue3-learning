import { createApp } from 'vue'
import App from './App.vue'
// 导入ElementPlus框架
import ElementPlus from 'element-plus'
// 导入导入ElementPlus框架中的CSS样式
import 'element-plus/dist/index.css'
// 导入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

const app=createApp(App)
app.use(ElementPlus)
// 注册axios
app.use(VueAxios, axios)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
