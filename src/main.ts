import { createApp, App as AppType } from 'vue'
import App from './App.vue'
import '@icon-park/vue-next/styles/index.css'
import { useElementPlus } from '/@/hooks/components/useElementPlus'
import { useIcon } from '/@/hooks/components/useIcons'
import router from '/@/router/index'
const app: AppType<Element> = createApp(App)

useElementPlus(app)
useIcon().setupIcons(app)
app.use(router)
app.mount('#app')
