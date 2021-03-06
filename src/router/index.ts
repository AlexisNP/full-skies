import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Profile from "../views/Profile.vue";

import Celestials from "../views/celestials/Celestials.vue";
import Celestial from "../views/celestials/Celestial.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/a-propos",
    name: "About",
    component: About
  },
  {
    path: "/celestes",
    name: "CelesteAll",
    component: Celestials
  },
  {
    path: "/celestes/:slug",
    name: "CelesteSingle",
    component: Celestial,
    props: true
  },
  {
    path: "/profil",
    name: "Profile",
    component: Profile
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
