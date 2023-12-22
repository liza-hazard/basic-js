const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let filterArr = arr.filter((el) => el != -1).sort((a, b) => {return a - b})
  let numMinus = 0
  let result = arr.map((el, i) => {
    if (el === -1) {
      numMinus++;
      return el;
    }
    return filterArr[i - numMinus]
  })
  return result;
}

function sortByHeight1(arr) {
  let filterArr = arr.filter((el) => el != -1).sort((a, b) => {return a - b})
  let numMinus = 0
  let result = arr.map((el, i, array) => {
    if (el === -1) {
      numMinus++;
      return el;
    }
    return filterArr[i - numMinus]
  })
  console.log(result)
}

sortByHeight1([4, 2, 9, 11, 2, 16])

module.exports = {
  sortByHeight
};
