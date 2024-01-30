const age = 21;
const school = 'rifle square';
const isPassed = true;
let isDeveloper; // undefined

const subject = ['bangla', 'English', 'Physics', 'Math'];


/**
 * ---- object ----
 * 
 * objectName = {
 *      key: value,
 *      key2: value2,
 *      ...
 *      ...
 * }
 * 
 * ==> it's not sequential
 * 
 * ==> it's non-primitive. Because, everyone is not same type.
*/

const bottle = {
    brand: 'apple',
    price: 45,
    color: 'white',
    isClean: false
}

// accessing value by keyName
console.log(bottle.brand);
console.log(bottle['brand']);
