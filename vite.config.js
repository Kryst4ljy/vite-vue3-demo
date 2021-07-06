import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import path from "path";

module.exports = defineConfig({
  plugins: [
    "@vue/babel-plugin-jsx",
    vue(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
  server: {
    host: "0.0.0.0",
    port: 8889,
  },
  esbuild: { // 此配置是为了在vue中使用jsx
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: "import { h } from 'vue';",
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variable.scss";`,
      },
    },
  },
});
