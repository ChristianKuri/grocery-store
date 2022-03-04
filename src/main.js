import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Icons
import FontAwesomePlugin from '@/plugins/FontAwesome'

// Styles
import './assets/main.pcss'

// App Wide Components
import AppButton from './components/AppButton.vue'
import AppCountInput from './components/AppCountInput.vue'
import AppModalOverlay from './components/AppModalOverlay.vue'

const pinia = createPinia()

createApp(App)
  .use(pinia)
  .use(FontAwesomePlugin)
  .component('AppButton', AppButton)
  .component('AppCountInput', AppCountInput)
  .component('AppModalOverlay', AppModalOverlay)
  .mount('#app')
