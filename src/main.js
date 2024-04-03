import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import V3ScrollLock from 'v3-scroll-lock'

const app = createApp(App)

app.use(router)
app.use(V3ScrollLock, { reserveScrollBarGap: true })
app.mount('#app')
