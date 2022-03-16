const RequestMethodType = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
} as const

type RequestMethodType = typeof RequestMethodType

export interface RequestParams {
  url: string
  method: RequestMethodType[keyof RequestMethodType]
  params?: any
}
