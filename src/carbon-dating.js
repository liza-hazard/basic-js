const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof(sampleActivity) == 'string' && sampleActivity.trim() != '') {
    sampleActivity = +sampleActivity;
    let MODERN_ACTIVITY = 15;
    let HALF_LIFE_PERIOD = 5730;
    let k = 0.693/HALF_LIFE_PERIOD;
    if (isFinite(sampleActivity) && sampleActivity > 0 && sampleActivity != 0 && sampleActivity < 15) {
      let result = Math.log(MODERN_ACTIVITY/sampleActivity)/k;
      return Math.ceil(result);
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

module.exports = {
  dateSample
};
