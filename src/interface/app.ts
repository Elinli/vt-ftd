export interface IconProps {
  [icon: string]: string
}

export interface Menu {
  name: string
  title: string
  path: string
  icon: string | undefined | null
  children?: Array<Menu> | null | undefined
  hideChildren: boolean
  uniqueId: string | number
  level: number
  component?: any
  parent?: string | undefined | null
  redirect?: string | undefined | null
  type?: string | undefined | null
}
