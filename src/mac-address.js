const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  n = n.split('-');
  if (n.length == 6) {
    n = n.map(item => item.replace(/[0-9]/g,''));
    for (let l of n) {
      if (l.length>1) {
        l = l.split('');
        if (l[0] > 'F' || l[1] > 'F') {
          return false;
        }
      }
      else if (l.length==1 && l > 'F') {
          return false;
      }
    }
    return true;
  }
  else {
    return false;
  }
}
module.exports = {
  isMAC48Address
};
