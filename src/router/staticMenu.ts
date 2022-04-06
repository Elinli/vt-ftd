import { Menu } from '../interface/app'

// menu for static pages
const staticMenu: Array<Menu> = [
  {
    name: 'chart',
    path: '/chart',
    title: '图表',
    parent: 'root',
    icon: 'Abnormal',
    redirect: '/echart',
    type: 'M',
    children: [
      {
        name: 'chartIndex',
        path: '/echart',
        title: '图表首页',
        parent: 'chart',
        icon: '',
        children: [],
        hideChildren: true,
        uniqueId: 3,
        level: 2,
      },
      {
        name: 'chartDetail',
        path: '/echart/detail',
        title: '图表详情',
        parent: 'chart',
        icon: '',
        children: [],
        hideChildren: true,
        uniqueId: 3,
        level: 2,
      },
    ],
    hideChildren: false,
    uniqueId: 2,
    level: 1,
  },
  {
    name: 'employ',
    path: '/employ',
    title: '职工',
    parent: 'root',
    icon: 'AddSubtract',
    children: null,
    hideChildren: true,
    uniqueId: 1,
    level: 1,
  },
  {
    name: 'system',
    path: '/system',
    title: '系统',
    parent: 'root',
    icon: 'BabySling',
    children: null,
    hideChildren: true,
    uniqueId: 3,
    level: 1,
  },
]

// whole menu include button and link and menu
const wholeMenu: Array<Menu> = []

// menu for role
const roleMenu = {
  admin: [],
  ordinary: [],
  root: [],
  manager: [],
  chairman: [],
}

export { wholeMenu, roleMenu, staticMenu }
