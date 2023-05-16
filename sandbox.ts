//arrays
let names = ["mario", "luigi", "yoshi"];

//names array is string array, We can not push int to it
//names.push(3);
//names[0] = 3;
names.push("toad");

let numbers = [1 ,2, 3];
numbers.push(2);
//numbers.push('test');

let mixed = ["ken", 2, "chun-li", 51];
mixed.push(2);
mixed.push("ryu");
mixed[0] = 1;


//objects

let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
}

ninja.age = 17;
ninja.name='ryu';
//ninja.name = 30;
//ninja.skill = ['test','test'];

ninja = {
    name: 'mario',
    belt: 'black',
    age: 30,
//    skills: [""]
};