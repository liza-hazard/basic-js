const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  s1 = s1.split('').sort();
  let i = 0;
  for (let s of s1) {
    if (s2.includes(s)) {
      i ++;
      s2 = s2.slice(0, s2.indexOf(s)) + s2.slice(s2.indexOf(s)+1);
    }
  }
  return i;
}

module.exports = {
  getCommonCharacterCount
};
