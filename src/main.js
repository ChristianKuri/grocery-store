import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Styles
import './assets/main.pcss'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
