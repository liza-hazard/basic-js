const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let row1 = matrix[0].reduce(summa, 0)
  function summa(sum, el) {
    return sum + el;
  }
  function rows(arr, rowN) {
    arr = arr.filter((elem, i) => {
      if (matrix[rowN - 1][i] != 0) {
        return elem
      }
    })
    return arr.reduce(summa, 0)
  }
  for (let i = 1; i < matrix.length; i++) {
    row1 += rows(matrix[i], i)
  }
  return row1;
}
// function getMatrixElementsSum(matrix) {
//   let row1 = matrix[0].reduce(summa, 0)
//   function summa(sum, el) {
//     return sum + el;
//   }
//   function rows(arr, rowN) {
//     console.log(arr)
//     arr = arr.filter((elem, ind) => {
//       if (matrix[rowN - 1][ind] != 0) {
//         return elem
//       }
//     })
//     return arr.reduce(summa, 0)
//   }
//   for (let i = 1; i < matrix.length; i++) {
//     row1 += rows(matrix[i], i)
//   }
//   console.log(row1);
// }
// getMatrixElementsSum([
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ])

module.exports = {
  getMatrixElementsSum
};
