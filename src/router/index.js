import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../pages/hello/index.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../pages/test/test.jsx"),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
