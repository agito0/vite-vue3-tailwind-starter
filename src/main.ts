import { createApp } from 'vue'
import './style/tailwind.css'
import 'element-plus/dist/index.css'
import './style/index.scss'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
const app = createApp(App)
app.use(ElementPlus)

app.use(createPinia())
app.use(router)
app.mount('#app')
