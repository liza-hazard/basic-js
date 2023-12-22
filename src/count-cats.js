const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let num_cats = 0;
  for (let i of matrix) {
    let cats = i.filter(function(cat) {
      if (typeof(cat) == 'string') {
      return cat == '^^';
      }
  });
  num_cats += cats.length;
  }
  return num_cats;
}

module.exports = {
  countCats
};
