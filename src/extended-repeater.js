const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const separator = options.separator ? options.separator : '+';
  let times = options.repeatTimes ? options.repeatTimes : 1;
  const addition = String(options.addition) && typeof options.addition != 'undefined' ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 0;
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let result = [];
  function addAddition(addit, num, sep) {
    const arrAddit = [addit];
    while (num > 1) {
      arrAddit.push(addit)
      num --;
    }
    return arrAddit.join(sep);
  }
  while (times > 0) {
    result.push(str + addAddition(addition, additionRepeatTimes, additionSeparator))
    times --;
  }
  return result.join(separator)
}

// function repeater(str, options) {
//   const separator = options.separator ? options.separator : '+';
//   let times = options.repeatTimes ? options.repeatTimes : 1;
//   const addition = String(options.addition) ? String(options.addition) : '';
//   const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 0;
//   const additionSeparator = options.additionSeparator ? options.additionSeparator : '';
//   let result = [];
//   function addAddition(addit, num, sep) {
//     const arrAddit = [addit];
//     while (num > 1) {
//       arrAddit.push(addit)
//       num --;
//     }
//     return arrAddit.join(sep);
//   }
//   while (times > 0) {
//     result.push(str + addAddition(addition, additionRepeatTimes, additionSeparator))
//     console.log(result)
//     times --;
//   }
//   console.log(result.join(separator))
// }

// repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' })
console.log(typeof undefined)

module.exports = {
  repeater
};
