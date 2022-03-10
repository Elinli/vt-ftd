export const fetchMenuData = () => {
  const menu = [
    {
      name: 'chart',
      path: '/chart',
      title: '图表',
      parent: 'root',
      icon: 'icon',
      redirect: '/echart',
      children: [
        {
          name: 'chartIndex',
          path: '/echart',
          title: '图表首页',
          parent: 'chart',
          icon: 'icon1',
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
          icon: 'icon1',
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
      icon: 'icon',
      children: null,
      hideChildren: true,
      uniqueId: 1,
      level: 1,
    },
  ]
  return new Promise((resolve) => {
    resolve(menu)
  })
}
