import { App as AppType, createApp } from 'vue'
import App from '/@/App.vue'
import piniaPersist from 'pinia-plugin-persist'
import { createPinia } from 'pinia'
const pinia = createPinia()
pinia.use(piniaPersist)
const app: AppType<Element> = createApp(App)
app.use(pinia)

export default app
