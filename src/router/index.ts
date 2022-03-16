import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { useRouterConfig } from '../hooks/components/useRouterConfig'
import { Menu } from '../interface/app'
import { staticMenu } from './staticMenu'
import { routerBeforeEach } from './beforeEach'
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
    component: () => import('/src/views/login/index.vue'),
  },

  {
    path: '/404',
    name: '404',
    meta: {
      title: '错误页面',
    },
    component: () => import('/src/views/errorpage/index.vue'),
  },
  {
    path: '/403',
    name: '403',
    meta: {
      title: '错误页面',
    },
    component: () => import('/src/views/errorpage/index.vue'),
  },
  {
    path: '/500',
    name: '500',
    meta: {
      title: '错误页面',
    },
    component: () => import('/src/views/errorpage/index.vue'),
  },
]

export const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

routerBeforeEach(router)

useRouterConfig(router, staticMenu as Menu[])

export default router
