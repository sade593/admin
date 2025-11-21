import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Dashboard from '../pages/Dashboard.vue'
import MainMenu from '../pages/MainMenu.vue'
import News from '../pages/News.vue'
import EditNews from '../pages/EditNews.vue'

// Define routes
const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/main-menu',
    name: 'MainMenu',
    component: MainMenu,
  },
  {
    path: '/news',
    name: 'News',
    component: News,
  },
  {
    path: '/news/edit/:id',
    name: 'EditNews',
    component: EditNews,
    props: true,
  },
  {
    path: '/news/add',
    name: 'AddNews',
    component: () => import('../pages/AddNews.vue'),
  },
  {
    path: '/pages/edit/:id',
    name: 'EditPage',
    component: () => import('../pages/EditPage.vue'),
    props: true,
  },
]

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
