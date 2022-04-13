import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { disposeConfig, CreateAxiosOptions } from './config'
import { ContentTypeEnum } from '/@/enums/httpEnum'
import { RequestOptions } from '/@/interface/fetch'
import { Result, UploadFileParams } from '/@/types/axios'

class EncapsulationRequest {
  private axiosInstance: AxiosInstance
  private readonly options: CreateAxiosOptions
  constructor(config: AxiosRequestConfig) {
    console.log('global config', config)
    this.options = config
    this.axiosInstance = axios.create(config)

    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 拦截处理
        console.log('全局拦截', config)
        if (config.headers) {
          config.headers['Content-Type'] = 'application/json'
          config.headers['Unthorized'] = '123'
        }
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      },
    )

    this.axiosInstance.interceptors.response.use(
      (res: AxiosResponse) => {
        // 拦截处理
        return res.data
      },
      (err: AxiosError) => {
        return Promise.reject(err)
      },
    )
  }
  request(config: AxiosRequestConfig, options?: RequestOptions): Promise<any> {
    console.log('固定', this.options)
    console.log('参数', options)
    const { requestOptions } = this.options
    console.log('requestOptions', requestOptions)

    const opt = { ...requestOptions, ...options }
    const conf = disposeConfig(config, opt)
    console.log('conf', conf)

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          resolve(res)
        })
        .catch((err: AxiosError) => {
          reject(err)
        })
    })
  }
  get<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'GET' }, options)
  }

  post<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'POST' }, options)
  }

  put<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'PUT' }, options)
  }

  delete<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'DELETE' }, options)
  }
  uploadFile<T = any>(config: AxiosRequestConfig, params: UploadFileParams) {
    const formData = new window.FormData()
    const customFilename = params.name || 'file'

    if (params.filename) {
      formData.append(customFilename, params.file, params.filename)
    } else {
      formData.append(customFilename, params.file)
    }

    if (params.data) {
      Object.keys(params.data).forEach((key) => {
        const value = params.data![key]
        if (Array.isArray(value)) {
          value.forEach((item) => {
            formData.append(`${key}[]`, item)
          })
          return
        }
        formData.append(key, params.data![key])
      })
    }

    return this.axiosInstance.request<T>({
      ...config,
      method: 'POST',
      data: formData,
      headers: {
        'Content-type': ContentTypeEnum.FORM_DATA,
        // @ts-ignore
        ignoreCancelToken: true,
      },
    })
  }
}

export default EncapsulationRequest
