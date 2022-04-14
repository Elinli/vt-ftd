import { Router, RouteRecordRaw } from 'vue-router'
import { Menu } from '../../interface/app'

export function afterLoginSetupRoutes(router: Router, menu: Array<Menu>) {
  const dynamicImport = import.meta.glob('../../views/**/*.{vue,tsx}')
  const resultMenu: RouteRecordRaw[] = addComponentToMenuItem(menu, dynamicImport)

  const rootRoutes: RouteRecordRaw = {
    path: '/layouts',
    redirect: '/dashborad',
    name: 'Layouts',
    meta: {},
    component: () => import('../../components/Layouts/index.vue'),
    children: resultMenu,
  }
  router.addRoute(rootRoutes)
}

export function addComponentToMenuItem(
  menu: Menu[],
  dynamicImport: Record<string, () => Promise<{ [key: string]: any }>>,
): Array<RouteRecordRaw> {
  return menu.map((item) => {
    const { children, path, ...rest } = item
    const routeRecord: RouteRecordRaw = {
      path,
      meta: {
        title: rest.title,
        parent: rest.parent,
      },
      ...rest,
      component:
        children && children.length
          ? dynamicImport[`../../views/default/index.vue`]
          : dynamicImport[`../../views${path}/index.vue`],
    }
    if (children && children.length) {
      routeRecord.children = addComponentToMenuItem(children, dynamicImport) as [RouteRecordRaw]
    }
    return routeRecord
  })
}
