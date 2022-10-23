import { createRouter, createWebHistory } from "vue-router";
import Main from "../view/MainView.vue";
import About from "../view/AboutView.vue";
const routes = [
  {
    path: "/:catchAll(.*)",
    name: "Main",
    component: Main,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

