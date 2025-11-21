import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../pages/Dashboard.vue";
import MainMenu from "../pages/MainMenu.vue";
import News from "../pages/News.vue";
import EditNews from "../pages/EditNews.vue";
import Centers from "../pages/Centers.vue";
import Translations from "../pages/Translations.vue";
import Interruptions from "../pages/Interruptions.vue";
import Announcements from "../pages/Announcements.vue";
import Parameters from "../pages/parameters.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/main-menu",
    name: "MainMenu",
    component: MainMenu,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/news/edit/:id",
    name: "EditNews",
    component: EditNews,
    props: true,
  },
  {
    path: "/news/add",
    name: "AddNews",
    component: () => import("../pages/AddNews.vue"),
  },
  {
    path: "/pages/edit/:id",
    name: "EditPage",
    component: () => import("../pages/EditPage.vue"),
    props: true,
  },
  {
    path: "/centers",
    name: "Centers",
    component: Centers,
  },
  {
    path: "/translations",
    name: "Translations",
    component: Translations,
  },
  {
    path: "/interruptions",
    name: "Interruptions",
    component: Interruptions,
  },
  {
    path: "/announcements",
    name: "Announcements",
    component: Announcements,
  },
  {
    path: "/parameters",
    name: "Parameters",
    component: Parameters,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
