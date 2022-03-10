import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
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
  {
    path: '/workbench',
    redirect: '/chart',
  },
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   meta: {
  //     title: '平台中心',
  //   },
  //   component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
  // },
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
console.log(router)

export default router
