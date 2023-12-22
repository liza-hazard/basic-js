const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.toUTCString();
  } catch {
    throw new Error('Invalid date!');
  }
  if (date.getMonth() <=1 || date.getMonth() == 11) {
    return 'winter';
  }
  else if (date.getMonth() > 1 && date.getMonth() <= 4) {
    return 'spring';
  }
  else if (date.getMonth() > 4 && date.getMonth() <= 7) {
    return 'summer';
  }
  else {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
