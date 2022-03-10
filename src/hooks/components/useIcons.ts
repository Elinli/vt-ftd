import { App, createVNode } from 'vue'
import * as Icons from '@icon-park/vue-next'
import { IconProps } from '../../interface/components/interface'

export const useIcon = () => {
  const setupIcons = (app: App) => {
    Object.keys(Icons).forEach((key) => {
      app.component(key, Icons[key])
    })
  }
  const Icon = (props: IconProps) => {
    const { icon } = props
    return createVNode(Icons[icon])
  }
  return {
    setupIcons,
    Icon,
  }
}
