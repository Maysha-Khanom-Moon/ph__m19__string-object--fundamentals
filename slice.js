// string: sequence of character

const address = 'andorkilla';

/**
 * ---- slice -----
 * 
 * ==> slice(x, y): start x-index and stop before y-index
 * or,
 * ==> slice(x, y): start x-index to y-th element
 */
const part = address.slice(1, 4);

console.log(address);
console.log(part, '\n');


/**
 * -------- split ---------
 * ==> splits a string into an array of substrings
 * 
 * ==> but doesn't change the original array.
*/
const sentence = 'I am a good and hardworking person.';

console.log(sentence.split()); // no split. become 1 element!
console.log(sentence.split('')); // split every char and be substring
console.log(sentence.split(' ')); // split at ' ' and they become elements. ' ' not included at element!
console.log('\n');


/**
 * ----- join -----
 * ==> return an array as a string
 * ==> but original string doesn't change
 */

const realFriend = ['Rahim', 'Kahim', 'dahim', 'lahim', 'fahim', 'sahim'];

console.log(realFriend.join()); // by default separated by ','
console.log(realFriend.join('-')); // separate by '-'