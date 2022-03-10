import { Router, RouteRecordRaw } from 'vue-router'
// import { modules } from '/@/router/modules'
const modules = import.meta.glob('../../router/modules/*.ts')
export function useRouterConfig(router: Router) {
  // const promiseImport = filenames.map((filename) => import(`/@/router/modules/${filename}`))
  // return Promise.all(promiseImport).then(async (values) => {
  // console.log(values)
  // values.forEach((item) => {
  //   console.log(item.routes)
  //   routesTotal.push(item.routes)
  // })
  console.log(modules)
  const routesImport = []

  for (const key in modules) {
    routesImport.push(modules[key]())
  }
  console.log(routesImport)
  const ddd: RouteRecordRaw[] = []
  Promise.all(routesImport).then(async (values) => {
    console.log(values)
    values.forEach((item) => {
      console.log(item.routes)
      item.routes && ddd.push(item.routes)
    })
    const rootRoutes: RouteRecordRaw = {
      path: '/workbench',
      redirect: '/chart',
      name: 'Workbench',
      meta: {},
      children: [...ddd],
    }
    console.log(rootRoutes)

    await router.addRoute(rootRoutes)
    setTimeout(() => {
      router.push({ path: '/chart' })
    })
  })
  console.log(11)

  // const rootRoutes: RouteRecordRaw = {
  //   path: '/workbench',
  //   redirect: '/chart',
  //   name: 'Workbench',
  //   meta: {},
  //   children: [],
  // }
  console.log(22)

  // const { routes } = value
  // console.log(rootRoutes)

  // router.addRoute(rootRoutes)
}
