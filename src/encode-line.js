const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  str = str.split('');
  let i = 1;
  let result = '';
  for (let l in str) {
      if (str[l] == str[+l+1]) {
          i++;
      }
      else {
          if (i == 1) {
              result += str[l];
          }
          else {
              result += i + str[l];
          }
          i = 1;
      }
  }
  return result;
}

module.exports = {
  encodeLine
};
