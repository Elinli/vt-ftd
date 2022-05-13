import { Router } from 'vue-router'
import { useAppStore } from '/@/store/app'
import { staticMenu } from '/@/router/staticMenu'
import { depthFlatArrayByKey } from '/@/utils/common'
const flatStaticMenu = depthFlatArrayByKey(staticMenu).map((item) => item.path)
console.log(flatStaticMenu)

const store = useAppStore()
function isTokenEffective() {
  return store.$state.authority
}
export const routerBeforeEach = (router: Router) => {
  router.beforeEach(async (to, _from, next) => {
    // 判断token
    if (['/login'].includes(to.path)) {
      next()
    } else if (isTokenEffective()) {
      if (flatStaticMenu.includes(to.path)) {
        console.log('静态页面', to.path)

        if (['/chart', '/echart', '/echart/detail'].includes(to.path)) {
          // 不存在authorized-重新注册路由-拿token
          console.log(store.$state.authority)

          if (!store.$state.authority) {
            // set authority

            // await store.fetchAuthority({ url: '/api/authority', method: 'GET' })
            // await store.fetchMenu({ url: '/api/authority', method: 'GET' })
            // 注册路由
            // it's a hack func,avoid bug
            next({ ...to, replace: true })
          } else {
            console.log('已经注册过路由')

            next()
          }
        } else {
          next({ path: '/403' })
        }
      } else {
        next()
      }
    } else {
      next('/login')
    }
  })
}
