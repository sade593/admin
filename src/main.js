import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Dashboard }
  ]
})

createApp(App).use(router).mount('#app')
