const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

/**
 * ------ loop in object -----
 * ==> for-in loop: to access keys
 */

for (const prop in mobile) {
    console.log(prop + ": " + mobile[prop]); // prop: keyName. So, it works as array index!
}

// another way to get all keys as an array
const keys = Object.keys(mobile);
console.log(keys, '\n');


// now, we can use for-of loop at keys array to access value
for (const value of keys) {
    console.log(value + ': ' + mobile[value]);
}