//any type

let age: any = 25;

age = true;
console.log(age);
age = 'test';
console.log(age);
age = 30;
console.log(age);


let mixed: any[] = [];

mixed.push(5);
mixed.push('test');
mixed.push(true);
console.log(mixed);

let ninja: {name: any, age: any};

ninja = {name: 'test', age:30 };