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
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
