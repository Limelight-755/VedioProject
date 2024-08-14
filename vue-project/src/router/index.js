import { createRouter, createWebHistory } from 'vue-router'
import login from '../components/login.vue' //导入login组件
import register from '../components/register.vue' //导入register组件

//配置组件及路径的对应关系
const routes = [
  {
    path: '/',
    component: login
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router //将路由配置导出
