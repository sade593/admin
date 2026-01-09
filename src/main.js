import { createApp } from 'vue'
import App from './App.vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import './style.css'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.min.css'


const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('QuillEditor', QuillEditor)
