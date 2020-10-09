const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  let array = (members.filter(member => typeof member === "string")).map(member => member.trim());
  let result = '';

  for(let i=0; i < array.length; i++) {

    result = result + array[i].slice(0, 1)
  }
  return result.toUpperCase().split('').sort().join('')
};
