import { createVNode } from 'vue'
import * as Icons from '@icon-park/vue-next'
import { IconProps } from '../../interface/components/interface'

export const Icon = (props: IconProps) => {
  const { icon } = props
  return createVNode(Icons[icon])
}
