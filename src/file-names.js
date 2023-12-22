const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const result = names.map((el, i, arr) => {
    let element = el.replace(/[0-9]|\(|\)/g, '')
    let filterArr = arr.filter((a, index) => {return a === el && index <= i})
    let newArr = arr.slice(0, i);
    if (filterArr.length > 1) {
      return el + `(${filterArr.length - 1})`;
    }
    else if (filterArr.length === 1 && newArr.includes(element) && el.indexOf('1') > -1) {
      return el + `(${filterArr.length})`;
    }
    return el;
  });
  return result;
}

// function renameFiles(names) {
//   const result = names.map((el, i, arr) => {
//     let element = el.replace(/[0-9]|\(|\)/g, '')
//     let filterArr = arr.filter((a, index) => {return a === el && index <= i})
//     let newArr = arr.slice(0, i);
//     console.log(el.indexOf('1'))
//     if (filterArr.length > 1) {
//       return el + `(${filterArr.length - 1})`;
//     }
//     else if (filterArr.length === 1 && newArr.includes(element) && el.indexOf('1') > -1) {
//       return el + `(${filterArr.length})`;
//     }
//     return el;
//   });
//   console.log(result)
// }

// renameFiles(['a', 'b', 'cd', 'b ', 'a(3)'])


module.exports = {
  renameFiles
};
