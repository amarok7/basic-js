const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if (typeof str !== 'string') String(str);
  if (!options.hasOwnProperty('addition')) {
    options.addition = '';
  }
  if (typeof options.addition !== 'string') {
    options.addition = String(options.addition);
  }

  options.separator = options.separator || '+'
  options.additionSeparator = options.additionSeparator || '|'
  return (str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) +
    options.addition + options.separator).repeat(options.repeatTimes - 1) +
    str +
    (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) +
    options.addition
};


