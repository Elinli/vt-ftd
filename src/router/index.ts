import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { useRouterConfig } from '../hooks/components/useRouterConfig'
import { Menu } from '../interface/app'
import { fetchMenuData } from './staticMenu'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登陆',
    },
    component: () => import(/* webpackChunkName: "login" */ '/src/views/login/index.vue'),
  },

  // {
  //   path: '/error-page',
  //   name: 'ErrorPage',
  //   meta: {
  //     title: '错误页面',
  //   },
  //   component: () => import(/* webpackChunkName: "error" */ '../views/ErrorPage.vue'),
  // },
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
})
router.beforeEach((to, from, next) => {
  console.log(router.getRoutes())
  console.log({ to, from, next })
  // next(to.path)
  next()
})

fetchMenuData().then((menu) => {
  useRouterConfig(router, menu as Menu[])
})

export default router
