import { createSSRApp } from "vue";
import App from "./App.vue";

// SPA写法
// createApp(App).mount("#app");

// 返回一个函数，目的是每次请求页面都返回一个新的app，避免多个用户使用同一个app实例
export default function createApp() {
  // 创建app
  const app = createSSRApp(App);
  return app;
}
