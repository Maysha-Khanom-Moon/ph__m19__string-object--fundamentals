const first = 'Abid';
const last = 'nabid';

let fullName = first + last;
console.log(fullName);

// make a space
fullName = first + ' ' + last;
console.log(fullName);


/**
 * ---- concat ----
 * ==> as like '+' method
 */

fullName = last.concat(' ').concat(first);
console.log(fullName);


/**
 * ------- inclueds --------
 * ==> include(x): checked that x is exist in this string or not!
 * 
 * ==> it's case sensitive
 */

console.log(fullName.includes('abid')); 
console.log(fullName.includes('Nabid'));