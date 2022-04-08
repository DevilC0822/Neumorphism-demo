import { createApp } from 'vue'
import App from './App.vue'
import router from './router/main'

const app = createApp(App)
app.config.globalProperties.foo = 'bar'

app.use(router)

app.mount('#app')
