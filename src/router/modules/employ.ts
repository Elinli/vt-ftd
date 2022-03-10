import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw = {
  path: '/employ',
  name: 'Chart',
  meta: {
    title: '报表',
  },
  component: () => import(/* webpackChunkName: "login" */ '/src/views/login/index.vue'),
}
