const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(arr) {
     this.arr = arr
  }
   calculateDepth(arr) {
     return Array.isArray(arr) ? 1 + Math.max(...arr.map(calculateDepth)) : 0
}
}
