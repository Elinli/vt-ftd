import { createApp, App as AppType } from 'vue'
import App from './App.vue'
import '@icon-park/vue-next/styles/index.css'
import { useElementPlus } from '/@/hooks/components/useElementPlus'

const app: AppType<Element> = createApp(App)

useElementPlus(app)
app.mount('#app')
