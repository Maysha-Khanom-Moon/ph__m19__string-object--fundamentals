const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 2500,
    married: false,
    'parent': 'yes',

    // key name a ' ', ':' dite hole, '' must!
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

console.log(person);
console.log('\n');

// accessing value by key
// 1. dot notation
console.log(person.profession);

// console.log(person.fav places); // not possible


// 2. bracket notation
// array 
console.log(person['age']);
console.log(person['fav places']);


/**
 * --- keyName store at variable ---
 * 
 * we just can access via keyName as like array[index]
 * 
 */ 3.
const keyName = 'name';

console.log(person[keyName], '\n\n');
// console.log(person.keyName);
// console.log(person['keyName']);



// value update
person.parent = 'ma'
console.log(person['parent']);

person['parent'] = 'baba'
console.log(person.parent);


// non-existential properties
console.log(person.son); // undefined