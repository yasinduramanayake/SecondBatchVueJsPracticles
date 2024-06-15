const routes = [
  {
    path: "/",
    component: import("@/layouts/default.vue"),
    children: [
      {
        path: "/",
        // component : import("..pages/index.vue")
        component: import("@/pages/index.vue"),
      },
      {
        path: "/test",
        // component : import("..pages/index.vue")
        component: import("@/pages/test.vue"),
      },
      {
        path: "/sample",
        // component : import("..pages/index.vue")
        component: import("@/pages/sample.vue"),
      },
    ],
  },
];

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
