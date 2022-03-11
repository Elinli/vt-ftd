const is = (val: any, type: String): Boolean =>
  Object.prototype.toString.call(val) === `[object ${type}]`

export default {
  is,
}
