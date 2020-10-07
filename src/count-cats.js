const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    let newBackyard =backyard.join().split(",");
    let i = 0
    let result = 0
    while(i < newBackyard.length) {
        if(newBackyard[i] == '^^') {
            result = result + 1
        }
        i = i + 1
    }
  return result
};
