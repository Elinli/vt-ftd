import { Router } from 'vue-router'
import { useAppStore } from '/@/store/app'
const store = useAppStore()
function isTokenEffective() {
  const token = store.$state.authority
  return token
}
export const routerBeforeEach = (router: Router) => {
  router.beforeEach(async (to, _from, next) => {
    // 判断token
    if (['/login'].includes(to.path)) {
      console.log('adasssssss')
      console.log(to.path)

      next()
    } else if (isTokenEffective()) {
      if (['/404', '/403', '/500'].includes(to.path)) {
        next()
      } else if (['/chart', '/echart', '/echart/detail', '/employ'].includes(to.path)) {
        if (['/chart', '/echart', '/echart/detail'].includes(to.path)) {
          // 不存在authorized-重新注册路由-拿token
          console.log(store.$state.authority)

          if (!store.$state.authority) {
            // set authority

            await store.fetchAuthority({ url: '/api/authority', method: 'GET' })
            await store.fetchMenu({ url: '/api/authority', method: 'GET' })
            // 注册路由
            // it's a hack func,avoid bug
            next({ ...to, replace: true })
          } else {
            next()
          }
        } else {
          next({ path: '/403' })
        }
      } else {
        next({ path: '/404' })
      }
    } else {
      next('/login')
    }
  })
}
