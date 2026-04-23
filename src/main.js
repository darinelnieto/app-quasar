import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes.js'
import './styles/global.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
