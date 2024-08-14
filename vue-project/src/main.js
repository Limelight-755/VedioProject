import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/index'

const app = createApp(App)

//axios发送http请求的目标地址的基础路径
axios.defaults.baseURL = "http://localhost:8000"
app.config.globalProperties.$axios = axios

app.mount('#app')
app.use(router)

