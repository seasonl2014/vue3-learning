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

// 导入Vue Router模块
import { createRouter, createWebHashHistory } from 'vue-router'
// 导入我们自定义的组件
import Demo1 from './components/Demo1.vue'
import Demo2 from './components/Demo2.vue'
import User from './components/User.vue'
import UserSetting from './components/UserSetting.vue'
import Friends from './components/Friends.vue'
const app=createApp(App)
app.use(ElementPlus)
// 注册axios
app.use(VueAxios, axios)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

const routes = [
    { path: '/demo1', component: Demo1},
    { path: '/d/1', redirect:'/demo1' },
    { path: '/demo22', component: Demo2 },
   {
     path: '/d', redirect: to => {
      console.log(to) // to是路由对象
       // 随机数模拟登录状态
       let login = Math.random() > 0.5
       if (login) {
         return { path: '/demo1' }
       } else {
         return { path: '/demo2' }
       }
    }
   },
    {  path: '/user/:username',
        name: 'user',
       component: User,
        children: [
            {
                path: 'friends/:count',
                component: Friends
            }
        ]
    },
    {  path: '/user/:id(\\d+)',component: UserSetting, alias: '/setting/:id', props:true },
    {
        path: '/home/:username/:id',
        components: {
            topBar: User,
            default: UserSetting
        },
        props: {topBar: true,default: true}
    }
]
// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

// 注册路由
app.use(router)
app.mount('#app')
