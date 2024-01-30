const sentence = 'I am learning web dev';
console.log(sentence);

/**
 *  --- reverse ---
 */

let reverse = '';

for (const letter of sentence) {
    // console.log(letter);
    reverse = letter + reverse;
}

console.log(reverse);


reverse = '';
// another way
for(let i = sentence.length - 1; i >= 0; i--) {
    reverse += sentence[i];
}
console.log(reverse);



/**
 * ---- shortcut ----
 * ==> string has no in-built reverse property
 * 
 * ==> we will use array properties.
 * ==> split then reverse(array property) then join.
 * 
 * ==> split(''): split every letter
 * ==> reverse(): reverse the array
 * ==> join(''): join again without any character
 */

let rev = sentence.split('').reverse().join('');
console.log(rev);