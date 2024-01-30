// declaration of string
const country = 'Bangladesh'; // string
const division = "mymensingh"; 
const district = `B-Baria`; // string
const thana = new String(`Demra`); // object

console.log(typeof district);
console.log(district, '\n');

console.log(typeof thana);
console.log(thana);


// array
const numbers = [54, 98, 78, 21, 65];
console.log(numbers.length);
console.log(numbers[1]);


// string
let capital = 'Dhaka';
console.log('capital:', capital);
console.log(capital[1]);


/**
 * ==> string is immutable --> not changeable
 * 
 * ==> but is mutable --> can change
 *  
 */

capital[0] = 'F';
console.log(capital);