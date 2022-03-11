import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

class EncapsulationRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      },
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data
      },
      (err: AxiosError) => {
        return Promise.reject(err)
      },
    )
  }
  request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }
}

export default EncapsulationRequest
