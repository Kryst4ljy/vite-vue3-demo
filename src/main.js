import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "@/libs/rem"; // 引入全局rem函数

// 引入全局样式文件
import "./styles/index.scss";

createApp(App).use(store).use(router).mount("#app");
