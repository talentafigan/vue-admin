import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Module from "@/router/module";
import { authMiddleware } from "@/plugins/middleware";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    name: "home",
    path: "/",
    component: Module.index,
  },
  {
    name: "productList",
    path: "/products",
    component: Module.productList,
  },
  {
    name: "productCreate",
    path: "/products/create",
    component: Module.productCreate,
  },
  {
    name: "productDetail",
    path: "/products/:id",
    component: Module.productDetail,
  },
  {
    name: "authLogin",
    path: "/auth/login",
    component: Module.authLogin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  authMiddleware({ to, from, next });
});


export default router;
