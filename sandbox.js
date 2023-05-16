//explicit types
var number;
var character;
var isLoggedIn;
//can not be string because We define it explicitly number
//number = 'mario';
number = 1;
isLoggedIn = false;
character = 'mario';
//arrays
var ninjas = [];
//ninjas = [10,25];
// we can not oush beacuse array is not a variable now  when it is like : let ninjas: string[];
ninjas.push('mario');
//union types
var mixed = [];
mixed.push('ryu');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = 'ryu';
uid = 20;
//uid = false;
//objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
//it waorks beacuse object is an array
//ninjaOne = [];
var ninjaTwo;
ninjaTwo = { name: 'ryu', age: 30, beltColor: 'black' };
