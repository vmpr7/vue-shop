import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    // name: "404 Page not found",
    component: () =>
      import(/* webpackChunkName: "404" */ "../pages/404.vue")
}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
