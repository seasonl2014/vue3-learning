import { createApp } from 'vue'
import App from './App.vue'
// 引入 createStore方法
import { createStore } from 'vuex'
// 创建应用实例
const app = createApp(App)

const module1 = {
    namespaced: true,
    state() {
        return {
            count1:7
        }
    },
    mutations: {
        increment1(state, payload) {
            state.count1 += payload.count
        }
    }
}

const module2 = {
    namespaced: true,
    state() {
        return {
            count2:0
        }
    },
    mutations: {
        increment2(state, payload,root) {
            state.count2 += payload.count
            root.state.helloWorld1.cont += payload.count
        }
    }
}

// 创建Vuex仓库store实例
const store = createStore({
     modules: {
         helloWorld1: module1,
         helloWorld2: module2
     }
})
// 注入Vuex的store
app.use(store)
// 挂载应用
app.mount('#app')
