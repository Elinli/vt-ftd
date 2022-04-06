import { AxiosRequestConfig } from 'axios'
import { is } from '../common'
import { RequestOptions } from './request'
import { ContentTypeEnum, RequestEnum } from '/@/enums/httpEnum'

export interface CreateAxiosOptions extends AxiosRequestConfig {
  authenticationScheme?: string
  requestOptions?: RequestOptions
}

export const instanceConfig = {
  baseUrl: import.meta.env.VITE_APP_BASIC_URL,
  timeout: 10 * 1000,
  headers: { 'Content-Type': ContentTypeEnum.JSON },
  requestOptions: {
    joinPrefix: false,
    urlPrefix: '/follow',
    apiUrl: 'http://206-manage-lung.dev.cechealth.cn',
    independentApiUrl: false,
  },
}

export const beforeRequestHook = (config: AxiosRequestConfig, options: RequestOptions) => {
  const { apiUrl = null, joinPrefix, urlPrefix, independentApiUrl } = options

  console.log('beforeRequestHook config', config)
  console.log('options', options)

  if (joinPrefix) {
    config.url = `${urlPrefix}${config.url}`
  }

  if (independentApiUrl && apiUrl && is(apiUrl, 'String')) {
    config.url = `${apiUrl}${config.url}`
  }
  const params = config.params || {}
  const data = config.data || false

  if (config.method?.toUpperCase() === RequestEnum.GET) {
    if (!is(params, 'String')) {
      config.params = Object.assign(params || {}, {})
    } else {
      // 兼容restful风格
      config.url = config.url + params
      config.params = undefined
    }
  } else {
    if (!is(params, 'String')) {
      if (Reflect.has(config, 'data') && config.data && Object.keys(config.data).length > 0) {
        config.data = data
        config.params = params
      } else {
        // 非GET请求如果没有提供data，则将params视为data
        config.data = params
        config.params = undefined
      }
    } else {
      // 兼容restful风格
      config.url = config.url + params
      config.params = undefined
    }
  }
  return config
}
