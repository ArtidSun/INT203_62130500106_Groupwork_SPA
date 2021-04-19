import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseCard from './components/BaseCard.vue'
import BaseButton from './components/BaseButton.vue'
const app = createApp(App)
app.component('base-button',BaseButton)
app.component('base-card',BaseCard)
app.component('')
app.use(router).mount('#app')

