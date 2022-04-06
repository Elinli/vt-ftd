import { reqHttp } from '/@/utils/axios'

export const login = (data: any) =>
  reqHttp.post({ url: '/206-user/manager/sys/user/login', params: data })
export const accountInfo = () => reqHttp.get({ url: '/account/info' })
export const modifyaccountInfo = () =>
  reqHttp.post({ url: '/account/modify/info', params: { name: 'zhangsan' } })
