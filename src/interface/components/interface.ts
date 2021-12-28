export interface IconProps {
  [icon: string]: string
}

export interface Menu {
  name: string
  path: string
  icon: string
  children?: Array<Menu>
  hideChildren: boolean
  uniqueId: string | number
  level: number
}
