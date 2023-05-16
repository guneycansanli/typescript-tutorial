let character = 'test';
let age = 30;
let isBlackBelt = false;

//Let can not chance to another type
//character = 2;

character = 'luigi';

//age can not be string
//age = '2';

age = 40;

//isBlackBelt must be boolen
//isBlackBelt = 'yes';
isBlackBelt = true;


//Ts can access all libraryies from JS Math is JS library and TS can use it
//Diameter must be number
const circ = (diameter: number) => {
    return diameter * Math.PI
};

//It will return NaN (Not a Number)
//console.log(circ("hello"));
console.log(circ(7.5));