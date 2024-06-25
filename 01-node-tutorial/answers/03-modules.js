const names = require('./04-names');
const add = require('./05-utils');
const alternativeFlavor = require('./06-alternative-flavor');
const mindGrenade = require('./07-mind-grenade');

console.log(namesModule.names); 
console.log(namesModule.ages); 

const result = add(10, 5);
console.log('Result of addition:', result); 

console.log(alternativeFlavor.items); ['item1', 'item2']

const sumResult = alternativeFlavor.addition(3, 7);
console.log('Result of addition with alternative approach:', sumResult);

mindGrenade(); //  Hello world!

