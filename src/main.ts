// Components
import App from './App.vue'

// Utils
import { createApp } from 'vue'
import router from '@/router/index.ts'

// Styles
import '@/assets/styles/index.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')
