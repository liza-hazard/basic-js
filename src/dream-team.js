const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let team = '';
  if (Array.isArray(members) && members.length > 0 ) {
    for (let name of members) {
      if (typeof(name) == 'string') {
        name = name.trim();
        team += name[0];
      }
    }
  }
  else {
    return false;
  }
  return team.toUpperCase().split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
