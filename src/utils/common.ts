// 深拷贝
const depthClone = (origin: any, target = new WeakMap()) => {
  if (is(origin, 'Date')) return new Date(origin as Date)
  if (is(origin, 'RegExp')) return new RegExp(origin as RegExp)
  if (target.has(origin)) return target.get(origin)

  const allPropertyDescriptors = Object.getOwnPropertyDescriptors(origin)
  const clone = Object.create(Object.getPrototypeOf(origin), allPropertyDescriptors)
  target.set(origin, clone)
  for (const key of Reflect.ownKeys(origin)) {
    const value = origin[key]
    if (!((is(value, 'Object') && value !== null) || is(value, 'Array'))) {
      clone[key] = value
    } else {
      clone[key] = depthClone(value, target)
    }
  }
  return clone
}

const is = (val: any, type: String): Boolean =>
  Object.prototype.toString.call(val) === `[object ${type}]`

const depthFlatArrayByKey = (arr: Array<any>, key: any = 'children'): Array<any> => {
  if (!is(arr, 'Array')) throw new Error('depthFlatArrayByKey: array must be an Array')
  const resultArray = []
  const tempArray = depthClone(arr)
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
export { is, depthFlatArrayByKey, depthClone }
