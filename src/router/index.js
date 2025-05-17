import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/login.vue';

// 定义路由
const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,  // 使用上面定义的路由配置
});


export default router;