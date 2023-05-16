//explicit types
let number: number;
let character: string;
let isLoggedIn: boolean;

//can not be string because We define it explicitly number
//number = 'mario';
number = 1;
isLoggedIn = false;
character = 'mario';


//arrays
let ninjas: string[] = [];

//ninjas = [10,25];
// we can not oush beacuse array is not a variable now  when it is like : let ninjas: string[];
ninjas.push('mario');


//union types
let mixed: (string|number|boolean) [] = [];
mixed.push('ryu');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string|number;

uid = 'ryu';
uid = 20;
//uid = false;



//objects

let ninjaOne: object;
ninjaOne = {name: 'yoshi', age:30};
//it waorks beacuse object is an array
//ninjaOne = [];

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
};

ninjaTwo = {name: 'ryu',age: 30, beltColor:'black' };