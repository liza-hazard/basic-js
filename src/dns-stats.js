const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let dns = {};
 for (let dom of domains) {
  let sum = '';
  dom = dom.split('.').map(item => '.'+item).reverse().map(function(item) {
    sum = sum+item;
    item = sum;
    return sum;
  });
  for (let d in dom) {
    if (dom[d] in dns) {
      dns[dom[d]] ++;
    }
    else {
      dns[dom[d]] = 1;
    }
  }
 }
 return dns;
}

module.exports = {
  getDNSStats
};
