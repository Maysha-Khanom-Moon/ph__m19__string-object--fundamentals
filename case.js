const school = 'RAJ UK Uttara Model School';

console.log(school); // mixed
console.log(school.toLowerCase()); // lower
console.log(school.toUpperCase()); // upper

const subject = 'Chemistry';
const book = 'chemistry';


/**
 * ----- case sensitive -----
 * 
 * ==> production a email check er jonno onek shomoy case thik na thakleo email accept kore. 
 * ==> So, there we can use toLowerCase() or toUpperCase(). Then, doesn't matter the case.
 * 
 * ==> so, same case a nije string compare kora safe!
 * 
*/
if(subject.toLowerCase() === book.toLowerCase()) {
    console.log('I am reading book aibar porikkhai fatai felbo');
}
else {
    console.log('hudai hudai prista ultai ar vat khawar jonno');
}


/**
 * ------- trim ----------
 * ==> start and end er whitespace remove kore
 * 
 * ==> trimEnd()
 * ==> trimStart()
 * 
 * ==> but majher whitespace shorano jay nah!
 * 
 */

const drink = 'water';
const liquid = ' water  ';

if(drink.trim() === liquid.trim()) {
    console.log('pani er opor nam life');
}
else {
    console.log('somudre pani ase khaite pari nah');
}