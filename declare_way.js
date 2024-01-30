const per = { brand: 'econo', price: 10, color: 'black' }

const PENCIL = new Object({}); 
console.log(PENCIL);
// or
const pencil = new Object(); 
console.log(pencil);
// then we can add property and value

// const rubber = Object.create() // wrong
const rubber = Object.create({})
console.log(rubber);