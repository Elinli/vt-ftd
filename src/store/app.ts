import { Menu } from './../interface/app'
import { defineStore } from 'pinia'
import { staticMenu } from '/@/router/staticMenu'
import { login } from '../api/account'
import router from '../router'
interface AppState {
  menu: Menu[]
  authority: null | string | undefined
  routes: any
}
export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => {
    return {
      menu: [] as Menu[],
      authority: '',
      routes: null,
    }
  },
  getters: {
    authorityGetters: (state) => state.authority,
    menuGetters: (state) => state.menu,
    routesGetters: (state) => state.routes,
  },
  actions: {
    async fetchAuthority(params: unknown) {
      if (!params) {
        this.authority = null
        return
      }
      login(params)
        .then(async (res: any) => {
          // 登陆成功获取权限菜单
          console.log(res)
          const { userInfo, token } = res
          this.authority = token
          console.log(userInfo, token)
        })
        .catch((err: any) => {
          console.log(err)
        })
        .finally(() => {
          this.authority = 'token'
          this.menu = staticMenu
          router.push('/chart')
        })
    },

    changeRoutes(params: any) {
      this.routes = params
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'app',
        storage: localStorage,
        paths: ['menu', 'authority', 'routes'],
      },
    ],
  },
})
