import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home/home.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
