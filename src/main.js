import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ApiService from './services/ApiService'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
ApiService.init(app);
app.use(createPinia())
app.use(router)

app.mount('#app')
