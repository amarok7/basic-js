const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  let Hanoi = {
    turns: 2 ** disksNumber - 1,
    seconds: Math.floor((2 ** disksNumber - 1) * 3600 / turnsSpeed)
  }
  return Hanoi
}
