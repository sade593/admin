import { createRouter, createWebHistory } from "vue-router";

import AuthLogin from "../pages/AuthLogin.vue";

import Dashboard from "../pages/Dashboard.vue";
import MainMenu from "../pages/MainMenu.vue";
import News from "../pages/News.vue";
import EditNews from "../pages/EditNews.vue";
import Centers from "../pages/Centers.vue";
import Interruptions from "../pages/Interruptions.vue";
import Announcements from "../pages/announcments.vue";
import EditAnnouncements from "../pages/editannouncments.vue";
import Parameters from "../pages/parameters.vue";

const routes = [
  {
    path: "/",
    redirect: () => {
      const isAuth = localStorage.getItem("auth") === "true";
      return isAuth ? "/dashboard" : "/login";
    },
  },
  {
    path: "/login",
    name: "Login",
    component: AuthLogin,
    meta: { guest: true },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/main-menu",
    name: "MainMenu",
    component: MainMenu,
    meta: { requiresAuth: true },
  },
  {
    path: "/news",
    name: "News",
    component: News,
    meta: { requiresAuth: true },
  },
  {
    path: "/news/edit/:id",
    name: "EditNews",
    component: EditNews,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/news/add",
    name: "AddNews",
    component: () => import("../pages/AddNews.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/pages/edit/:id",
    name: "EditPage",
    component: () => import("../pages/EditPage.vue"),
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/centers",
    name: "Centers",
    component: Centers,
    meta: { requiresAuth: true },
  },
  {
    path: "/interruptions",
    name: "Interruptions",
    component: Interruptions,
    meta: { requiresAuth: true },
  },
  {
    path: "/announcements",
    name: "Announcements",
    component: Announcements,
    meta: { requiresAuth: true },
  },
  {
    path: "/announcements/edit/:id",
    name: "EditAnnouncements",
    component: EditAnnouncements,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/parameters",
    name: "Parameters",
    component: Parameters,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem("auth") === "true";

  if (to.meta.requiresAuth && !isAuth) return next("/login");
  if (to.meta.guest && isAuth) return next("/main-menu");

  next();
});

export default router;
