import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // ✅ 你刚才写的路由配置
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App);
app.use(router); // ✅ 挂载路由
app.mount('#app');
app.use(ElementPlus, {
  locale: zhCn,
})
