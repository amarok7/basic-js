const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
  	let count = 1;
     arr.map(el => {
         if (Array.isArray(el)){
             count = Math.max(count, 1 + this.calculateDepth(el));
         }
     });
     return count;
  }
  }