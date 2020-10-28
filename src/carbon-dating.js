const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || Number(sampleActivity) == NaN || Number(sampleActivity) == 0 || Number(sampleActivity) > MODERN_ACTIVITY || Number(sampleActivity) <= 0) {
    return false
  } else {
    return Math.ceil(Math.log((+sampleActivity)/MODERN_ACTIVITY) / (0.693 / HALF_LIFE_PERIOD))
  }
};
