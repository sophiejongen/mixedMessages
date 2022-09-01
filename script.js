// These are my 3 categories 

const color = ['red', 'pink', 'green', 'blue', 'purple', 'yellow', 'orange', 'brown'];

const character = ['baby', 'dog', 'kangaroo', 'snake', 'elephant', 'mouse', 'plant', 'shark'];

const object = ['a hat', 'a balloon', 'a phone', 'a watch', 'headphones', 'a wig', 'gloves', 'an icecream cone'];

// now I need a random number between 0-7 

const generateColor=Math.floor(Math.random() * 8);
const generateCharacter=Math.floor(Math.random() * 8);
const generateObject=Math.floor(Math.random() * 8);

//console.log(generateColor);

let colorChoice = color[generateColor];
let characterChoice = character[generateCharacter];
let objectChoice = object[generateObject];

//console.log(colorChoice); 
console.log(`Your lucky charm is a ${colorChoice} ${characterChoice} with ${objectChoice}.`);