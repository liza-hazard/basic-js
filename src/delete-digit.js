const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = String(n).split('').map((el) => +el);
  const minNum = Math.min(...arr);
  const maxNum = Math.max(...arr);
  const basicNum = Number(arr.filter((el, index) => index != arr.indexOf(minNum)).join(''));
  if (arr.indexOf(minNum) < arr.indexOf(maxNum)) {
    return basicNum;
  }
  let mostNum = 0;
  arr.forEach((el, index, array) => {
    let currNum = Number(array.filter((i, ind) => ind != index).join(''));
    if (currNum > basicNum) {
      mostNum = currNum;
    }
  })
  return mostNum > basicNum ? mostNum : basicNum;
}

// function deleteDigit(n) {
//   let arr = String(n).split('').map((el) => +el);
//   const minNum = Math.min(...arr);
//   const maxNum = Math.max(...arr);
//   const basicNum = Number(arr.filter((el, index) => index != arr.indexOf(minNum)).join(''));
//   if (arr.indexOf(minNum) < arr.indexOf(maxNum)) {
//     return basicNum;
//   }
//   let mostNum = 0;
//   arr.forEach((el, index, array) => {
//     let currNum = Number(array.filter((i, ind) => ind != index).join(''));
//     if (currNum > basicNum) {
//       mostNum = currNum;
//     }
//   })
//   console.log(mostNum > basicNum ? mostNum : basicNum);
// }
// deleteDigit(342)


module.exports = {
  deleteDigit
};
