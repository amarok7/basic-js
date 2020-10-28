const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(typeof str !== 'string') String(str);
  if(typeof options.addition !== 'string') String(options.addition);
  options.separator = options.separator || '+'
  options.additionSeparator = options.additionSeparator || '|'
  if(options.additionRepeatTimes == 'undefined') (str + options.addition + options.separator).repeat(options.repeatTimes-1) + str + options.addition
  if(options.repeatTimes == 'undefined') str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes-1) + options.addition
  return (str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes-1) + options.addition + options.separator).repeat(options.repeatTimes-1) + str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes-1) + options.addition
};


