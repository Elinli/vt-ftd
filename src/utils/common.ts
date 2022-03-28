import { cloneDeep } from 'lodash-es'
const is = (val: any, type: String): Boolean =>
  Object.prototype.toString.call(val) === `[object ${type}]`

const flatDepthArrByKey = (arr: Array<any>, key: any = 'children'): Array<any> => {
  if (!is(arr, 'Array')) throw new Error('flatStaticMenu: arr must be Array')
  const resultArray = []
  const tempArray = cloneDeep(arr)
  while (tempArray.length) {
    const tempItem = tempArray.shift()
    resultArray.push(tempItem)
    if (is(tempItem, 'Object')) {
      if (is(tempItem[key], 'Array')) {
        tempArray.unshift(...tempItem[key])
      }
    }
  }
  return resultArray
}
export { is, flatDepthArrByKey }
