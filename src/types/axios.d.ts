declare type Recordable<T = any> = Record<string, T>

export interface UploadFileParams {
  // Other parameters
  data?: Recordable
  // File parameter interface field name
  name?: string
  // file name
  file: File | Blob
  // file name
  filename?: string
  [key: string]: any
}

export interface Result<T = any> {
  code: number
  type: 'success' | 'error' | 'warning'
  message: string
  result: T
}
