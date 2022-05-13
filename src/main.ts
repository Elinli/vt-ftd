import '@icon-park/vue-next/styles/index.css'
import app from '/@/hooks/components/useApp'
import { useElementPlus } from '/@/hooks/components/useElementPlus'
import { useIcon } from '/@/hooks/components/useIcons'
import router from '/@/router/index'
import 'ant-design-vue/es/message/style/css'
useElementPlus(app)
useIcon().setupIcons(app)
app.use(router)
app.mount('#app')
