import express from "express";
import createApp from "../app";
import { renderToString } from "@vue/server-renderer";

import createRouter from "../router/index";
import { createMemoryHistory } from "vue-router";
import { createPinia } from "pinia";
let server = express();
server.use(express.static("build"));
server.get("/*", async (req, res) => {
  let app = createApp(); // 每次请求创建一个新的 app 实例
  // 安装路由
  const router = createRouter(createMemoryHistory());
  app.use(router);
  await router.push(req.url || "/"); // 跳转首页
  await router.isReady(); // 在客户端 和服务端我们都需要 等待路由器 先解析 异步路由组件
  // 安装pina
  const pinia = createPinia();
  app.use(pinia);

  const appContent = await renderToString(app);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="data:;base64,=">
        <title>Document</title>
      </head>
      <body>
        <h1> Vue + Server Side Render</h1>
        <div id="app">${appContent}</div>
        <script src="/client/client_bundle.js"></script>
      </body>
    </html>
  `);
});
server.listen(3000, () => {
  console.log("Node Server Start On 3000");
});
