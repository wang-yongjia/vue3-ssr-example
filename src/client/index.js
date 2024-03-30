import { createApp } from "vue";
import App from "../App.vue";
import { createWebHistory } from "vue-router";
import createRouter from "../router";
import { createPinia } from "pinia";
let app = createApp(App);

// 安装路由
const router = createRouter(createWebHistory());
app.use(router);

// 安装pina
const pinia = createPinia();
app.use(pinia);

// 在客户端 和服务端我们都需要 等待路由器 先解析 异步路由组件
router.isReady().then(() => {
  app.mount("#app");
});

// app.mount("#app");
