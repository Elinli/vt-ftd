import { App, createVNode } from 'vue'
import * as Icons from '@icon-park/vue-next'
import { IconProps } from '../../interface/app'
console.log(Icons)

export const useIcon = () => {
  const setupIcons = (app: App) => {
    Object.keys(Icons).forEach((key) => {
      app.component(key, Icons[key])
    })
  }
  const Icon = (props: IconProps) => {
    const { icon } = props
    return icon && createVNode(Icons[icon])
  }
  return {
    setupIcons,
    Icon,
  }
}
