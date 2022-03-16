import { App as AppType, createApp } from 'vue'
import App from '/@/App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app: AppType<Element> = createApp(App)
app.use(pinia)

export default app
